import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: 10 }}>
      <Link to="/users" style={{ margin: 10 }}>Usuarios</Link>
      <Link to="/products" style={{ margin: 10 }}>Productos</Link>
    </nav>
  );
}

export default Navbar;
