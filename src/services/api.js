// src/services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://52.91.72.15', // Tu API
  withCredentials: false, // No necesitamos cookies aquí
  headers: {
    'Content-Type': 'application/json',
  },
  // No pongas httpsAgent aquí en frontend
});

export default instance;
