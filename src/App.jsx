import * as React from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";
import { Nav } from './components/Nav';
import {Home} from './Pages/Home';
import { SideBar } from './components/SideBar';
import {Box, Flex, Center, HStack  } from '@chakra-ui/react';
import { LandingPage } from './Pages/LandingPage';
import { Footer } from './components/Footer';
import { CreatorRegistration } from './Pages/CreatorRegistration';
import { VideoUploadForm } from './Pages/VideoUploadForm';
import { EventForm } from './Pages/EventForm';
import { BuyAdsVoucherForm } from './Pages/BuyAdsVoucherForm';
import { AboutCreator } from './Pages/AboutCreator';
import { VideoPlayer } from './components/VideoPlayer';

export default function App() {
  return (
      <Box mx="24px">
        <Nav/>
        <Flex minHeight="90vh">
            <SideBar/>
            <Box mt="40px" mb="212px">
              <AboutCreator/>
            </Box>
        </Flex> 
        <Footer/>
    </Box>
   
  )
}