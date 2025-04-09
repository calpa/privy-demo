# Privy Authentication Demo

A React + TypeScript demo showcasing web3 authentication using Privy. This application demonstrates how to implement secure, multi-method authentication including email and wallet-based login options.

## Features

- Multi-method authentication (email and wallet)
- Embedded wallet creation for users without existing wallets
- QR code display for wallet addresses
- User profile information display
- Modern UI with Tailwind CSS
- Full TypeScript support

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Privy Authentication (@privy-io/react-auth)
- Wagmi (@privy-io/wagmi)
- TanStack Query

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your Privy credentials:
   ```env
   VITE_PRIVY_APP_ID=your_app_id
   VITE_PRIVY_CLIENT_ID=your_client_id
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Setup

Make sure you have the following environment variables set in your `.env` file:

- `VITE_PRIVY_APP_ID`: Your Privy application ID
- `VITE_PRIVY_CLIENT_ID`: Your Privy client ID

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build

## Project Structure

- `src/components/Login.tsx`: Main login component
- `src/App.tsx`: Main application component
- `src/wagmiConfig.ts`: Wagmi configuration
- `src/main.tsx`: Application entry point with Privy provider setup

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
