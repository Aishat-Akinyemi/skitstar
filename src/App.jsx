import {useState, useEffect} from 'react'
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
import { Profile } from './Pages/Profile';
import { useConnectionStatus, useSigner, useContract } from "@thirdweb-dev/react";
import { Routes, Route } from "react-router-dom";
import { useToast } from '@chakra-ui/react';

export default function App() {
  const connectionStatus = useConnectionStatus();  
  const { contract: skitStarContract } = useContract(import.meta.env.VITE_SKITSTAR_ADD);
  const toast = useToast();
  const [currentAddress, setcurrentAddress] = useState();
  const [isCreator, setIsCreator] = useState(false);

  

  function toaster(message, status) {
    toast({
      description: message,
      status: status,
      duration: 9000,
      isClosable: true,
    })
  }
  
  return (
      <Box mx="24px">
        <Nav isCreator={isCreator}/>        
            {
              connectionStatus == "connected" ?
              <Flex minHeight="90vh">
                 <SideBar/>
                  <Box mt="40px" mb="212px">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path='/creator/join' element={<CreatorRegistration contract={skitStarContract} toaster={toaster} setIsCreator={setIsCreator}/>}/>
                      <Route path="/profile" element={<Profile contract={skitStarContract}/>} />
                      <Route path='/creator/upload' element={<VideoUploadForm  toaster={toaster}  contract={skitStarContract}/>}/>
                    </Routes>
                  </Box>
             </Flex>
              :
              <LandingPage/>
            }
        
        <Footer/>
    </Box>
   
  )
}