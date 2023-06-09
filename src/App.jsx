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
import { AdsVoucherForm } from './Pages/AdsVoucherForm';
import { MintNftForm } from './Pages/MintNftForm';
import { Profile } from './Pages/Profile';
import { BuyAdsVoucherForm } from './Pages/BuyAdsVoucherForm';
import { AboutCreator } from './Pages/AboutCreator';
import { VideoPlayer } from './components/VideoPlayer';

import { useConnectionStatus, useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { Routes, Route } from "react-router-dom";
import { useToast } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
import { isZeroAddress } from './utils/utils';

export default function App() {
  const connectionStatus = useConnectionStatus(); 
  // const navigate = useNavigate();
  const address = useAddress();
  // const storage = useStorage(); 
  const { contract: skitStarContract } = useContract(import.meta.env.VITE_SKITSTAR_ADD);
  const { data: creatordata, isLoading: isLoadingCreatordata, error: creatordataError } = useContractRead(skitStarContract, "getStar", [address]);
  const { contract: marketPlaceContract} = useContract(import.meta.env.VITE_MKTPLACE_ADD);
  const { data: allCreators } = useContractRead(skitStarContract, "getAllCreators");

  const toast = useToast();
  const [isCreator, setIsCreator] = useState(false);
  const tempCreator  =     ["0xeB555a1D554F14c1d052460065f020952614FE72", "0xeB555a1D554F14c1d052460065f020952614FE72"]
  // useEffect(() => {
  //   console.log(allCreators)
  // }, [allCreators])
  

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
        <Nav isCreator={creatordata && !isZeroAddress(creatordata.ERC1155TokenAddress) }/>        
            {
              connectionStatus == "connected" ?
              <Flex minHeight="90vh">
                 <SideBar/>
                  <Box mt="40px" mb="212px">
                    <Routes>
                      <Route path="/" element={<Home creatorList={tempCreator}/>} />
                      <Route path='/creator/join' element={<CreatorRegistration contract={skitStarContract} toaster={toaster} setIsCreator={setIsCreator}/>}/>
                      <Route path='/creator' element={<AboutCreator contract={skitStarContract} />}/>
                      <Route path="/profile" element={<Profile contract={skitStarContract}/>} />
                      <Route path='/creator/upload' element={<VideoUploadForm  toaster={toaster}  contract={skitStarContract}/>}/>
                      <Route path='/creator/mint-nft' element={<MintNftForm  toaster={toaster} erc1155ContractAdd={creatordata ? creatordata.ERC1155TokenAddress :null} marketPlaceContract={marketPlaceContract}/>}/>
                      <Route path='/creator/mint-event-tickets' element={<EventForm  toaster={toaster} erc1155ContractAdd={creatordata ? creatordata.ERC1155TokenAddress :null} marketPlaceContract={marketPlaceContract}/>}/>
                      <Route path='/creator/mint-ads-voucher' element={<AdsVoucherForm toaster={toaster} erc1155ContractAdd={creatordata ? creatordata.ERC1155TokenAddress :null} marketPlaceContract={marketPlaceContract}/>}/>
                        
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