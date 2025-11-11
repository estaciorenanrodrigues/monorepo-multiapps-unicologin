import { AuthProvider } from '@web/context';
import { Routes } from '../routes';

export function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
