import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { Login } from '@web/components';
import { AdminApp } from '@web/admin';
import { ClientApp } from '@web/client';
import { ProtectedAdminRoute, ProtectedClientRoute } from './protectedRoutes';
import { useAuth } from '@web/context';

// Pages Admin
import { Customers, Products, Contracts } from '@web/admin';

// Pages Client

function LoginRoute() {
  const { isAuthenticated, isAdmin, isClient, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (isAuthenticated) {
    if (isAdmin) {
      return <Navigate to="/admin" replace />;
    }
    if (isClient) {
      return <Navigate to="/client" replace />;
    }
  }

  return <Login onLoginSuccess={() => {}} />;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginRoute />,
  },
  {
    path: '/admin',
    element: (
      <ProtectedAdminRoute>
        <AdminApp />
      </ProtectedAdminRoute>
    ),
    children: [
      {
        path: 'customers',
        element: <Customers />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'contracts',
        element: <Contracts />,
      },
    ],
  },
  {
    path: '/client',
    element: (
      <ProtectedClientRoute>
        <ClientApp />
      </ProtectedClientRoute>
    ),
    children: [
      //   {
      //     path: '/client/dashboard',
      //     element: <Dashboard />,
      //   },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
