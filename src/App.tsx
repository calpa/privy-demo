import "./App.css";
import { usePrivy } from "@privy-io/react-auth";
import Login from "./components/Login";
import { useAccount } from "wagmi";
import { QRCodeSVG } from "qrcode.react";

function App() {
  const { ready, user } = usePrivy();
  const { address } = useAccount();

  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Privy Demo</h1>

      {user && (
        <div>
          {address && <QRCodeSVG value={address} size={128} />}
          <div>Address: {address}</div>

          <div>ID: {user?.id}</div>
          <div>Created At: {user?.createdAt?.toLocaleString()}</div>
          <div>Email: {user?.email?.address || "-"}</div>
          <div>Wallet: {user?.wallet?.address || "-"}</div>
          <div>Smart Wallet: {user?.smartWallet?.address || "-"}</div>
          <div>Google: {user?.google?.email || "-"}</div>
          <div>Twitter: {user?.twitter?.username || "-"}</div>
          <div>Discord: {user?.discord?.username || "-"}</div>
          <div>GitHub: {user?.github?.username || "-"}</div>
          <div>Spotify: {user?.spotify?.email || "-"}</div>
          <div>Instagram: {user?.instagram?.username || "-"}</div>
          <div>Tiktok: {user?.tiktok?.username || "-"}</div>
          <div>LinkedIn: {user?.linkedin?.email || "-"}</div>
          <div>Apple: {user?.apple?.email || "-"}</div>
          <div>Farcaster: {user?.farcaster?.username || "-"}</div>
          <div>Telegram: {user?.telegram?.username || "-"}</div>
        </div>
      )}
      <Login />
    </div>
  );
}

export default App;
