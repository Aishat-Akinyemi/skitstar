import * as React from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";
import { Nav } from './components/Nav';
import {Home} from './components/Home';
import { SideBar } from './components/SideBar';
import {Box, Flex, Center  } from '@chakra-ui/react';

export default function App() {
  return (
    <Box>
      <Nav/>
      <Home/>
      <Flex m=''>
          <SideBar/>
          <Box flex='1' ml="48px">
        </Box>
      </Flex>

    </Box>
  )
}