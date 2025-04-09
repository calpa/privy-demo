import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PrivyProvider } from "@privy-io/react-auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "@privy-io/wagmi";
import { config } from "./wagmiConfig";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <PrivyProvider
    appId={import.meta.env.VITE_PRIVY_APP_ID}
    clientId={import.meta.env.VITE_PRIVY_CLIENT_ID}
    config={{
      // Display email and wallet as login methods
      loginMethods: ["email", "wallet"],
      appearance: {
        theme: "light",
        accentColor: "#676FFF",
        logo: "https://assets.calpa.me/h192/public/pfp.avif",
      },
      // Create embedded wallets for users who don't have a wallet
      embeddedWallets: {
        createOnLogin: "users-without-wallets",
      },
    }}
  >
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <App />
      </WagmiProvider>
    </QueryClientProvider>
  </PrivyProvider>
);
