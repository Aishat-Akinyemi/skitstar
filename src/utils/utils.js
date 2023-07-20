import { ethers } from "ethers";

export const isZeroAddress = (addressToCheck) => ethers.constants.AddressZero === addressToCheck;

export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  export function classifyArrayType(tokensArray) {
    const nftArray = [];
    const eventArray = [];
    const adArray = [];

    tokensArray.forEach((item) => {
      switch (item.metadata.type) {
        case "nft":
          nftArray.push(item);
          break;
        case "event":
          eventArray.push(item);
          break;
        case "ads":
          adArray.push(item);
          break;
        default:
          break;
      }
    });
    return {
      nfts: nftArray,
      events: eventArray,
      ads: adArray
    }
  }