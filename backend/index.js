const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const axios = require('axios');
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const csvFile = path.join(__dirname, 'requests.csv');
const { google } = require('googleapis');
//const credentials = require('./google-credentials.json');
const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS_JSON);
const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const crypto = require('crypto');
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || crypto.randomBytes(24).toString('hex');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

function saveRequestsToCSV(requests) {
  const header = 'id,name,phone,email,type,area,days,comment,createdAt\n';
  const rows = requests.map(r => [r.id, r.name, r.phone, r.email, r.type, r.area, r.days, r.comment, r.createdAt].map(x => `"${String(x).replace(/"/g, '""')}"`).join(',')).join('\n');
  fs.writeFileSync(csvFile, header + rows, 'utf8');
}

function loadRequestsFromCSV() {
  if (!fs.existsSync(csvFile)) return [];
  const lines = fs.readFileSync(csvFile, 'utf8').split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];
  return lines.slice(1).map(line => {
    const [id, name, phone, email, type, area, days, comment, createdAt] = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/).map(s => s.replace(/^"|"$/g, '').replace(/""/g, '"'));
    return { id: Number(id), name, phone, email, type, area, days, comment, createdAt };
  });
}

async function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
}

// Получить все заявки из Google Sheets
async function getAllRequestsFromSheet() {
  const sheets = await getSheetsClient();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: 'A2:K', // id, name, phone, email, type, area, days, comment, adminComment, location, createdAt
  });
  return (res.data.values || []).map(row => ({
    id: Number(row[0]),
    name: row[1],
    phone: row[2],
    email: row[3],
    type: row[4],
    area: row[5],
    days: row[6],
    comment: row[7],
    adminComment: row[8] || '',
    location: row[9],
    createdAt: row[10],
  }));
}

// Добавить заявку в Google Sheets
async function addRequestToSheet(request) {
  const sheets = await getSheetsClient();
  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: 'A2:K',
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [[
        request.id,
        request.name,
        request.phone,
        request.email,
        request.type,
        request.area,
        request.days,
        request.comment,
        '', // adminComment пустой при создании
        request.location,
        request.createdAt,
      ]],
    },
  });
}

// Удалить заявку из Google Sheets по id
async function deleteRequestFromSheet(id) {
  const sheets = await getSheetsClient();
  // Получаем все строки с их индексами
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: 'A2:A',
  });
  const rows = res.data.values || [];
  const rowIndex = rows.findIndex(row => String(row[0]) === String(id));
  if (rowIndex === -1) return false;
  // Удаляем строку (rowIndex + 2, т.к. первая строка — заголовки, а индексация с 1)
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId: SHEET_ID,
    requestBody: {
      requests: [{
        deleteDimension: {
          range: {
            sheetId: 0, // Обычно 0 — первый лист, если другой — нужно указать явно
            dimension: 'ROWS',
            startIndex: rowIndex + 1,
            endIndex: rowIndex + 2,
          },
        },
      }],
    },
  });
  return true;
}

// Обновить adminComment по id
async function updateAdminCommentInSheet(id, adminComment) {
  const sheets = await getSheetsClient();
  // Получаем все строки с их индексами
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: 'A2:A',
  });
  const rows = res.data.values || [];
  const rowIndex = rows.findIndex(row => String(row[0]) === String(id));
  if (rowIndex === -1) return false;
  // adminComment — 9-я колонка (индекс 8), строки с 0, а данные с A2, поэтому +1
  await sheets.spreadsheets.values.update({
    spreadsheetId: SHEET_ID,
    range: `I${rowIndex + 2}`,
    valueInputOption: 'RAW',
    requestBody: { values: [[adminComment]] },
  });
  return true;
}

let requests = loadRequestsFromCSV();

app.post('/api/request', async (req, res) => {
  const { name, phone, email, type, area, days, comment, location } = req.body;
  if (!name || !phone || !type || !area || !days || !location) {
    return res.status(400).json({ error: 'Заполните все обязательные поля.' });
  }
  const newRequest = {
    id: Date.now(),
    name, phone, email, type, area, days, comment, location,
    createdAt: new Date().toISOString(),
  };
  try {
    await addRequestToSheet(newRequest);

    // Email
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
      const mailOptions = {
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO,
        subject: 'Новая заявка на аренду опалубки',
        text: `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email}\nТип опалубки: ${type}\nПлощадь: ${area}\nСрок аренды: ${days}\nГород/Село: ${location}\nКомментарий: ${comment}`,
      };
      await transporter.sendMail(mailOptions);
    } catch (err) { console.error('Ошибка email:', err.message); }

    // WhatsApp
    if (process.env.CALLMEBOT_PHONE && process.env.CALLMEBOT_TOKEN) {
      try {
        const msg = `Новая заявка:\nИмя: ${name}\nТелефон: ${phone}\nEmail: ${email}\nТип: ${type}\nПлощадь: ${area}\nСрок: ${days}\nГород/Село: ${location}\nКомментарий: ${comment}`;
        await axios.get(`https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(process.env.CALLMEBOT_PHONE)}&text=${encodeURIComponent(msg)}&apikey=${process.env.CALLMEBOT_TOKEN}`);
      } catch (e) {
        console.error('Ошибка отправки WhatsApp:', e.message);
      }
    }

    // Telegram
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      try {
        const msg = `Новая заявка:%0AИмя: ${name}%0AТелефон: ${phone}%0AEmail: ${email}%0AТип: ${type}%0AПлощадь: ${area}%0AСрок: ${days}%0AГород/Село: ${location}%0AКомментарий: ${comment}`;
        await axios.get(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}&text=${msg}`);
      } catch (e) {
        console.error('Ошибка отправки Telegram:', e.message);
      }
    }

    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: 'Ошибка сохранения или уведомления', details: e.message });
  }
});

// Эндпоинт для логина
app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    res.json({ token: ADMIN_TOKEN });
  } else {
    res.status(401).json({ error: 'Неверный пароль' });
  }
});

// Эндпоинт для получения всех заявок (только для админа)
app.get('/api/requests', async (req, res) => {
  const token = req.headers['x-admin-token'];
  if (token !== ADMIN_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    let requests = await getAllRequestsFromSheet();
    const { name, phone, location } = req.query;
    if (name) {
      requests = requests.filter(r => r.name && r.name.toLowerCase().includes(String(name).toLowerCase()));
    }
    if (phone) {
      requests = requests.filter(r => r.phone && r.phone.includes(String(phone)));
    }
    if (location) {
      requests = requests.filter(r => r.location && r.location.toLowerCase().includes(String(location).toLowerCase()));
    }
    res.json(requests);
  } catch (e) {
    res.status(500).json({ error: 'Ошибка чтения из Google Sheets', details: e.message });
  }
});

app.delete('/api/requests/:id', async (req, res) => {
  const token = req.headers['x-admin-token'];
  if (token !== ADMIN_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const ok = await deleteRequestFromSheet(req.params.id);
    if (!ok) return res.status(404).json({ error: 'Not found' });
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: 'Ошибка удаления из Google Sheets', details: e.message });
  }
});

// PUT /api/requests/:id/admin-comment
app.put('/api/requests/:id/admin-comment', async (req, res) => {
  const token = req.headers['x-admin-token'];
  if (token !== ADMIN_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const { adminComment } = req.body;
  if (typeof adminComment !== 'string') {
    return res.status(400).json({ error: 'adminComment is required' });
  }
  try {
    const ok = await updateAdminCommentInSheet(req.params.id, adminComment);
    if (!ok) return res.status(404).json({ error: 'Not found' });
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: 'Ошибка обновления комментария', details: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend API listening on port ${PORT}`);
});