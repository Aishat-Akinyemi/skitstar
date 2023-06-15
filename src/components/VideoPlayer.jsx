import {useEffect, useState} from 'react'
import { Player } from '@livepeer/react';
import { Image, Box, Flex, Text, Heading, Spacer } from '@chakra-ui/react';
import CreatorInfo from './CreatorInfo';
import { getVideoAsset } from '../utils/VideoAssets';

export const VideoPlayer = ({thumbnail, }) => {
   
    
    const temp = { thumbnail: "https://www.techsmith.com/blog/wp-content/uploads/2019/06/YouTube-Thumbnail-Sizes.png", 
                    playbackId: "92e5vr096h2sbv5l"}
    const getAndSetVideoDetails = async () => {
        setvideoDetails(await getVideoAsset(temp.playbackId));
    }    
    const [videoDetails, setvideoDetails] = useState(null);
useEffect(() => {
      getAndSetVideoDetails();
    }, [])
      
  
  return (    
        <Box w="65vw">
            <Player
                title={videoDetails.name}
                playbackId={temp.playbackId}
                showTitle={true}
                showPipButton
                poster={<Image src={temp.thumbnail}/>}               
                controls={{
                    autohide: 3000,
                }}
                theme={{
                    borderStyles: { containerBorderStyle: 'hidden' },
                    radii: { containerBorderRadius: '10px' },
                }}
            />
            <Box my="24px" display="flex" flexDirection="column" gap="24px">
                {   videoDetails &&
                    <Flex gap="16px" alignItems="flex-start">
                        <Text fontFamily="Open Sans" fontWeight="700" fontSize="16px" lineHeight="22px"
                            fontStyle="normal" h="24px" w="250px"
                        >
                            {videoDetails.name}
                        </Text>
                        <Spacer/>
                        <Text  fontFamily="Open Sans" fontWeight="700" fontSize="16px" lineHeight="22px"
                            fontStyle="normal" h="24px" w="250px"
                        >
                            {videoDetails.viewCount} views | Posted {videoDetails.date}
                        </Text>
                </Flex>
                }
                <CreatorInfo/>
            </Box>
        </Box>

  )
}
