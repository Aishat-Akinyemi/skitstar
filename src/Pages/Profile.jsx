import { Box, Image, VStack, Avatar, HStack, Text, Flex, Spacer, 
    Tabs, TabList, TabPanels, Tab, TabPanel,Skeleton, SkeletonCircle, SkeletonText  } from '@chakra-ui/react'
 import {useEffect,  useState} from 'react'
 import CreatorInfo from '../components/CreatorInfo'
 import { VideoListGrid } from '../components/VideoListGrid'
 import Nfts from '../components/Nft'
 import Events from '../components/Events'
 import Ads from '../components/Ads';
 import { useNavigate } from 'react-router-dom';

import { useAddress, useStorage, useContractRead } from "@thirdweb-dev/react";
 
 export const Profile = ({toaster, contract}) => {
     //navigation
    const navigate = useNavigate();
    const address = useAddress();
    const storage = useStorage();
    const  [creatorInfo,  setCreatorInfo]  = useState();
   
    const { data: creatordata, isLoading: isLoadingCreatordata, error: creatordataError } = useContractRead(contract, "getStar", [address]);
    const { data: videoAssets, isLoading: isLoadingVideoAssets, error: videoAssetsError} = useContractRead(contract, "getVideoAssets", [address]);
    

    useEffect(() => {                  
        let info     = {};      
        if(creatordata){          
        info.subscribers= creatordata.subscriberCount.toNumber();
        info.about   ='';
        info.address=address;
        info.postCount=0;
        if(videoAssets){
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

    if (creatordataError) {
        toaster("Error retrieving Profile Info", "error");
        navigate(`/`);
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
           <CreatorInfo data={creatorInfo} isViewerPersonalInfo={true}/>
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
                    <VideoListGrid  videoAssets={videoAssets}/>
                </TabPanel>
                <TabPanel>
                    <Events/>
                </TabPanel>
                <TabPanel>
                    <Nfts/>
                </TabPanel>
                <TabPanel>
                    <Ads/>
                </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    }  
    
     </Box>
   )
 }
 