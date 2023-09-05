import {useEffect, useState, useRef} from 'react'
import { Player } from '@livepeer/react';
import { Image, Box, Flex, Text, Spacer } from '@chakra-ui/react';
import CreatorInfo from './CreatorInfo';
import { getVideoAsset } from '../utils/VideoAssets';
import { useLocation, useParams } from "react-router-dom";
import { useAddress, useContract, useNFTBalance, useSDK, useContractRead, useStorage, useContractWrite } from "@thirdweb-dev/react";
import { erc1155_abi } from '../utils/abi';
import { BigNumber } from 'ethers';
import ReactPlayer from 'react-player'
import { ActionButton } from './ActionButton';



export const VideoPlayer = ({contract, toaster}) => {
    const temp = { thumbnail: "https://www.techsmith.com/blog/wp-content/uploads/2019/06/YouTube-Thumbnail-Sizes.png"};
    const address = useAddress();
    const location = useLocation();
    const videoDetails = location.state;
    const sdk = useSDK(); 
    const storage = useStorage();
    const { creatorAddress} = useParams();  
    const [isInaccessible, setIsInaccessible] = useState(true);
    const [isLoading, setisLoading] = useState(false); 
    const  [creatorInfo,  setCreatorInfo]  = useState();
     
    const { data: creatordata, isLoading: isLoadingCreatordata, error: creatordataError } = useContractRead(contract, "getStar", [creatorAddress]); 
    const { data: videoAssets, isLoading: isLoadingVideoAssets, error: videoAssetsError} = useContractRead(contract, "getVideoAssets", [creatorAddress]);  
    const { mutateAsync: subscribe } = useContractWrite(contract, "subscribe");
    const { mutateAsync: unSubscribe } = useContractWrite(contract, "unSubscribe")
    const { data: isSubscribed } = useContractRead(contract, "subscriptions", [address, creatorAddress]);
   
    const subscribeToCreator = async () => {
        try {
          const data = await subscribe({ args: [creatorAddress] });
          toaster("Subscribed", "success")
        } catch (err) {
          console.error("contract call failure", err);
        }
    }
    const unSubscribeFromCreator = async () => {
        try {            
          const data = await unSubscribe({ args: [creatorAddress] });
          toaster("Unsubscribed", "success")
        } catch (err) {    
            toaster("Error Unsubscribing", "error")
        }
      }

    const getAndSetVideoDetails = async () => {
        if(videoDetails?.creatorAddress == address){            
            return setIsInaccessible(false)
         } 
         if(videoDetails?.visibility == "NFT Collectors"){            
             const erc1155contract = await sdk.getContract( videoDetails?.creatorERC1155TokenAddress, erc1155_abi);
             //TODO change token id to other nfts that is associated with the particular video
             const tokenId = 1;
             const balance = await erc1155contract.erc1155.balanceOf(address, tokenId);
             if (balance.gte(BigNumber.from("1"))) {
                return setIsInaccessible(false);
             } else {
                return setIsInaccessible(true);
             }
         } else if(videoDetails?.visibility == "General")  {
            return setIsInaccessible(false);
         }  
    }; 

    useEffect(() => {
      try {
        getAndSetVideoDetails().then(()=> {           
        })}
      catch (error) {
        console.log(error)
      }
      return () => {
        setIsInaccessible(true)
      }
    }, [videoDetails])

    useEffect(() => {
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
    }, [creatordata])     
    
    
  
  return (           
        <Box w="65vw">
            {
                isInaccessible 
                ?
                <>Not accessible</>
                :
                <Box>
                    <Box>
                                             
                        <RPlayer url={`https://lp-playback.com/hls/${videoDetails.playbackId}/index.m3u8`} subtitleTrack={videoDetails.subtitle} />
                      
                        </Box> 
                        <Box my="24px" display="flex" flexDirection="column" gap="24px">
                            {   videoDetails &&
                                <Flex gap="16px" alignItems="flex-start">
                                    <Text fontFamily="Open Sans" fontWeight="700" fontSize="16px" lineHeight="22px"
                                        fontStyle="normal" h="24px" w="250px" textTransform="capitalize"
                                    >
                                        {videoDetails.title}
                                    </Text>
                                    <Spacer/>
                                    <Text  fontFamily="Open Sans" fontWeight="700" fontSize="16px" lineHeight="22px"
                                        fontStyle="normal" h="24px" w="250px"
                                    >
                                        {videoDetails.viewCount} views | Posted {videoDetails.date}
                                    </Text>
                            </Flex>
                            }
                            {
                                creatorInfo &&
                                <CreatorInfo data={creatorInfo} isViewerPersonalInfo={address === videoDetails.creatorAddress} subscribe={subscribeToCreator} unsubscribe={unSubscribeFromCreator} isSubscribed={isSubscribed}/>
                            }
                        </Box>
                </Box>

            }
           
        </Box>

  )
}

const RPlayer = ({url, subtitleTrack}) => {
    const playerRef = useRef(null); 
    {
        // if (playerRef.current === null) {
        //     playerRef.current = new VideoPlayer();
        //   }
    } 
    // const [playing, setPlaying]=useState(false)
    // if (playerRef.current === null) {
    //     playerRef.current = new ReactPlayer();
    // }
    
    const [subtitle, setSubtitle] = useState(false)

    useEffect(() => {
        if(subtitleTrack){ 
            const tracks = playerRef?.current?.getInternalPlayer()?.textTracks;
            console.log(tracks)
            if(!subtitle){  
                if(tracks){ 
                tracks[0].mode ="disabled"}
            } else if(subtitle){
              if(tracks){
                tracks[0].mode='showing'
              }
            }
    }

    // return () => {
    //     playerRef.current = null;
    //     url = null;
    //     subtitleTrack = null;
    // }
    }, [subtitleTrack, subtitle])

    const toggleSubtitle = () => {
        setSubtitle(!subtitle); 
    }
  return (
        <Box>
            <ReactPlayer  
                ref={playerRef}
                playing
                controls
                pip
                width="100%"
                height="60vh"
                url={url}
                config={{
                    file : {
                        attributes:{
                            crossOrigin:'anonymous'
                        },
                        forceHLS: true,
                        tracks : [
                            { kind: 'subtitles', src: subtitleTrack, srcLang: "en", default: true }
                        ]
                    }
                }}    
            />
              <ActionButton label={subtitle ? "Hide Subtitle": "Subtitle"} onClick={toggleSubtitle} my="24px" />
        </Box>
     
 
  )
}
