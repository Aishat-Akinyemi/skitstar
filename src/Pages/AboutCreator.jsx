import { Box, Image, VStack, Avatar, HStack, Text, Flex, Spacer, 
  Tabs, TabList, TabPanels, Tab, TabPanel,Skeleton, SkeletonCircle, SkeletonText  } from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import CreatorInfo from '../components/CreatorInfo'
import { VideoListGrid } from '../components/VideoListGrid'
import Nfts from '../components/Nft'
import Events from '../components/Events'
import Ads from '../components/Ads'
import { useNavigate, useParams } from 'react-router-dom';
import { useAddress, useStorage, useContractRead, useBuyNow, useValidDirectListings, useContractWrite, useSDK  } from "@thirdweb-dev/react";
import { classifyListingType } from '../utils/utils';
import { ListingType, NATIVE_TOKEN_ADDRESS  } from "@thirdweb-dev/sdk";
import { utils } from "ethers";
import { getVideoAsset } from '../utils/VideoAssets';

export const AboutCreator = ({toaster, contract, marketPlaceContract}) => {

    //navigation
    const navigate = useNavigate();
    const address = useAddress();   
    const storage = useStorage();
    const sdk = useSDK();
    const {address: creatorAddress} = useParams();      
    const  [creatorInfo,  setCreatorInfo]  = useState();
    const [videoList, setVideoList] = useState([]);

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
          tokenContract: creatordata?.ERC1155TokenAddress
        }
      );

      const [tokenListings, setTokenListings] = useState();
      const { mutateAsync: buyNow, isLoading: isBuyNowLoading, error: isBuyNowError } = useBuyNow(marketPlaceContract);

      const getVideoAssetList = async () => {  
        console.log(creatorInfo)      
        if(videoAssets?.length > 0) {
          const videoInfo = await Promise.all(videoAssets.map((videourl) => storage.downloadJSON(videourl)));
          
          const getVideos = videoInfo.map((video) => getVideoAsset(video));
          const allVideos = await Promise.all(getVideos);
          const videoArr = allVideos
            .map((video) => {
                return {
                  ...video,
                  creatorAddress: creatorAddress,
                  creatorName: creatorInfo?.name,
                  creatorERC1155TokenAddress: creatorInfo?.ERC1155TokenAddress,
                  creatorAvatar: creatorInfo?.profileImage
                } 
            });
            console.log(videoArr)
          return videoArr;
        }
        return [];
      }

      useEffect(() => { 
        if(address == creatorAddress)  {
          navigate("/profile");
        }            
        let info  = {};  
        if(creatordata) {     
        info.subscribers= creatordata.subscriberCount.toNumber();
        info.about   = '';
        info.address = creatorAddress;
        info.postCount = 0;
        info.ERC1155TokenAddress = creatordata.ERC1155TokenAddress
        if(videoAssets) {
            info.postCount=videoAssets.length;
        }
        storage.downloadJSON(creatordata.creatorInfoUrl).then((res) => {            
            info.profileImage = res.imageUrl;
            info.name =   res.name;
            info.about =   res.about;   
            setCreatorInfo(info);                    
        });                                
    }
    }, [creatorAddress, creatordata])

    useEffect(() => { 
      try {
        getVideoAssetList().then(res => {
          setVideoList(res)
        })
      } catch (error) {
        console.log(error)
      }
  }, [videoAssets, creatorInfo])




    
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
                   <VideoListGrid  videoLists={videoList}/>
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
