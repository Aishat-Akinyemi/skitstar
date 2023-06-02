import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import "./styles/globals.css";
const colors = {
  brand : {
    900: '#8247E5',

  }
}

const theme = extendTheme({ colors });

const activeChain={
  chainId: 365, // Chain ID of the network
  rpc: ['https://theta-testnet.rpc.thirdweb.com/'],
  nativeCurrency: {
    decimals: 18,
    name: "TFuel",
    symbol: "TFuel",
  },
  shortName: "Theta", // Display value shown in the wallet UI
  slug: "Theta", // Display value shown in the wallet UI
  testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
  chain: "Theta", // Name of the network
  name: "Theta Testnet mainchain", // Name of the network
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={activeChain}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);
