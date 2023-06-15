import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import "./styles/globals.css";
import { EvmosTestnet,   } from "@thirdweb-dev/chains";

import { LivepeerConfig } from '@livepeer/react';
import LivepeerClient from '../client';


const colors = {
  brand : {
    900: '#8247E5',

  }
}

const chkraTheme = extendTheme({ colors });

const activeChain={
  chainId: 9000, // Chain ID of the network
  rpc: ['https://theta-testnet.rpc.thirdweb.com'],
  nativeCurrency: {
    decimals: 18,
    name: "tEVMOS",
    symbol: "tEVMOS",
  },
  shortName: "Evmos", // Display value shown in the wallet UI
  slug: "Evmos", // Display value shown in the wallet UI
  testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
  chain: "Evmos testnet", // Name of the network
  name: "Evmos Testnet", // Name of the network
}
const livepeerTheme = {
  colors: {
    accent: 'rgb(0, 145, 255)',
    containerBorderColor: 'rgba(0, 145, 255, 0.9)',
  },
  // fonts: {
  //   display: 'Inter',
  // },
};
 

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <LivepeerConfig client={LivepeerClient} theme={livepeerTheme} >
        <ThirdwebProvider activeChain={EvmosTestnet} supportedWallets={[ metamaskWallet() ]}>        
          <ChakraProvider theme={chkraTheme}>
            <App />
          </ChakraProvider> 
        </ThirdwebProvider>
    </LivepeerConfig>
  </React.StrictMode>
);
