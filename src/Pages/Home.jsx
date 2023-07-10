import React, {useEffect, useState} from 'react'
import { Box, Tag, Input, InputGroup, InputLeftElement, HStack, TagLabel, Icon, Heading  } from '@chakra-ui/react'
import { SearchNormal } from 'iconsax-react'
import { VideoListGrid } from '../components/VideoListGrid'
import { useStorage,   useConnectionStatus, useAddress, useContract, useContractRead, useSDK } from "@thirdweb-dev/react";
import { getVideoAsset } from '../utils/VideoAssets';

export const Home = ({creatorList}) => {
  const [videoList, setVideoList] = useState([{}]);
  
const sdk = useSDK();
const storage = useStorage();

  useEffect(() => {
    if(creatorList){
      creatorList.forEach(creatorAddress => {
        videoAssets(creatorAddress).then((res)=>{
          console.log(res)
          let videos = videoList; 
          console.log(videos)         
          setVideoList(videos.push(res));
        })   ;
      });
      console.log(videoList);
      
    }
  }, [])
 
 
  const videoAssets = async (creatorAddress)=>{    
    const sscontract = await sdk.getContract(import.meta.env.VITE_SKITSTAR_ADD);
    const [creatorInfo, videodDta] = await Promise.all([
      sscontract.call("getStar",  [creatorAddress]),
      sscontract.call("getVideoAssets",  [creatorAddress])
    ]);  
    if(creatorInfo  && videodDta.length>0){
      const info =   storage.downloadJSON(creatorInfo.creatorInfoUrl);
      const getVideos = videodDta.map(getVideoAsset);
      const allVideos =  (Promise.all(getVideos));
      const videos = await Promise.all([info, allVideos]);
        return {
          name: videos[0].name,
          creatorAvatar : videos[0].imageUrl,
          videos : videos[1]
        }
    }
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
      {/* {
        for (let index = 0; index < 9; index++) {
          <VideoDisplayCard></VideoDisplayCard>
        }
      } */}
      <VideoListGrid/>
    </Box>
  )
}
