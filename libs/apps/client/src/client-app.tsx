import { useAuth } from '@web/context';

export function ClientApp() {
  const { logout } = useAuth();
  return (
    <div>
      <h1>Welcome to Client!</h1>

      <button onClick={()=>{logout()}}>Logout</button>
    </div>
  );
}

export default ClientApp;
