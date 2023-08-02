import {
    Box,
    Card,
    CardBody,
    Heading,
    Stack,
    Text,
    Image,
    Flex,
  } from "@chakra-ui/react";
  import React from "react";
  import { ActionButton } from "./ActionButton";
  import { useAddress } from "@thirdweb-dev/react";  
  
  const Ad = ({ad, buy}) => {
    const address = useAddress();
    const purchaseToken = async () => {
      await buy(ad.id, ad.currencyValuePerToken.displayValue);
    }

    return (
      <Flex gap="32px">
        <Card w="360px">
          <CardBody>
            <Image
              src={ad.asset.image}
              borderRadius="lg"
              w="324px"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{ad.asset.name}</Heading>
              <Flex direction="row" justifyContent="space-between">
                <Text color="brand.900" fontSize="2xl">
                {ad.currencyValuePerToken.displayValue}  {ad.currencyValuePerToken.symbol}
                </Text>
                <Text fontSize="lg">Quantity {ad.quantity}</Text>
              </Flex>
            </Stack>
          </CardBody>
        </Card>
        <Flex direction="column" justifyContent="space-around" w="692px">
          <Box>
            <Heading fontSize="24px">Description</Heading>
            <Text>
               {ad.asset.description}
            </Text>
          </Box>
          {
              ad.creatorAddress == address 
              ?
              <ActionButton label="Increase Ads Voucher Supply" width="max-content"/>
              :
              <ActionButton onClick={purchaseToken} label="Purchase Ads Voucher" width="max-content"/>
          }
          
        </Flex>
      </Flex>
    );
  };

  const ad = [1,2,3, 4,5]
  const Ads = ({ads, buy}) => {
    return (
      <Flex direction="column" gap="24px">
        {
          ads?.map((ad, id) => (
            <Ad key={id} ad={ad} buy={buy}/>
          ))
        }
      </Flex>
    )
  }
  
  export default Ads;
  