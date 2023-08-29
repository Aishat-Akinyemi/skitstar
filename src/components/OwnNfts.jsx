import {
    Box,
    Card,
    CardBody,
    Heading,
    Text,
    Image,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Switch,
    CardFooter,
    Grid,
    GridItem
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import { ActionButton } from "./ActionButton";
  import { useAddress } from "@thirdweb-dev/react";
  import { useContract, useMintNFTSupply  } from "@thirdweb-dev/react";  
  import { erc1155_abi } from '../utils/abi';
  
  const OwnNft = ({ nft, cancel, create, toaster }) => {
    const [isLoading, setisLoading] = useState(false)
    const address = useAddress();
    const { contract } = useContract(nft.contractAddress, erc1155_abi);
    const {
      mutateAsync: mintNftSupply,
      isLoading: isMinting,
      error,
    } = useMintNFTSupply(contract);
    
    const increaseSupply = async () => {
      //TODO After contract update to add 
     try {
      // await mintNftSupply({additionalSupply: 10, 
      //   to: address,
      //   tokenId: nft.tokenId
      // });
      toaster("Additional Supply MINTED", "success");  
      //toast
     } catch (error) {
        console.log(error)
        toaster(`Error minting Additional Supply`, "error");  
     }

    }

    const toggleListing = async () => {
      try {
        setisLoading(true);
        if(nft.status = 4) {
          
          console.log("...")
          nft.status = 1;
        } else {
//TODO add modal
        //   await create({
        //     assetContractAddress: nft.contractAddress,
        //     tokenId : nft.tokenId,
        //     pricePerToken: stringToEthers(values.price),
        //     quantity: parseInt(values.amount)
        // });  
        // toaster("NFT Listed for sale", "success"); 
        nft.status = 4
        }
      } catch (error) {
        console.log(error)
        
      } finally {
        setisLoading(false);
      }

    }

    return (        
<Tr>
    <Td>
      <Box display="flex" flexDirection="column" h="368px" >
      <Card maxW="230px" variant="elevated" flexGrow="1">
        <CardBody>
          <Image src={nft.metadata.image}
              borderRadius="lg"
              w="100%" h="100%" 
              objectFit="contain"
            />
        </CardBody>
        <CardFooter>
          <Heading size="md">{nft.metadata.name}</Heading>
        </CardFooter>
      </Card>   
      </Box>           
  </Td>
  <Td>
      <Grid
        templateRows='repeat(3, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gap={4}
      >          
      <GridItem colSpan={2}>                
            <Text>{nft.metadata.description}</Text>             
      </GridItem>
      <GridItem colSpan={1}>
        <Heading fontSize="24px">Total Supply</Heading>
      </GridItem>
        <GridItem colSpan={1}>
          {nft.totalSupply}
        </GridItem>
      <GridItem colSpan={2}>
        <ActionButton label="Increase NFT Supply" width="max-content" isLoading={isMinting} onClick={increaseSupply}/> 
        </GridItem>
    </Grid>                  
    </Td>
    <Td><Switch size='lg' colorScheme="purple" isChecked={nft.status == 4} onChange={toggleListing}/></Td>    
    <Td isNumeric>{nft.quantity}</Td>
    <Td>{nft.pricePerToken ? 
        <Text>
            {nft.currencyValuePerToken.displayValue}{" "}
            {nft.currencyValuePerToken.symbol}
        </Text>
    
    : <>notonsale</> }</Td> 
    <Td>{new Date(nft.endTimeInSeconds *1000).toLocaleString(undefined, {dateStyle: 'long', timeStyle: 'short'})} </Td>
</Tr>
    );
  };
  
  // const nft = [1, 2, 3, 4, 5];
  const OwnNfts = ({ nfts, cancel, create, toaster }) => {
    return (
      <TableContainer>
        <Table variant='simple' colorScheme="purple">    
          <Thead>
            <Tr>
              <Th>NFT</Th>
              <Th>Description</Th>
              <Th>Sale Status</Th>              
              <Th isNumeric>Listed Qty</Th>
              <Th>Price</Th>
              <Th>Listing Ends On</Th>
            </Tr>
          </Thead>
          <Tbody>
           {nfts?.map((nft, id) => (
              <OwnNft key={id} nft={nft} cancel={cancel} create={create} toaster={toaster}  />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    );
  };
  
  export default OwnNfts;
  
  
  