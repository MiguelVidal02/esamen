import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/login', { email, password });
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/users');
    } catch (error) {
      alert('Error de login');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" /><br/>
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" /><br/>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
