export const erc1155_abi = [
    {
      "type": "constructor",
      "name": "",
      "inputs": [
        {
          "type": "string",
          "name": "_name",
          "internalType": "string"
        },
        {
          "type": "string",
          "name": "_symbol",
          "internalType": "string"
        },
        {
          "type": "address",
          "name": "_royaltyRecipient",
          "internalType": "address"
        },
        {
          "type": "uint128",
          "name": "_royaltyBps",
          "internalType": "uint128"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "error",
      "name": "OperatorNotAllowed",
      "inputs": [
        {
          "type": "address",
          "name": "operator",
          "internalType": "address"
        }
      ],
      "outputs": []
    },
    {
      "type": "event",
      "name": "ApprovalForAll",
      "inputs": [
        {
          "type": "address",
          "name": "_owner",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "_operator",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "bool",
          "name": "_approved",
          "indexed": false,
          "internalType": "bool"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "ContractURIUpdated",
      "inputs": [
        {
          "type": "string",
          "name": "prevURI",
          "indexed": false,
          "internalType": "string"
        },
        {
          "type": "string",
          "name": "newURI",
          "indexed": false,
          "internalType": "string"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "DefaultRoyalty",
      "inputs": [
        {
          "type": "address",
          "name": "newRoyaltyRecipient",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "newRoyaltyBps",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OperatorRestriction",
      "inputs": [
        {
          "type": "bool",
          "name": "restriction",
          "indexed": false,
          "internalType": "bool"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OwnerUpdated",
      "inputs": [
        {
          "type": "address",
          "name": "prevOwner",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "newOwner",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoyaltyForToken",
      "inputs": [
        {
          "type": "uint256",
          "name": "tokenId",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "royaltyRecipient",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "royaltyBps",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "TransferBatch",
      "inputs": [
        {
          "type": "address",
          "name": "_operator",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "_from",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "_to",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256[]",
          "name": "_ids",
          "indexed": false,
          "internalType": "uint256[]"
        },
        {
          "type": "uint256[]",
          "name": "_values",
          "indexed": false,
          "internalType": "uint256[]"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "TransferSingle",
      "inputs": [
        {
          "type": "address",
          "name": "_operator",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "_from",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "_to",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "_id",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "_value",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "URI",
      "inputs": [
        {
          "type": "string",
          "name": "_value",
          "indexed": false,
          "internalType": "string"
        },
        {
          "type": "uint256",
          "name": "_id",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "function",
      "name": "OPERATOR_FILTER_REGISTRY",
      "inputs": [],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "contract IOperatorFilterRegistry"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "balanceOfBatch",
      "inputs": [
        {
          "type": "address[]",
          "name": "accounts",
          "internalType": "address[]"
        },
        {
          "type": "uint256[]",
          "name": "ids",
          "internalType": "uint256[]"
        }
      ],
      "outputs": [
        {
          "type": "uint256[]",
          "name": "",
          "internalType": "uint256[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "batchMintTo",
      "inputs": [
        {
          "type": "address",
          "name": "_to",
          "internalType": "address"
        },
        {
          "type": "uint256[]",
          "name": "_tokenIds",
          "internalType": "uint256[]"
        },
        {
          "type": "uint256[]",
          "name": "_amounts",
          "internalType": "uint256[]"
        },
        {
          "type": "string",
          "name": "_baseURI",
          "internalType": "string"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "burn",
      "inputs": [
        {
          "type": "address",
          "name": "_owner",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "_tokenId",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "_amount",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "burnBatch",
      "inputs": [
        {
          "type": "address",
          "name": "_owner",
          "internalType": "address"
        },
        {
          "type": "uint256[]",
          "name": "_tokenIds",
          "internalType": "uint256[]"
        },
        {
          "type": "uint256[]",
          "name": "_amounts",
          "internalType": "uint256[]"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "contractURI",
      "inputs": [],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getBaseURICount",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getBatchIdAtIndex",
      "inputs": [
        {
          "type": "uint256",
          "name": "_index",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getDefaultRoyaltyInfo",
      "inputs": [],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        },
        {
          "type": "uint16",
          "name": "",
          "internalType": "uint16"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRoyaltyInfoForToken",
      "inputs": [
        {
          "type": "uint256",
          "name": "_tokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        },
        {
          "type": "uint16",
          "name": "",
          "internalType": "uint16"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isApprovedForAll",
      "inputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "mintTo",
      "inputs": [
        {
          "type": "address",
          "name": "_to",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "_tokenId",
          "internalType": "uint256"
        },
        {
          "type": "string",
          "name": "_tokenURI",
          "internalType": "string"
        },
        {
          "type": "uint256",
          "name": "_amount",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "multicall",
      "inputs": [
        {
          "type": "bytes[]",
          "name": "data",
          "internalType": "bytes[]"
        }
      ],
      "outputs": [
        {
          "type": "bytes[]",
          "name": "results",
          "internalType": "bytes[]"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "name",
      "inputs": [],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "nextTokenIdToMint",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "operatorRestriction",
      "inputs": [],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "royaltyInfo",
      "inputs": [
        {
          "type": "uint256",
          "name": "tokenId",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "salePrice",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "receiver",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "royaltyAmount",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "safeBatchTransferFrom",
      "inputs": [
        {
          "type": "address",
          "name": "from",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        },
        {
          "type": "uint256[]",
          "name": "ids",
          "internalType": "uint256[]"
        },
        {
          "type": "uint256[]",
          "name": "amounts",
          "internalType": "uint256[]"
        },
        {
          "type": "bytes",
          "name": "data",
          "internalType": "bytes"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "safeTransferFrom",
      "inputs": [
        {
          "type": "address",
          "name": "from",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "id",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "amount",
          "internalType": "uint256"
        },
        {
          "type": "bytes",
          "name": "data",
          "internalType": "bytes"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setApprovalForAll",
      "inputs": [
        {
          "type": "address",
          "name": "operator",
          "internalType": "address"
        },
        {
          "type": "bool",
          "name": "approved",
          "internalType": "bool"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setContractURI",
      "inputs": [
        {
          "type": "string",
          "name": "_uri",
          "internalType": "string"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setDefaultRoyaltyInfo",
      "inputs": [
        {
          "type": "address",
          "name": "_royaltyRecipient",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "_royaltyBps",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setOperatorRestriction",
      "inputs": [
        {
          "type": "bool",
          "name": "_restriction",
          "internalType": "bool"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setOwner",
      "inputs": [
        {
          "type": "address",
          "name": "_newOwner",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setRoyaltyInfoForToken",
      "inputs": [
        {
          "type": "uint256",
          "name": "_tokenId",
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "_recipient",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "_bps",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "subscribeToRegistry",
      "inputs": [
        {
          "type": "address",
          "name": "_subscription",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "supportsInterface",
      "inputs": [
        {
          "type": "bytes4",
          "name": "interfaceId",
          "internalType": "bytes4"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "symbol",
      "inputs": [],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "totalSupply",
      "inputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "uri",
      "inputs": [
        {
          "type": "uint256",
          "name": "_tokenId",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    }
  ]

export const skitstar_abi = [
  {
    "type": "constructor",
    "name": "",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenAddress",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_erc1155BaseCreatorAddress",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "error",
    "name": "Joined",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "NotSubscribed",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "Subscribed",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "UnregisteredAddress",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "event",
    "name": "CreatorRegistered",
    "inputs": [
      {
        "type": "address",
        "name": "creatorAddress",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "erc1155tokenAddress",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnerUpdated",
    "inputs": [
      {
        "type": "address",
        "name": "prevOwner",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "newOwner",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "function",
    "name": "allStars",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "deleteVideo",
    "inputs": [
      {
        "type": "string",
        "name": "_video",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getAllCreators",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "",
        "components": [
          {
            "type": "address",
            "name": "ERC1155TokenAddress",
            "internalType": "address"
          },
          {
            "type": "uint256",
            "name": "subscriberCount",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "giftBalance",
            "internalType": "uint256"
          },
          {
            "type": "string",
            "name": "creatorInfoUrl",
            "internalType": "string"
          },
          {
            "type": "string[]",
            "name": "videoAssets",
            "internalType": "string[]"
          }
        ],
        "internalType": "struct SkitStar.Creator[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getStar",
    "inputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "ERC1155TokenAddress",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "subscriberCount",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "giftBalance",
        "internalType": "uint256"
      },
      {
        "type": "string",
        "name": "creatorInfoUrl",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getVideoAssets",
    "inputs": [
      {
        "type": "address",
        "name": "creatorAddress",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "string[]",
        "name": "",
        "internalType": "string[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "giftCreator",
    "inputs": [
      {
        "type": "address",
        "name": "creatorAdd",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "amount",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "registerCreator",
    "inputs": [
      {
        "type": "string",
        "name": "_name",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_symbol",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_infoUrl",
        "internalType": "string"
      },
      {
        "type": "uint128",
        "name": "_royaltyBps",
        "internalType": "uint128"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "skitStarAddress",
        "internalType": "address"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "saveVideoAsset",
    "inputs": [
      {
        "type": "string",
        "name": "assetid",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setERC1155BaseCreatorContractAddress",
    "inputs": [
      {
        "type": "address",
        "name": "_erc1155BaseCreatorAddress",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setOwner",
    "inputs": [
      {
        "type": "address",
        "name": "_newOwner",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setTokenContractAddress",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenAddress",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "subscribe",
    "inputs": [
      {
        "type": "address",
        "name": "creatorAdd",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "subscriptions",
    "inputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "unSubscribe",
    "inputs": [
      {
        "type": "address",
        "name": "creatorAdd",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateProfile",
    "inputs": [
      {
        "type": "string",
        "name": "_infoUrl",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
]