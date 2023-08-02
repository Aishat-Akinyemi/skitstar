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

let dd = {
  nfts: [
    {
      assetContractAddress: "0x0e7D81b26F618Bd762A4C0DeCf86fa472f4f30D6",
      currencyContractAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      pricePerToken: "1000000000000000000",
      currencyValuePerToken: {
        name: "Fantom",
        symbol: "FTM",
        decimals: 18,
        value: {
          type: "BigNumber",
          hex: "0x0de0b6b3a7640000",
        },
        displayValue: "1.0",
      },
      id: "7",
      tokenId: "0",
      quantity: "10",
      startTimeInSeconds: 1689842779,
      asset: {
        name: "First nft",
        description:
          "This is my first NFT, with it you have access to all my posts.",
        id: "0",
        uri: "ipfs://QmemmA22gUauqjyzVG1tmkhZKBVW3iC8VUM3RbEHwreUgQ",
        type: "nft",
      },
      endTimeInSeconds: 2005202562,
      creatorAddress: "0x60FfeF37dd73BE7bF952826879B0DEb45B82f119",
      isReservedListing: false,
      status: 4,
    },
  ],
  events: [
    {
      assetContractAddress: "0x0e7D81b26F618Bd762A4C0DeCf86fa472f4f30D6",
      currencyContractAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      pricePerToken: "1000000000000000000",
      currencyValuePerToken: {
        name: "Fantom",
        symbol: "FTM",
        decimals: 18,
        value: {
          type: "BigNumber",
          hex: "0x0de0b6b3a7640000",
        },
        displayValue: "1.0",
      },
      id: "8",
      tokenId: "1",
      quantity: "11",
      startTimeInSeconds: 1689843144,
      asset: {
        name: "First Event",
        description:
          "This is an online event for my fans and for those who are looking for a funtime.",
        image:
          "https://ipfs-2.thirdwebcdn.com/ipfs/QmQwfCqidt9FRNDdLpNm2nJLmiYgYXCRjDzFRHBVjAjt3e",
        id: "1",
        uri: "ipfs://QmYo3CccrJTqLn6HteHSjmpK8r9dWutBozeZsS1s7EQirS",
        location: "Online",
        date: "2023-07-27T09:50",
        type: "event",
      },
      endTimeInSeconds: 2005203032,
      creatorAddress: "0x60FfeF37dd73BE7bF952826879B0DEb45B82f119",
      isReservedListing: false,
      status: 4,
    },
  ],
  ads: [
    {
      assetContractAddress: "0x0e7D81b26F618Bd762A4C0DeCf86fa472f4f30D6",
      currencyContractAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      pricePerToken: "1000000000000000000",
      currencyValuePerToken: {
        name: "Fantom",
        symbol: "FTM",
        decimals: 18,
        value: {
          type: "BigNumber",
          hex: "0x0de0b6b3a7640000",
        },
        displayValue: "1.0",
      },
      id: "9",
      tokenId: "2",
      quantity: "5",
      startTimeInSeconds: 1689843742,
      asset: {
        name: "30 secs Ads",
        description:
          "This Voucher gives you access to post 30secs video ad in one of my videos",
        id: "2",
        uri: "ipfs://QmPy2ogdW61tjS37K1xH3Ra7pUcx5EH9N7SXDRno8twXoV",
        type: "ads",
      },
      endTimeInSeconds: 2005203373,
      creatorAddress: "0x60FfeF37dd73BE7bF952826879B0DEb45B82f119",
      isReservedListing: false,
      status: 4,
    },
  ],
};
