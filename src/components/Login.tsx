import { usePrivy } from "@privy-io/react-auth";

export default function Login() {
  const { login, user, logout } = usePrivy();

  return (
    <div>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}
