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
import { useConnectionStatus, useSigner } from "@thirdweb-dev/react";
import { Routes, Route } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
import { isACreator, getStar } from './utils/SkitStarContract';
export default function App() {
  const connectionStatus = useConnectionStatus();
  const signer = useSigner();
  const toast = useToast();
  const [currentAddress, setcurrentAddress] = useState();
  const [isCreator, setIsCreator] = useState(false);
  useEffect(() => {
    if (signer) {
      signer?.getAddress().then((res)=>{
     setcurrentAddress(res);
    }
      );
    isACreator(currentAddress).then((res)=>setIsCreator(res))
    getStar(currentAddress).then((res) => console.log(res))
  }
  }, [connectionStatus, currentAddress])

  

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
                      <Route path='/creator/join' element={<CreatorRegistration signer={signer} address={currentAddress} toaster={toaster} setIsCreator={setIsCreator}/>}/>
                      <Route path='/creator/upload' element={<VideoUploadForm signer={signer} toaster={toaster}/>}/>
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