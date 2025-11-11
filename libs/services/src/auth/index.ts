export type UserRole = 'admin' | 'client';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export async function login(credentials: LoginCredentials): Promise<User> {

  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (
    credentials.email === 'admin@example.com' &&
    credentials.password === 'admin123'
  ) {
    return {
      id: '1',
      email: credentials.email,
      role: 'admin',
      name: 'Administrador',
    };
  } else if (
    credentials.email === 'client@example.com' &&
    credentials.password === 'client123'
  ) {
    return {
      id: '2',
      email: credentials.email,
      role: 'client',
      name: 'Cliente',
    };
  }

  throw new Error('Credenciais inválidas');
}

export function logout(): void {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
}

export function getStoredUser(): User | null {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
}

export function storeUser(user: User): void {
  localStorage.setItem('user', JSON.stringify(user));
}
