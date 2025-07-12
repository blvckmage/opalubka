"use client";
import { useState, useEffect } from "react";
import { Container, Typography, Box, TextField, Button, Paper, Table, TableHead, TableRow, TableCell, TableBody, Alert, Stack, IconButton, InputAdornment, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function AdminPage() {
  const [token, setToken] = useState<string | null>(null);
  const [login, setLogin] = useState({ password: "" });
  const [loginError, setLoginError] = useState("");
  const [requests, setRequests] = useState<any[]>([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editId, setEditId] = useState<number|null>(null);
  const [editComment, setEditComment] = useState("");
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [filterName, setFilterName] = useState("");
  const [filterPhone, setFilterPhone] = useState("");

  // --- Авторизация ---
  useEffect(() => {
    const t = typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null;
    if (t) setToken(t);
  }, []);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoginError("");
    try {
      const res = await fetch(`${apiUrl}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: login.password })
      });
      if (res.ok) {
        const data = await res.json();
        setToken(data.token);
        if (typeof window !== 'undefined') localStorage.setItem('admin_token', data.token);
      } else {
        setLoginError("Неверный пароль");
      }
    } catch {
      setLoginError("Ошибка сети");
    }
  };

  // --- Заявки ---
  const fetchRequests = async () => {
    setLoading(true);
    setError("");
    try {
      const params = [];
      if (filterName) params.push(`name=${encodeURIComponent(filterName)}`);
      if (filterPhone) params.push(`phone=${encodeURIComponent(filterPhone)}`);
      const query = params.length ? `?${params.join("&")}` : "";
      const res = await fetch(`${apiUrl}/api/requests${query}`, {
        headers: { "x-admin-token": token || "" }
      });
      if (res.ok) {
        setRequests(await res.json());
      } else {
        setError("Ошибка авторизации или загрузки");
      }
    } catch {
      setError("Ошибка сети");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => { if (token) fetchRequests(); }, [token, filterName, filterPhone]);

  // --- Удаление ---
  const handleDelete = async (id: number) => {
    if (!window.confirm("Удалить заявку?")) return;
    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}/api/requests/${id}`, {
        method: "DELETE",
        headers: { "x-admin-token": token || "" }
      });
      if (res.ok) fetchRequests();
      else setError("Ошибка удаления");
    } catch {
      setError("Ошибка сети");
    } finally {
      setLoading(false);
    }
  };

  // --- Редактирование комментария ---
  const handleEditComment = (id: number, comment: string) => {
    setEditId(id);
    setEditComment(comment || "");
    setEditDialogOpen(true);
  };
  const saveEditComment = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}/api/requests/${editId}/admin-comment`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", "x-admin-token": token || "" },
        body: JSON.stringify({ adminComment: editComment })
      });
      if (res.ok) {
        setEditDialogOpen(false);
        fetchRequests();
      } else {
        setError("Ошибка сохранения комментария");
      }
    } catch {
      setError("Ошибка сети");
    } finally {
      setLoading(false);
    }
  };

  const handleResetFilters = () => {
    setFilterName("");
    setFilterPhone("");
  };

  if (!token) {
    return (
      <Container maxWidth="xs" sx={{ py: 8 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" fontWeight={700} gutterBottom>Вход в админ-панель</Typography>
          <form onSubmit={handleLogin}>
            <TextField
              label="Пароль администратора"
              type="password"
              value={login.password}
              onChange={e => setLogin({ password: e.target.value })}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>Войти</Button>
            {loginError && <Alert severity="error" sx={{ mt: 2 }}>{loginError}</Alert>}
          </form>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" fontWeight={700}>Заявки</Typography>
        <Stack direction="row" spacing={2}>
          <Button onClick={() => { localStorage.removeItem('admin_token'); setToken(null); }} color="secondary">Выйти</Button>
        </Stack>
      </Box>
      <Box mb={2}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <TextField
            label="Имя"
            value={filterName}
            onChange={e => setFilterName(e.target.value)}
            size="small"
          />
          <TextField
            label="Телефон"
            value={filterPhone}
            onChange={e => setFilterPhone(e.target.value)}
            size="small"
          />
          <Button onClick={handleResetFilters} variant="outlined" color="secondary">Сбросить</Button>
        </Stack>
      </Box>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <Paper sx={{ overflowX: 'auto' }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Имя</TableCell>
              <TableCell>Телефон</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Тип</TableCell>
              <TableCell>Площадь</TableCell>
              <TableCell>Срок</TableCell>
              <TableCell>Город/Село</TableCell>
              <TableCell>Комментарий пользователя</TableCell>
              <TableCell>Комментарий администратора</TableCell>
              <TableCell>Дата</TableCell>
              <TableCell>Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map(r => (
              <TableRow key={r.id}>
                <TableCell>{r.id}</TableCell>
                <TableCell>{r.name}</TableCell>
                <TableCell>{r.phone}</TableCell>
                <TableCell>{r.email}</TableCell>
                <TableCell>{r.type}</TableCell>
                <TableCell>{r.area}</TableCell>
                <TableCell>{r.days}</TableCell>
                <TableCell>{r.location}</TableCell>
                <TableCell>{r.comment}</TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <span>{r.adminComment || ""}</span>
                    <IconButton size="small" onClick={() => handleEditComment(r.id, r.adminComment)}><EditIcon fontSize="small" /></IconButton>
                  </Box>
                </TableCell>
                <TableCell>{r.createdAt && r.createdAt.slice(0, 19).replace('T', ' ')}</TableCell>
                <TableCell>
                  <IconButton color="error" onClick={() => handleDelete(r.id)}><DeleteIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>Редактировать комментарий администратора</DialogTitle>
        <DialogContent>
          <TextField
            label="Комментарий администратора"
            value={editComment}
            onChange={e => setEditComment(e.target.value)}
            fullWidth
            multiline
            minRows={2}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Отмена</Button>
          <Button onClick={saveEditComment} variant="contained">Сохранить</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
} 