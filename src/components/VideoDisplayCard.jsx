import { Box, Card, CardBody, CardFooter, HStack, Text, Image, VStack, Avatar } from '@chakra-ui/react'
import React from 'react'
import PressPlayBro from "../assets/PressPlayBro.svg"
import { VideoPlayer } from './VideoPlayer'
import { useNavigate } from 'react-router-dom'
export const VideoDisplayCard = ({video, isLoading}) => {
    let temp = {thumbnail :"https://www.techsmith.com/blog/wp-content/uploads/2019/06/YouTube-Thumbnail-Sizes.png", 
   }
   
    const navigate = useNavigate()
    const displayVideo=()=> { 
        navigate(`/play/${video.creatorAddress}/${video.playbackId}`, { state: video });
    }

    const goToCreatorPage=() => {
        console.log(video)
        navigate(`/creator/${video.creatorAddress}`, {state: {creatorAddress: video.creatorAddress, 
                                                      creatorERC1155TokenAddress: video.creatorERC1155TokenAddress
                                                    }});
    }

    if (video == null){
        return <></>
    } else if (isLoading){
        //TODO implement isLoading in parent elements/references
        return <>Loading...</>
    }
    return (
    <Box display="flex" 
         flexDirection="column" 
         alignItems="flex-start" 
         gap="16px"
         w="360px"
         h="340px"        
    >
        <Image 
                src={temp.thumbnail} 
                borderRadius="10px"
                w="360px"
                h="232px" 
                onClick={displayVideo}

        />
        <HStack gap="16px"
             onClick={goToCreatorPage}
        >
            <Avatar size="md" name={video.creatorName} src={video.creatorAvatar}></Avatar>
            <VStack gap="16px" alignItems="flex-start">
                <Text fontFamily="Open Sans" fontWeight="700" fontSize="16px" lineHeight="22px"
                    fontStyle="normal" h="24px" w="250px"
                >
                    {video.name}
                </Text>
                <Text fontFamily="Open Sans" fontWeight="600" fontSize="12px" lineHeight="16px"
                    fontStyle="normal" color="#828282" mt="8px" 
                >
                    {video.creatorName}
                </Text>
                <Text fontFamily="Open Sans" fontWeight="600" fontSize="12px" lineHeight="16px"
                    fontStyle="normal" color="#828282" textAlign="left"
                >
                    {video.viewCount} views | Posted {new Date(video.date).toDateString()}
                </Text>
            </VStack>
        </HStack>

        
    </Box>
  )
}
