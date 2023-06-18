import { ethers } from "ethers";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// const abi = [
// 	{
// 		"inputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "prevOwner",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "newOwner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "OwnerUpdated",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "creatorAddress",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "erc1155tokenAddress",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "creatorJoined",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "sender",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "creator",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "uint256",
// 				"name": "amount",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "giftTransferred",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "getStar",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "ERC1155TokenAddress",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "subscriberCount",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "giftBalance",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "creatorInfoUrl",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address payable",
// 				"name": "creatorAdd",
// 				"type": "address"
// 			}
// 		],
// 		"name": "gift",
// 		"outputs": [],
// 		"stateMutability": "payable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "owner",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "_name",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_symbol",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_infoUrl",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "uint128",
// 				"name": "_royaltyBps",
// 				"type": "uint128"
// 			}
// 		],
// 		"name": "registerCreator",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "skitStarAddress",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "assetid",
// 				"type": "string"
// 			}
// 		],
// 		"name": "saveVideoAsset",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_newOwner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "setOwner",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "creatorAdd",
// 				"type": "address"
// 			}
// 		],
// 		"name": "subscribe",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "subscriptions",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "creatorAdd",
// 				"type": "address"
// 			}
// 		],
// 		"name": "unSubscribe",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	}
// ]


const skitStarContractAddress = "0x324126D0e57F526e7AB5e53e989a75A93b7E0641"
 export const provider = new ethers.providers.JsonRpcProvider("https://g.w.lavanet.xyz:443/gateway/evmost/json-rpc-http/06965c657a553db2bcb66f8fd0818633");

export const skitStarContractReader = new ethers.Contract(skitStarContractAddress, abi, provider);

export  async function isACreator(address) {
	const creatorObj = await skitStarContractReader.getStar(address);
	return(ethers.constants.AddressZero !== creatorObj.ERC1155TokenAddress);
} 
export  async function getAllStars() {
	const creatorObj = await skitStarContractReader.getStar(address);
	return(ethers.constants.AddressZero !== creatorObj.ERC1155TokenAddress);
} 
export  async function getStar(address) {
	const creatorObj = await skitStarContractReader.getStar(address);
	console.log(creatorObj.videoAssets);
	return(creatorObj);
} 

export async function registerCreator(name, symbol, infoUrl, signer){
	// await provider.send("eth_requestAccounts", []);
	// const signer = provider.getSigner();
	try {
		
		const  skitStarContractSigner = new ethers.Contract(skitStarContractAddress, abi, signer);
		let userAddress = await signer.getAddress();
		console.log(userAddress);
		let tx = await skitStarContractSigner.registerCreator(name, symbol, infoUrl, 0);
		// { gasPrice: 20e9 }
		console.log(`Transaction hash: ${tx.hash}`);
		const receipt = await tx.wait();
		console.log(`Transaction confirmed in block ${receipt.blockNumber}`);
		console.log(`Gas used: ${receipt.gasUsed.toString()}`); 
	} catch (error) {
		throw error;
	}
}
export async function saveVideoAsset(videoAssetUrl, signer){
	try {		
		const  skitStarContractSigner = new ethers.Contract(skitStarContractAddress, abi, signer);
		let tx = await skitStarContractSigner.saveVideoAsset(videoAssetUrl);	
		const receipt = await tx.wait();
	} catch (error) {
		throw error;
	}
}









