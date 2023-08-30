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
import React, { useEffect, useState } from "react";
import { ActionButton } from "./ActionButton";
import { useAddress } from "@thirdweb-dev/react";

const Nft = ({ nft, buy }) => {
  const address = useAddress();
  const purchaseToken = async () => {
    await buy(nft.id, nft.currencyValuePerToken.displayValue);
  };
  return (
    <Flex gap="32px" h="554px">
      {/* <Card w="360px" h="552px"> */}
      <Card w="360px">
        <CardBody>
          <Image src={nft.asset.image} borderRadius="lg" w="324px" h="408px" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{nft.asset.name}</Heading>
            <Flex direction="row" justifyContent="space-between">
              <Text color="brand.900" fontSize="2xl">
                {nft.currencyValuePerToken.displayValue}{" "}
                {nft.currencyValuePerToken.symbol}
              </Text>
              <Text fontSize="lg">Quantity {nft.quantity}</Text>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
      <Flex direction="column" justifyContent="space-between" w="692px">
        <Box mt="6">
          <Heading fontSize="24px">Description</Heading>
          <Text>{nft.asset.description}</Text>
        </Box>
        {nft.creatorAddress == address ? (
          <ActionButton label="Increase NFT Supply" width="max-content" />
        ) : (
          <ActionButton
            onClick={purchaseToken}
            label="Purchase NFT"
            width="max-content"
          />
        )}
      </Flex>
    </Flex>
  );
};

// const nft = [1, 2, 3, 4, 5];
const Nfts = ({ nfts, buy }) => {
  return (
    <Flex direction="column" gap="24px">
      {nfts?.map((nft, id) => (
        <Nft key={id} nft={nft} buy={buy} />
      ))}
    </Flex>
  );
};

export default Nfts;
