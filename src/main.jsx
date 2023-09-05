import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import "./styles/globals.css";
import { bin   } from "@thirdweb-dev/chains";
import { LivepeerConfig } from '@livepeer/react';
import LivepeerClient from '../client';

import { BrowserRouter as Router } from "react-router-dom";


const colors = {
  brand : {
    900: '#8247E5',

  }
}

const chkraTheme = extendTheme({ colors });
const activeChain = {
  chain: "opBNB",
  name:" opBNB Testnet",
  rpc: ["https://opbnb-testnet-rpc.bnbchain.org/"],
  chainId: 5611,
  nativeCurrency  : {
    decimals: 18,
    name: "tBNB",
    symbol: "tBNB"
  },
  slug: "opBNB",
  testnet: true
}
const livepeerTheme = {
  colors: {
    accent: 'rgb(0, 145, 255)',
    containerBorderColor: 'rgba(0, 145, 255, 0.9)',
  },
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Router>
      <React.StrictMode>
      <LivepeerConfig client={LivepeerClient} theme={livepeerTheme} >
          <ThirdwebProvider activeChain={activeChain} 
            clientId={import.meta.env.VITE_THIRDWEB_CLIENT_ID}
            supportedWallets={[ metamaskWallet() ]}>        
            <ChakraProvider theme={chkraTheme}>
              <App />
            </ChakraProvider> 
          </ThirdwebProvider>
      </LivepeerConfig>
    </React.StrictMode>
  </Router>
  
);
