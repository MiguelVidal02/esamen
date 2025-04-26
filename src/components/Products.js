import { useState, useEffect } from 'react';
import api from '../services/api';

function Products() {
  const [products, setProducts] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [form, setForm] = useState({ nombre: '', categoria: '', precio: '' });

  const fetchProducts = async () => {
    const res = await api.get('/products');
    setProducts(res.data);
  };

  useEffect(() => { fetchProducts(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/products', form);
    setForm({ nombre: '', categoria: '', precio: '' });
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await api.delete(`/products/${id}`);
    fetchProducts();
  };

  const filteredProducts = products.filter(p => 
    p.nombre.toLowerCase().includes(searchName.toLowerCase()) &&
    p.categoria.toLowerCase().includes(searchCategory.toLowerCase())
  );

  return (
    <div>
      <h2>Productos</h2>
      <form onSubmit={handleSubmit}>
        <input value={form.nombre} onChange={e => setForm({...form, nombre: e.target.value})} placeholder="Nombre" />
        <input value={form.categoria} onChange={e => setForm({...form, categoria: e.target.value})} placeholder="Categoría" />
        <input value={form.precio} onChange={e => setForm({...form, precio: e.target.value})} placeholder="Precio" type="number" />
        <button type="submit">Crear</button>
      </form>

      <div style={{ marginTop: 20 }}>
        <input placeholder="Buscar por nombre" value={searchName} onChange={e => setSearchName(e.target.value)} />
        <input placeholder="Buscar por categoría" value={searchCategory} onChange={e => setSearchCategory(e.target.value)} />
      </div>

      <ul>
        {filteredProducts.map(p => (
          <li key={p.id_product}>
            {p.nombre} - {p.categoria} - ${p.precio}
            <button onClick={() => handleDelete(p.id_product)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
