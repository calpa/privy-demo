import { usePrivy } from "@privy-io/react-auth";

export default function Login() {
  const { login, user, logout } = usePrivy();

  return (
    <div className="flex justify-center">
      {user ? (
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() =>
            login({
              loginMethods: ["google", "github", "email", "wallet", "sms"],
            })
          }
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Login
        </button>
      )}
    </div>
  );
}
