import { ethers } from "ethers";

export const isZeroAddress = (addressToCheck) => ethers.constants.AddressZero === addressToCheck;