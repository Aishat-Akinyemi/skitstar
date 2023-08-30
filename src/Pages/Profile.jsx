import { Box, Image, VStack, Avatar, HStack, Text, Flex, Spacer, 
    Tabs, TabList, TabPanels, Tab, TabPanel,Skeleton, SkeletonCircle, SkeletonText  } from '@chakra-ui/react'
 import {useEffect,  useState} from 'react'
 import CreatorInfo from '../components/CreatorInfo'
 import { VideoListGrid } from '../components/VideoListGrid'
import OwnEvents from '../components/OwnEvents'
import OwnNfts from '../components/OwnNfts'
import OwnAdsVoucher from '../components/OwnAdsVoucher'
 import { useNavigate, useLocation } from 'react-router-dom';
 import { classifyArrayType, classifyListingType } from '../utils/utils';
import { useAddress, useStorage, useContractRead, useContractWrite, 
        useSDK, useValidDirectListings, useContract, useNFTs, useCancelDirectListing, useCreateDirectListing } from "@thirdweb-dev/react"; 
import { erc1155_abi } from '../utils/abi';
import { getVideoAsset } from '../utils/VideoAssets';


 export const Profile = ({toaster, contract, creatordata, marketPlaceContract}) => {
    //navigation
    const navigate = useNavigate();
    const address = useAddress();
    const storage = useStorage();
    const  [creatorInfo,  setCreatorInfo]  = useState();
    const [isLoading, setisLoading] = useState(true);
    const [videoList, setVideoList] = useState([]);
    const { data: videoAssets, isLoading: isLoadingVideoAssets, error: videoAssetsError} = useContractRead(contract, "getVideoAssets", [address]);
    const { contract: tokenContract} = useContract(creatordata?.ERC1155TokenAddress, erc1155_abi);
    const { data: tokens, isLoading: isTokensLoading, error: isTokensLoadingError } = useNFTs(tokenContract);
    const [tokenObjects, setTokenObjects] = useState({});
    const {
        data: directListings,
        isLoading: isListingsLoading,
        error: isListingError,
      } = useValidDirectListings(
        marketPlaceContract,
        {
          seller: address, 
          tokenContract: creatordata?.ERC1155TokenAddress 
        }
      );
     
    const {
    mutateAsync: createDirectListing,
    isLoading: isCreatingListing,
    error: isDirectListingError,
    } = useCreateDirectListing(marketPlaceContract);

    const {
        mutateAsync: cancelDirectListing,
        isLoading : isCancellingListing,
        error: isCancelListingError,
      } = useCancelDirectListing(marketPlaceContract);

    useEffect(() => { 
        setisLoading(true); 
        try {
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
            
        } catch (error) {
            
        } finally{
            setisLoading(false);
        } 
    }, []);

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
        if(tokens && directListings) {
            const listingMap = {};
            
            // Create a mapping of metadata.id to the corresponding objects in tokens
            for (const listing of directListings) {
              listingMap[listing?.asset?.id] = listing;
            }

            const tokensWithListingData = [];
            
            for (const token of tokens) {
              const matchingListing = listingMap[token?.metadata?.id];

              const tokenInfo = {
              owner: token.owner,
              metadata: token.metadata,
              totalSupply: token.supply,
              currencyContractAddress: matchingListing.currencyContractAddress ?? null,
              currencyValuePerToken: matchingListing.currencyValuePerToken ?? null,
              pricePerToken: matchingListing.pricePerToken ?? null,
              listingId: matchingListing.id ?? null,
              tokenId: matchingListing.tokenId ?? null,
              quantity: matchingListing.quantity ?? null,
              startTimeInSeconds: matchingListing.startTimeInSeconds ?? null,
              endTimeInSeconds: matchingListing.endTimeInSeconds ?? null,
              status: matchingListing.status ?? null,
              contractAddress: creatordata?.ERC1155TokenAddress
              };
              tokensWithListingData.push(tokenInfo);
              setTokenObjects(classifyArrayType(tokensWithListingData));
              console.log(tokenObjects)
          }       
      }         
      } catch (error) {
        console.error(error)
      }
          
    }, [tokens, directListings])

    const getVideoAssetList = async () => {  
      if(videoAssets?.length > 0) {
        const videoInfo = await Promise.all(videoAssets.map((videourl) => storage.downloadJSON(videourl)));          
        const getVideos = videoInfo.map((video) => getVideoAsset(video));
        const allVideos = await Promise.all(getVideos);
        const videoArr = allVideos
          .map((video) => {
              return {
                ...video,
                creatorAddress: address,
                creatorName: creatorInfo?.name,
                creatorERC1155TokenAddress: creatordata?.ERC1155TokenAddress,
                creatorAvatar: creatorInfo?.profileImage
              } 
          });
          console.log(videoArr)
        return videoArr;
      }
      return [];
    }


    // if (creatordataError) {
    //     toaster("Error retrieving Profile Info", "error");
    //     navigate(`/`);
    // }
   return (
     <Box width="79vw" display="flex" flexDirection="column">
       
    {
        isLoading ?
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
                    <VideoListGrid  videoLists={videoList} isLoading={isLoadingVideoAssets}/>
                </TabPanel>
                <TabPanel>
                <OwnEvents events={tokenObjects?.events} cancel={cancelDirectListing} create={createDirectListing} toaster={toaster}/>
                </TabPanel>
                <TabPanel>
                    <OwnNfts nfts={tokenObjects?.nfts} cancel={cancelDirectListing} create={createDirectListing} toaster={toaster}/>
                </TabPanel>
                <TabPanel>
                <   OwnAdsVoucher ads={tokenObjects?.ads} cancel={cancelDirectListing} create={createDirectListing} toaster={toaster}/>    
                </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    }  
    
     </Box>
   )
 }
 
