import { useState, useEffect } from 'react';
import { User, login as loginService, logout as logoutService, getStoredUser, storeUser } from '@web/services';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verifica se há usuário salvo no localStorage
    const storedUser = getStoredUser();
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const userData = await loginService({ email, password });
      setUser(userData);
      storeUser(userData);
      return userData;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    logoutService();
    setUser(null);
  };

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    isClient: user?.role === 'client'
  };
}

