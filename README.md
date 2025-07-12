# Опалубка - Сервис аренды опалубки

Современный веб-сайт для аренды опалубки с многоязычной поддержкой (русский и казахский языки).

## 🚀 Особенности

- **Многоязычность**: Поддержка русского и казахского языков
- **Калькулятор стоимости**: Интерактивный калькулятор для расчета стоимости аренды
- **Система заявок**: Форма подачи заявок на аренду
- **Админ-панель**: Управление заявками через защищенный интерфейс
- **Интеграция с Google Sheets**: Хранение данных в Google Sheets
- **Адаптивный дизайн**: Полная поддержка мобильных устройств

## 🛠 Технологии

### Frontend
- **Next.js 15** - React фреймворк
- **TypeScript** - Типизированный JavaScript
- **Material-UI (MUI)** - UI компоненты
- **React-i18next** - Интернационализация
- **Axios** - HTTP клиент

### Backend
- **Express.js** - Node.js веб-фреймворк
- **Google Sheets API** - Хранение данных
- **Nodemailer** - Отправка email
- **CORS** - Cross-origin resource sharing

## 📁 Структура проекта

```
opalovka/
├── frontend/                 # Next.js приложение
│   ├── app/                 # App Router страницы
│   ├── src/
│   │   ├── components/      # React компоненты
│   │   └── i18n.ts         # Конфигурация i18n
│   └── package.json
├── backend/                 # Express.js сервер
│   ├── index.js            # Основной файл сервера
│   └── package.json
└── package.json            # Корневой package.json
```

## 🚀 Установка и запуск

### Предварительные требования
- Node.js 18+
- npm или yarn
- Google Sheets API credentials

### 1. Клонирование репозитория
```bash
git clone <repository-url>
cd opalovka
```

### 2. Установка зависимостей
```bash
# Установка корневых зависимостей
npm install

# Установка зависимостей frontend
cd frontend
npm install

# Установка зависимостей backend
cd ../backend
npm install
```

### 3. Настройка переменных окружения

Создайте файл `.env` в корне проекта:

```env
# Backend
PORT=4000
GOOGLE_SHEET_ID=your_google_sheet_id
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email
GOOGLE_PRIVATE_KEY=your_private_key
ADMIN_PASSWORD=your_admin_password
ADMIN_TOKEN=your_admin_token

# Frontend
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### 4. Настройка Google Sheets API

1. Создайте проект в [Google Cloud Console](https://console.cloud.google.com/)
2. Включите Google Sheets API
3. Создайте Service Account
4. Скачайте credentials.json и переименуйте в `google-credentials.json`
5. Поместите файл в папку `backend/`
6. Поделитесь Google Sheet с email сервисного аккаунта

**Важно:** Файл `google-credentials.json` содержит секретные данные и не должен попадать в репозиторий. Он уже добавлен в `.gitignore`.

### 5. Запуск приложения

```bash
# Запуск backend (в папке backend)
npm start

# Запуск frontend (в папке frontend)
npm run dev
```

Приложение будет доступно по адресам:
- Frontend: http://localhost:3000
- Backend: http://localhost:4000

## 📱 Страницы

- **Главная** (`/`) - Информация о компании
- **Каталог** (`/catalog`) - Каталог продукции
- **Как арендовать** (`/how-to-rent`) - Инструкции по аренде
- **Контакты** (`/contacts`) - Контактная информация и форма заявки
- **Галерея** (`/gallery`) - Фотографии проектов
- **Калькулятор** (`/calculator`) - Калькулятор стоимости
- **Админ-панель** (`/admin`) - Управление заявками

## 🔐 Админ-панель

Доступ к админ-панели: `/admin`
- Просмотр всех заявок
- Фильтрация по имени, телефону
- Редактирование комментариев администратора
- Удаление заявок

## 🌐 Многоязычность

Проект поддерживает два языка:
- **Русский** (ru) - основной язык
- **Казахский** (kz) - дополнительный язык

Переключение языков доступно через компонент LanguageSwitcher.

## 📧 API Endpoints

### Заявки
- `POST /api/request` - Создание новой заявки
- `GET /api/requests` - Получение всех заявок
- `DELETE /api/requests/:id` - Удаление заявки
- `PUT /api/requests/:id` - Обновление заявки

### Админ
- `POST /api/admin/login` - Вход в админ-панель
- `GET /api/admin/requests` - Получение заявок (с авторизацией)

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add amazing feature'`)
4. Отправьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект лицензирован под MIT License.

## 📞 Контакты

- Телефон: +7 700 123 45 67
- WhatsApp: [Ссылка на WhatsApp]
- Email: info@opalubka.kz

---

© 2024 ОПАЛУБКА. Все права защищены. 