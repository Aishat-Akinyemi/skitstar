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
import { useContract, useMintNFTSupply   } from "@thirdweb-dev/react";  
import { erc1155_abi } from '../utils/abi';

const OwnNft = ({ event, cancel, create, toaster }) => {
  const [isLoading, setisLoading] = useState(false)
  const address = useAddress();
  const { contract } = useContract(event.contractAddress, erc1155_abi);
  // const {
  //   mutateAsync: mintNftSupply,
  //   isLoading: isMinting,
  //   error,
  // } = useMintEventSupply(contract);
  
  const increaseSupply = async () => {
    //TODO After contract update to add 
   try {
    // await mintNftSupply({additionalSupply: 10, 
    //   to: address,
    //   tokenId: event.tokenId
    // });
    // toaster("Additional Supply MINTED", "success");  
    //toast
   } catch (error) {
      console.log(error)
      toaster(`Error minting Additional Supply`, "error");  
   }

  }

  const toggleListing = async () => {
    try {
      setisLoading(true);
      if(event.status = 4) {
        
        console.log("...")
        event.status = 1;
      } else {
//TODO add modal
      //   await create({
      //     assetContractAddress: event.contractAddress,
      //     tokenId : event.tokenId,
      //     pricePerToken: stringToEthers(values.price),
      //     quantity: parseInt(values.amount)
      // });  
      // toaster("Event Listed for sale", "success"); 
      event.status = 4
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
        <Image src={event.metadata.image}
            borderRadius="lg"
            w="100%" h="100%" 
            objectFit="contain"
          />
      </CardBody>
      <CardFooter>
        <Heading size="md">{event.metadata.name}</Heading>
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
          <Text>{event.metadata.description}</Text>             
    </GridItem>
    <GridItem colSpan={1}>
      <Heading fontSize="24px">Total Supply</Heading>
    </GridItem>
      <GridItem colSpan={1}>
        {event.totalSupply}
      </GridItem>
    <GridItem colSpan={2}>
      <ActionButton label="Increase Event Supply" width="max-content" 
        // isLoading={isMinting} onClick={increaseSupply}
        /> 
      </GridItem>
  </Grid>                  
  </Td>
  <Td><Switch size='lg' colorScheme="purple" isChecked={event.status == 4} onChange={toggleListing}/></Td>    
  <Td isNumeric>{event.quantity}</Td>
  <Td>{event.pricePerToken ? 
      <Text>
          {event.currencyValuePerToken.displayValue}{" "}
          {event.currencyValuePerToken.symbol}
      </Text>
  
  : <>notonsale</> }</Td> 
  <Td>{new Date(event.endTimeInSeconds *1000).toLocaleString(undefined, {dateStyle: 'long', timeStyle: 'short'})} </Td>
</Tr>
  );
};

// const event = [1, 2, 3, 4, 5];
const OwnNfts = ({ events, cancel, create, toaster }) => {
  return (
    <TableContainer>
      <Table variant='simple' colorScheme="purple">    
        <Thead>
          <Tr>
            <Th>Event</Th>
            <Th>Description</Th>
            <Th>Sale Status</Th>              
            <Th isNumeric>Listed Qty</Th>
            <Th>Price</Th>
            <Th>Listing Ends On</Th>
          </Tr>
        </Thead>
        <Tbody>
         {events?.map((event, id) => (
            <OwnNft key={id} event={event} cancel={cancel} create={create} toaster={toaster}  />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default OwnNfts;


