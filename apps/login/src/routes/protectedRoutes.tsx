import { Navigate } from 'react-router-dom';
import { useAuth } from '@web/context';

export function ProtectedAdminRoute({
  children,
}: {
  children: React.ReactElement;
}) {
  const { isAuthenticated, isAdmin, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/client" replace />;
  }

  return children;
}

export function ProtectedClientRoute({
  children,
}: {
  children: React.ReactElement;
}) {
  const { isAuthenticated, isClient, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (!isClient) {
    return <Navigate to="/admin" replace />;
  }

  return children;
}
