import { useState, useEffect } from 'react';
import api from '../services/api';

function Users() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const fetchUsers = async () => {
    const res = await api.get('/users');
    setUsers(res.data);
  };

  useEffect(() => { fetchUsers(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/users', form);
    setForm({ name: '', email: '', password: '' });
    fetchUsers();
  };

  const handleDelete = async (id) => {
    await api.delete(`/users/${id}`);
    fetchUsers();
  };

  return (
    <div>
      <h2>Usuarios</h2>
      <form onSubmit={handleSubmit}>
        <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Nombre" />
        <input value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="Email" />
        <input value={form.password} onChange={e => setForm({...form, password: e.target.value})} placeholder="Password" />
        <button type="submit">Crear</button>
      </form>

      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name} ({u.email})
            <button onClick={() => handleDelete(u.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
