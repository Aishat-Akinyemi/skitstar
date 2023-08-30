import React, {useEffect, useState} from 'react'
import { Box, Tag, Input, InputGroup, InputLeftElement, HStack, TagLabel, Icon, Heading, Spinner, Center  } from '@chakra-ui/react'
import { SearchNormal } from 'iconsax-react'
import { VideoListGrid } from '../components/VideoListGrid'
import { useStorage,   useConnectionStatus, useAddress, useContract, useContractRead, useSDK } from "@thirdweb-dev/react";
import { getVideoAsset } from '../utils/VideoAssets';
import { shuffle } from '../utils/utils';
import {skitstar_abi } from '../utils/abi'

export const Home = ({creatorList, toaster}) => {
  const [videoList, setVideoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  
const sdk = useSDK();
const storage = useStorage();

  useEffect(() => {
    try {
      setIsLoading(true);
      if(creatorList) {       
        (async () => {
          const videos = await Promise.all(creatorList.map(videoAssets));
          const flattenedVideos = videos.reduce((acc, curr)=>  acc.concat(curr), []);
          setVideoList(shuffle(flattenedVideos));
        })();
      }
    } catch (error) {
      console.log(error)
    } finally{
      setIsLoading(false);
    }   
  }, [])
 
 /**
  * 
  * @param {Address} creatorAddress 
  * @returns an Promise containing an Object with creator's name, creator's Avatar and an array of video 
  */
  const videoAssets = async (creatorAddress)=>{  
    const sscontract = await sdk.getContract(import.meta.env.VITE_SKITSTAR_ADD, skitstar_abi);
    const [creatorInfo, videodDta] = await Promise.all([
      sscontract.call("getStar",  [creatorAddress]),
      sscontract.call("getVideoAssets",  [creatorAddress])
    ]);  
    if(creatorInfo  && videodDta.length>0){
      const info =   await storage.downloadJSON(creatorInfo.creatorInfoUrl);
      const videoInfo = await Promise.all(videodDta.map((videourl) => storage.downloadJSON(videourl))); 
      const getVideos = videoInfo.map((video) => getVideoAsset(video));
      const allVideos = await Promise.all(getVideos);
      const videoArr = allVideos
        .map((video) => {
            return {
              ...video,
              creatorAddress: creatorAddress,
              creatorName: info.name,
              creatorERC1155TokenAddress: creatorInfo.ERC1155TokenAddress,
              creatorAvatar: info.imageUrl
            }
        });
      return videoArr;
    }
    return [];
  }
  
  return (
    <Box width="80vw">
      <HStack spacing={4}>
          <Tag size="lg" variant='outline'>
            <TagLabel>All</TagLabel>
          </Tag>
          <Tag size="lg" variant='outline'>
            <TagLabel>Musical</TagLabel>
          </Tag>
          <Tag size="lg" variant='outline'>
            <TagLabel>Satire</TagLabel>
          </Tag>
          <Tag size="lg" variant='outline'>
            <TagLabel>Parody</TagLabel>
          </Tag>
          <Tag size="lg" variant='outline'>
            <TagLabel>Comedy</TagLabel>
          </Tag>
          <Tag size="lg" variant='outline'>
            <TagLabel>Parody</TagLabel>
          </Tag>
          <Tag size="lg" variant='outline'>
            <TagLabel>Sketch</TagLabel>
          </Tag>
      </HStack>

      <Box className='search-bar' my="28px">
        <InputGroup color="">
          <InputLeftElement pointerEvents='none'>
            <Icon as={SearchNormal}/>
          </InputLeftElement>
          <Input type='search' placeholder='Search'  borderRadius="45px" boxShadow="4px 4px 2px rgba(0, 0, 0, 0.1);"/>
        </InputGroup>          
      </Box>
      <Heading my="24px">Trending Videos</Heading >
      {
        isLoading && videoList.length > 0
        ?
        <Center><Spinner size='xl' colorScheme='purple' speed='0.60s' thickness='5px'/></Center>          
        :
        <VideoListGrid videoLists={videoList}/> 
      }
       
    </Box>
  )
}
