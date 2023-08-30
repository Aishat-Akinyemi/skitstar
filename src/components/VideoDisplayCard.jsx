import { Box, Icon, Flex, CardFooter, Center, HStack, Text, Image, VStack, Avatar } from '@chakra-ui/react'
import {useState, useEffect} from 'react'
import PressPlayBro from "../assets/PressPlayBro.svg"
import { VideoPlayer } from './VideoPlayer'
import { useNavigate } from 'react-router-dom'
import { useAddress, useContract, useNFTBalance, useSDK } from "@thirdweb-dev/react";
import { erc1155_abi } from '../utils/abi';
import { BigNumber } from 'ethers';
import { ActionButton } from './ActionButton';
import { Lock, WalletMoney } from 'iconsax-react';

export const VideoDisplayCard = ({video, isLoading}) => {
    let temp = {thumbnail :"https://www.techsmith.com/blog/wp-content/uploads/2019/06/YouTube-Thumbnail-Sizes.png", 
   }
    const sdk = useSDK(); 
    const [isInaccessible, setIsInaccessible] = useState(true);    
    const navigate = useNavigate();
    const address = useAddress();
    const displayVideo=()=> { 
        if(!isInaccessible){
            navigate(`/play/${video.creatorAddress}/${video.playbackId}`, { state: video });
        }  else {

        }      
    }

    const goToCreatorPage=() => {
        navigate(`/creator/${video.creatorAddress}`, {state: {creatorAddress: video.creatorAddress, 
                                                      creatorERC1155TokenAddress: video.creatorERC1155TokenAddress
                                                    }});
    }
    const getAndSetVideoDetails = async () => {
        if(video?.creatorAddress == address){            
           return setIsInaccessible(false)
        } 
        if(video?.visibility == "NFT Collectors"){            
            const erc1155contract = await sdk.getContract( video?.creatorERC1155TokenAddress, erc1155_abi);
            //TODO change token id to other nfts that is associated with the particular video
            const tokenId = 1;
            const balance = await erc1155contract.erc1155.balanceOf(address, tokenId);
            if (balance.gte(BigNumber.from("1"))) {
               return  setIsInaccessible(false);
            } else {
                return setIsInaccessible(true);
            }
        } else if(video?.visibility == "General")  {
           return setIsInaccessible(false);
        }  
              
    };   

    useEffect(() => {
      try {
        if(video.creatorERC1155TokenAddress){            
            getAndSetVideoDetails().then()
        }
      } catch (error) {
        
      }
      return () => {
        setIsInaccessible(true)
      }
    }, [video])

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
         pos="relative"        
    >
       { 
            isInaccessible? 
            <Flex w="360px" h="232px"  borderRadius="10px"
                direction="column" alignItems="center" gap="16px" justifyContent="center"
                backgroundImage={video.thumbnailUrl}
                 backgroundSize="cover" backgroundRepeat="no-repeat"
                background="linear-gradient(rgb(72,0,72,0.8), rgb(192,72,72,0.8))"               

            >
                <Lock size="32" color="#FF8A65" variant="Bold"/>
                <Text>Buy NFT to Unlock</Text>
                <ActionButton label="Buy NFT"/>
            </Flex>
            :       
            <Image 
                        src={video.thumbnailUrl} 
                        borderRadius="10px"
                        w="360px"
                        h="232px" 
                        onClick={displayVideo}

            />
            
        }
       {
        video?.promotion && 
        <Text pos="absolute" top="230px" fontSize="12px">
        This Video Contains Paid Promotion   <Icon as={WalletMoney} size="16" color="#8247E5" />      
        </Text>
       }

        <HStack gap="16px"
             onClick={goToCreatorPage}
        >
            <Avatar size="md" name={video.creatorName} src={video.creatorAvatar}></Avatar>
            <VStack gap="16px" alignItems="flex-start">
                <Text fontFamily="Open Sans" fontWeight="700" fontSize="16px" lineHeight="22px"
                    fontStyle="normal" h="24px" w="250px"
                >
                    {video.title}
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
