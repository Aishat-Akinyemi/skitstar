import {
    Box,
    Card,
    CardBody,
    Heading,
    Stack,
    Text,
    Image,
    Flex,
    SimpleGrid,
  } from "@chakra-ui/react";
  import React from "react";
  import { ActionButton } from "./ActionButton";
  import { useAddress } from "@thirdweb-dev/react";
  
  const Event = ({event, buy}) => {
    const address = useAddress();
    const purchaseToken = async () => {
      await buy(event.id, event.currencyValuePerToken.displayValue);
    }
    return (
      <Flex gap="32px" height="554px">
        <Card w="360px">
                  <CardBody>
            <Image
              src={event.asset.image}
              borderRadius="lg"
              w="324px" h="408px"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{event.asset.name}</Heading>
              <Flex direction="row" justifyContent="space-between">
                <Text color="brand.900" fontSize="2xl">
                  {event.currencyValuePerToken.displayValue}  {event.currencyValuePerToken.symbol}
                </Text>                
                <Text fontSize="lg">Quantity {event.quantity}</Text>
              </Flex>
            </Stack>
          </CardBody>
        </Card>
        <Flex direction="column" justifyContent="space-around" w="692px">
          <Box>
            <Heading fontSize="24px">Description</Heading>
            <Text>
              {event.asset.description}
            </Text>
          </Box>
          <Box>
            <Heading fontSize="24px">Date</Heading>
            <Text>
             {new Date(event.asset.date).toLocaleString(undefined, {dateStyle: 'full', timeStyle: 'short'})}        


            </Text>
          </Box>
          <Box>
            <Heading >Location</Heading>
            <Text>
             {event.asset.location}
            </Text>
          </Box>
          {
              event.creatorAddress == address 
              ?
              <ActionButton label="Increase Ticket Supply" width="max-content"/>
              :
              <ActionButton onClick={purchaseToken} label="Purchase Event Ticket" width="max-content"/>
          }
          
        </Flex>
      </Flex>
    );
  };
  

  // const event = [1,2,3, 4,5]
  const Events = ({events, buy}) => {
    return (
      <Flex direction="column" gap="24px">
        {
          events?.map((event, id) => (
            <Event key={id} event={event} buy={buy}/>
          ))
        }
      </Flex>
    )
  }
  
   

  export default Events;
  