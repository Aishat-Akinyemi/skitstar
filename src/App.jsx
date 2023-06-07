import * as React from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";
import { Nav } from './components/Nav';
import {Home} from './components/Home';
import { SideBar } from './components/SideBar';
import {Box, Flex, Center, HStack  } from '@chakra-ui/react';
import { LandingPage } from './components/LandingPage';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <Box px="28px">
      <Nav/>
      <LandingPage/>
      <Footer/>
    </Box>
   
  )
}