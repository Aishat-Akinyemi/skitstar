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

const OwnAd = ({ ad, cancel, create, toaster }) => {
  const [isLoading, setisLoading] = useState(false)
  const address = useAddress();
  const { contract } = useContract(ad.contractAddress, erc1155_abi);
  const {
    mutateAsync: mintAdSupply,
    isLoading: isMinting,
    error,
  } = useMintNFTSupply(contract);
  
  const increaseSupply = async () => {
    //TODO After contract update to add 
   try {
    // await mintAdSupply({additionalSupply: 10, 
    //   to: address,
    //   tokenId: ad.tokenId
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
      if(ad.status = 4) {
        
        console.log("...")
        ad.status = 1;
      } else {
//TODO add modal
      //   await create({
      //     assetContractAddress: ad.contractAddress,
      //     tokenId : ad.tokenId,
      //     pricePerToken: stringToEthers(values.price),
      //     quantity: parseInt(values.amount)
      // });  
      // toaster("NFT Listed for sale", "success"); 
      ad.status = 4
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
    <Heading size="md">{ad.metadata.name}</Heading>        
</Td>
<Td>
    <Grid
      templateRows='repeat(3, 1fr)'
      templateColumns='repeat(2, 1fr)'
      gap={4}
    >          
    <GridItem colSpan={2}>                
          <Text>{ad.metadata.description}</Text>             
    </GridItem>
    <GridItem colSpan={1}>
      <Heading fontSize="24px">Total Supply</Heading>
    </GridItem>
      <GridItem colSpan={1}>
        {ad.totalSupply}
      </GridItem>
    <GridItem colSpan={2}>
      <ActionButton label="Increase NFT Supply" width="max-content" isLoading={isMinting} onClick={increaseSupply}/> 
      </GridItem>
  </Grid>                  
  </Td>
  <Td><Switch size='lg' colorScheme="purple" isChecked={ad.status == 4} onChange={toggleListing}/></Td>    
  <Td isNumeric>{ad.quantity}</Td>
  <Td>{ad.pricePerToken ? 
      <Text>
          {ad.currencyValuePerToken.displayValue}{" "}
          {ad.currencyValuePerToken.symbol}
      </Text>
  
  : <>notonsale</> }</Td> 
  <Td>{new Date(ad.endTimeInSeconds *1000).toLocaleString(undefined, {dateStyle: 'long', timeStyle: 'short'})} </Td>
</Tr>
  );
};

// const ad = [1, 2, 3, 4, 5];
const OwnAds = ({ ads, cancel, create, toaster }) => {
  return (
    <TableContainer>
      <Table variant='simple' colorScheme="purple">    
        <Thead>
          <Tr>
            <Th>Ad Voucher</Th>
            <Th>Description</Th>
            <Th>Sale Status</Th>              
            <Th isNumeric>Listed Qty</Th>
            <Th>Price</Th>
            <Th>Listing Ends On</Th>
          </Tr>
        </Thead>
        <Tbody>
         {ads?.map((ad, id) => (
            <OwnAd key={id} ad={ad} cancel={cancel} create={create} toaster={toaster}  />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default OwnAds;


