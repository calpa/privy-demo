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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Privy Demo</h1>

      {user && (
        <div className="space-y-4">
          {address && (
            <div className="flex justify-center mb-4">
              <QRCodeSVG value={address} size={128} />
            </div>
          )}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="font-semibold">Address:</span> {address}
              </div>
              <div>
                <span className="font-semibold">ID:</span> {user?.id}
              </div>
              <div>
                <span className="font-semibold">Created At:</span>{" "}
                {user?.createdAt?.toLocaleString()}
              </div>
              <div>
                <span className="font-semibold">Email:</span>{" "}
                {user?.email?.address || "-"}
              </div>
              <div>
                <span className="font-semibold">Wallet:</span>{" "}
                {user?.wallet?.address || "-"}
              </div>
              <div>
                <span className="font-semibold">Smart Wallet:</span>{" "}
                {user?.smartWallet?.address || "-"}
              </div>
              <div>
                <span className="font-semibold">Google:</span>{" "}
                {user?.google?.email || "-"}
              </div>
              <div>
                <span className="font-semibold">Twitter:</span>{" "}
                {user?.twitter?.username || "-"}
              </div>
              <div>
                <span className="font-semibold">Discord:</span>{" "}
                {user?.discord?.username || "-"}
              </div>
              <div>
                <span className="font-semibold">GitHub:</span>{" "}
                {user?.github?.username || "-"}
              </div>
              <div>
                <span className="font-semibold">Spotify:</span>{" "}
                {user?.spotify?.email || "-"}
              </div>
              <div>
                <span className="font-semibold">Instagram:</span>{" "}
                {user?.instagram?.username || "-"}
              </div>
              <div>
                <span className="font-semibold">Tiktok:</span>{" "}
                {user?.tiktok?.username || "-"}
              </div>
              <div>
                <span className="font-semibold">LinkedIn:</span>{" "}
                {user?.linkedin?.email || "-"}
              </div>
              <div>
                <span className="font-semibold">Apple:</span>{" "}
                {user?.apple?.email || "-"}
              </div>
              <div>
                <span className="font-semibold">Farcaster:</span>{" "}
                {user?.farcaster?.username || "-"}
              </div>
              <div>
                <span className="font-semibold">Telegram:</span>{" "}
                {user?.telegram?.username || "-"}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-6">
        <Login />
      </div>
    </div>
  );
}

export default App;
