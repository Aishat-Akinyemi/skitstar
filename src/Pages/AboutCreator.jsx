import { Box, Image, VStack, Avatar, HStack, Text, Flex, Spacer, 
  Tabs, TabList, TabPanels, Tab, TabPanel,Skeleton, SkeletonCircle, SkeletonText  } from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import CreatorInfo from '../components/CreatorInfo'
import { VideoListGrid } from '../components/VideoListGrid'
import Nfts from '../components/Nft'
import Events from '../components/Events'
import Ads from '../components/Ads'
import { useNavigate, useLocation } from 'react-router-dom';
import { useAddress, useStorage, useContractRead, useBuyNow, useValidDirectListings, useContractWrite, useSDK,  } from "@thirdweb-dev/react";
import { classifyListingType } from '../utils/utils';
import { ListingType, NATIVE_TOKEN_ADDRESS  } from "@thirdweb-dev/sdk";
import { utils } from "ethers";

export const AboutCreator = ({toaster, contract, marketPlaceContract}) => {

    //navigation
    const navigate = useNavigate();
    const address = useAddress();   
    const location = useLocation(); 
    const storage = useStorage();
    const sdk = useSDK();
    const creatorAddress = (location.state).creatorAddress;    
    const eRC1155TokenAddress = (location.state).creatorERC1155TokenAddress;    
    const  [creatorInfo,  setCreatorInfo]  = useState();

    const { data: creatordata, isLoading: isLoadingCreatordata, error: creatordataError } = useContractRead(contract, "getStar", [creatorAddress]);   
    const { data: videoAssets, isLoading: isLoadingVideoAssets, error: videoAssetsError} = useContractRead(contract, "getVideoAssets", [creatorAddress]);
    const {
        data: directListings,
        isLoading: isListingsLoading,
        error: isListingError,
      } = useValidDirectListings(
        marketPlaceContract,
        {
          seller: creatorAddress, 
          tokenContract: eRC1155TokenAddress 
        }
      );

      const [tokenListings, setTokenListings] = useState();
      const { mutateAsync: buyNow, isLoading: isBuyNowLoading, error: isBuyNowError } = useBuyNow(marketPlaceContract);


    useEffect(() => { 
      if(address == creatorAddress)  {
        navigate("/profile");
      }            
      let info     = {};  
      if(creatordata){        
      info.subscribers= creatordata.subscriberCount.toNumber();
      info.about   ='';
      info.address=creatorAddress;
      info.postCount=0;
      if(videoAssets){
        console.log(videoAssets)
          info.postCount=videoAssets.length;
      }
      setCreatorInfo(info);
      storage.downloadJSON(creatordata.creatorInfoUrl).then((res) => {            
          info.profileImage = res.imageUrl;
          info.name =   res.name;
          info.about =   res.about;                
          setCreatorInfo(info);                     
      });   
     
  }
  }, []);
  useEffect(() => {
    try {
        if(directListings){
            setTokenListings(classifyListingType(directListings));
        }
    } catch (error) {
        
    }
  }, [directListings])
 
  const { mutateAsync: buyFromListing, isLoading } = useContractWrite(marketPlaceContract, "buyFromListing")
  const buyToken = async (listingid, price) => {
    // console.log(listingid.toString());
    //  const data = await buyFromListing({args: [listingid.toString(), address, 1, _currency, 1]})
     try {
      toaster("Initiating Purchase", "info");
      const data = await buyFromListing({ args: [listingid, address, 1, NATIVE_TOKEN_ADDRESS, utils.parseEther(price)], overrides: {value: utils.parseEther(price)} });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
      if(err.message.includes("user rejected transaction")) {
        return  toaster("You cancelled the Transaction", "error");
      }
      toaster("Purchase Failed", "error");
    }  
  }
  // if (creatordataError) {
  //   toaster("Error retrieving Profile Info", "error");
  //   navigate(`/`);
  // }
  // return (
  //   <Box width="79vw" display="flex" flexDirection="column">
  //       <CreatorInfo/>
  //       <Tabs variant='enclosed' my="52px" w="75vw">
  //           <TabList>
  //             <Tab>About</Tab>
  //             <Tab>Videos</Tab>
  //             <Tab>Events</Tab>
  //             <Tab>NFTs</Tab>
  //             <Tab>Ads Voucher</Tab>
  //           </TabList>
  //           <TabPanels>
  //             <TabPanel>
  //               <Text>{temp.about}</Text>
  //             </TabPanel>
  //             <TabPanel>
  //               <VideoListGrid/>
  //             </TabPanel>
  //             <TabPanel>
  //              <Events/>
  //             </TabPanel>
  //             <TabPanel>
  //               <Nfts/>
  //             </TabPanel>
  //             <TabPanel>
  //               <Ads/>
  //             </TabPanel>
  //           </TabPanels>
  //       </Tabs>
   
  //   </Box>
  // )
  return (
    <Box width="79vw" display="flex" flexDirection="column">
      
   {
       isLoadingCreatordata  ?
       <>
           <SkeletonCircle size='24' />  
           <Skeleton h="45vh" my="52px"/>
       </>
       : 
       <>
          {
          creatorInfo &&
          <CreatorInfo data={creatorInfo} isViewerPersonalInfo={false}/>
          }
           <Tabs variant='enclosed' my="52px" w="75vw">
               <TabList>
               <Tab>About</Tab>
               <Tab>Videos</Tab>
               <Tab>Events</Tab>
               <Tab>NFTs</Tab>
               <Tab>Ads Voucher</Tab>
               </TabList>
               <TabPanels>
               <TabPanel>
                   {
                       creatorInfo  &&
                       <Skeleton isLoaded={creatorInfo.about.length>0}>
                           <Text>{creatorInfo.about}</Text>
                       </Skeleton>
                   }
               </TabPanel>
               <TabPanel>
                   {/* <VideoListGrid  videoAssets={videoAssets}/> */}
               </TabPanel>
               <TabPanel>
                    <Events events={tokenListings?.events} buy={buyToken}/>
                </TabPanel>
                <TabPanel>
                    <Nfts nfts={tokenListings?.nfts} buy={buyToken}/>
                </TabPanel>
                <TabPanel>
                    <Ads ads={tokenListings?.ads} buy={buyToken}/>
                </TabPanel>
               </TabPanels>
           </Tabs>
       </>
   }  
   
    </Box>
  )
}
