import { useAuth } from '@web/context';
import { Link, Outlet } from 'react-router-dom';

export function AdminApp() {
  const { logout } = useAuth();
  return (
    <>
      <div>
        <h1>Welcome to Admin!</h1>
        <ul>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="customers">Customers</Link>
          </li>
          <li>
            <Link to="contracts">Contracts</Link>
          </li>
        </ul>
        <button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      </div>
        <Outlet />
    </>
  );
}
