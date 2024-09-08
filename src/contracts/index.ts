
const CONTRACT_ADDRESS_ATTESTATIONS_BASE_SEPOLIA: `0x${string}` = '0xbCEcCe5c051245e6677E510b28F8FbEe623D8Ee3';

const CONTRACT_ADDRESS_OFTADAPTER_OPTIMISM_SEPOLIA: `0x${string}` = '0x2aEd03C88287C54D1E2710703020bD783cb051B9';

const CONTRACT_ADDRESS_OPTIMISM_SEPOLIA_USDC: `0x${string}` = '0x5fd84259d66Cd46123540766Be93DFE6D43130D7';

const CONTRACT_ABI_ATTESTATIONS_BASE_SEPOLIA: any[] = [
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "initialOwner",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "_spInstance",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "_endpoint",
              "type": "address"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
  },
  {
      "inputs": [],
      "name": "InvalidDelegate",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "InvalidEndpointCall",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "uint16",
              "name": "optionType",
              "type": "uint16"
          }
      ],
      "name": "InvalidOptionType",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "LzTokenUnavailable",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "uint32",
              "name": "eid",
              "type": "uint32"
          }
      ],
      "name": "NoPeer",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "msgValue",
              "type": "uint256"
          }
      ],
      "name": "NotEnoughNative",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "addr",
              "type": "address"
          }
      ],
      "name": "OnlyEndpoint",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "uint32",
              "name": "eid",
              "type": "uint32"
          },
          {
              "internalType": "bytes32",
              "name": "sender",
              "type": "bytes32"
          }
      ],
      "name": "OnlyPeer",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "owner",
              "type": "address"
          }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "account",
              "type": "address"
          }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "ProjectDescriptionCannotBeEmpty",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "ProjectIsVerified",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "ProjectNameCannotBeEmpty",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "uint8",
              "name": "bits",
              "type": "uint8"
          },
          {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
          }
      ],
      "name": "SafeCastOverflowedUintDowncast",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "token",
              "type": "address"
          }
      ],
      "name": "SafeERC20FailedOperation",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "SocialMediaURLCannotBeEmpty",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "WebsiteURLCannotBeEmpty",
      "type": "error"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "address",
              "name": "projectOwner",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "AeroDumpAttestations__TokensLocked",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
          }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint32",
              "name": "eid",
              "type": "uint32"
          },
          {
              "indexed": false,
              "internalType": "bytes32",
              "name": "peer",
              "type": "bytes32"
          }
      ],
      "name": "PeerSet",
      "type": "event"
  },
  {
      "inputs": [],
      "name": "AMOUNT",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint32",
                      "name": "srcEid",
                      "type": "uint32"
                  },
                  {
                      "internalType": "bytes32",
                      "name": "sender",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "uint64",
                      "name": "nonce",
                      "type": "uint64"
                  }
              ],
              "internalType": "struct Origin",
              "name": "origin",
              "type": "tuple"
          }
      ],
      "name": "allowInitializePath",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "composerEid",
      "outputs": [
          {
              "internalType": "uint32",
              "name": "",
              "type": "uint32"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "distributionCertificateSchemaId",
      "outputs": [
          {
              "internalType": "uint64",
              "name": "",
              "type": "uint64"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "endpoint",
      "outputs": [
          {
              "internalType": "contract ILayerZeroEndpointV2",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "getIsCsvUploaded",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          }
      ],
      "name": "getIsProjectVerified",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          }
      ],
      "name": "getIsTokensLocked",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          }
      ],
      "name": "getProjectId",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint32",
                      "name": "srcEid",
                      "type": "uint32"
                  },
                  {
                      "internalType": "bytes32",
                      "name": "sender",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "uint64",
                      "name": "nonce",
                      "type": "uint64"
                  }
              ],
              "internalType": "struct Origin",
              "name": "",
              "type": "tuple"
          },
          {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
          },
          {
              "internalType": "address",
              "name": "_sender",
              "type": "address"
          }
      ],
      "name": "isComposeMsgSender",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          }
      ],
      "name": "isVerifiedWithKYC",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "projectName",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "totalAmount",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "recipientCount",
              "type": "uint256"
          }
      ],
      "name": "issueDistributionCertificate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "kycVerificationSchemaId",
      "outputs": [
          {
              "internalType": "uint64",
              "name": "",
              "type": "uint64"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint32",
                      "name": "srcEid",
                      "type": "uint32"
                  },
                  {
                      "internalType": "bytes32",
                      "name": "sender",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "uint64",
                      "name": "nonce",
                      "type": "uint64"
                  }
              ],
              "internalType": "struct Origin",
              "name": "_origin",
              "type": "tuple"
          },
          {
              "internalType": "bytes32",
              "name": "_guid",
              "type": "bytes32"
          },
          {
              "internalType": "bytes",
              "name": "_message",
              "type": "bytes"
          },
          {
              "internalType": "address",
              "name": "_executor",
              "type": "address"
          },
          {
              "internalType": "bytes",
              "name": "_extraData",
              "type": "bytes"
          }
      ],
      "name": "lzReceive",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint32",
              "name": "",
              "type": "uint32"
          },
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          }
      ],
      "name": "nextNonce",
      "outputs": [
          {
              "internalType": "uint64",
              "name": "nonce",
              "type": "uint64"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "oAppVersion",
      "outputs": [
          {
              "internalType": "uint64",
              "name": "senderVersion",
              "type": "uint64"
          },
          {
              "internalType": "uint64",
              "name": "receiverVersion",
              "type": "uint64"
          }
      ],
      "stateMutability": "pure",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "owner",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint32",
              "name": "eid",
              "type": "uint32"
          }
      ],
      "name": "peers",
      "outputs": [
          {
              "internalType": "bytes32",
              "name": "peer",
              "type": "bytes32"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          },
          {
              "internalType": "bool",
              "name": "isVerified",
              "type": "bool"
          }
      ],
      "name": "recordKYCVerification",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint32",
              "name": "_dstEid",
              "type": "uint32"
          },
          {
              "internalType": "string",
              "name": "_message",
              "type": "string"
          }
      ],
      "name": "send",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint32",
              "name": "_dstEid",
              "type": "uint32"
          }
      ],
      "name": "setComposerEid",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "_delegate",
              "type": "address"
          }
      ],
      "name": "setDelegate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint32",
              "name": "_eid",
              "type": "uint32"
          },
          {
              "internalType": "bytes32",
              "name": "_peer",
              "type": "bytes32"
          }
      ],
      "name": "setPeer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint64",
              "name": "_verifyCertificateSchemaId",
              "type": "uint64"
          },
          {
              "internalType": "uint64",
              "name": "_kycVerificationSchemaId",
              "type": "uint64"
          },
          {
              "internalType": "uint64",
              "name": "_tokenDepositSchemaId",
              "type": "uint64"
          },
          {
              "internalType": "uint64",
              "name": "_distributionCertificateSchemaId",
              "type": "uint64"
          }
      ],
      "name": "setSchemaIds",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "spInstance",
      "outputs": [
          {
              "internalType": "contract ISP",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "tokenDepositSchemaId",
      "outputs": [
          {
              "internalType": "uint64",
              "name": "",
              "type": "uint64"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
          }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "verifyCertificateSchemaId",
      "outputs": [
          {
              "internalType": "uint64",
              "name": "",
              "type": "uint64"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "projectName",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "description",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "websiteUrl",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "socialMediaUrl",
              "type": "string"
          }
      ],
      "name": "verifyProject",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "projectId",
              "type": "uint256"
          }
      ],
      "stateMutability": "payable",
      "type": "function"
  }
];

const CONTRACT_ABI_OFTADAPTER_OPTIMISM_SEPOLIA: any[] = [
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "_token",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "_layerZeroEndpoint",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "_owner",
              "type": "address"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
  },
  {
      "inputs": [],
      "name": "InvalidDelegate",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "InvalidEndpointCall",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "InvalidLocalDecimals",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "uint16",
              "name": "optionType",
              "type": "uint16"
          }
      ],
      "name": "InvalidOptionType",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "bytes",
              "name": "options",
              "type": "bytes"
          }
      ],
      "name": "InvalidOptions",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "LzTokenUnavailable",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "uint32",
              "name": "eid",
              "type": "uint32"
          }
      ],
      "name": "NoPeer",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "msgValue",
              "type": "uint256"
          }
      ],
      "name": "NotEnoughNative",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "addr",
              "type": "address"
          }
      ],
      "name": "OnlyEndpoint",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "uint32",
              "name": "eid",
              "type": "uint32"
          },
          {
              "internalType": "bytes32",
              "name": "sender",
              "type": "bytes32"
          }
      ],
      "name": "OnlyPeer",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "OnlySelf",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "owner",
              "type": "address"
          }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "account",
              "type": "address"
          }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "uint8",
              "name": "bits",
              "type": "uint8"
          },
          {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
          }
      ],
      "name": "SafeCastOverflowedUintDowncast",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "token",
              "type": "address"
          }
      ],
      "name": "SafeERC20FailedOperation",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "bytes",
              "name": "result",
              "type": "bytes"
          }
      ],
      "name": "SimulationResult",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amountLD",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "minAmountLD",
              "type": "uint256"
          }
      ],
      "name": "SlippageExceeded",
      "type": "error"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "projectId",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "address[]",
              "name": "recipients",
              "type": "address[]"
          },
          {
              "indexed": false,
              "internalType": "uint32",
              "name": "dstChainId",
              "type": "uint32"
          }
      ],
      "name": "AerodumpOFTAdapter__AirdropQueued",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "projectId",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint32",
                      "name": "dstChainId",
                      "type": "uint32"
                  },
                  {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "amountToSend",
                      "type": "uint256"
                  }
              ],
              "indexed": false,
              "internalType": "struct AerodumpOFTAdapter.Recipient[]",
              "name": "recipients",
              "type": "tuple[]"
          }
      ],
      "name": "AerodumpOFTAdapter__AirdropQueuedWithUnequalCSVDistribution",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "bool",
              "name": "upkeepNeeded",
              "type": "bool"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "equalDistributionQueueLength",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "unequalDistributionCSVQueueLength",
              "type": "uint256"
          }
      ],
      "name": "AerodumpOFTAdapter__CheckUpkeep",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "address",
              "name": "recipient",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "dstChainId",
              "type": "uint256"
          }
      ],
      "name": "AerodumpOFTAdapter__TokensCredited",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "address",
              "name": "caller",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "projectId",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "dstChainId",
              "type": "uint256"
          }
      ],
      "name": "AerodumpOFTAdapter__TokensLocked",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "address",
              "name": "user",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "projectId",
              "type": "uint256"
          }
      ],
      "name": "AerodumpOFTAdapter__UserVerified",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint32",
                      "name": "eid",
                      "type": "uint32"
                  },
                  {
                      "internalType": "uint16",
                      "name": "msgType",
                      "type": "uint16"
                  },
                  {
                      "internalType": "bytes",
                      "name": "options",
                      "type": "bytes"
                  }
              ],
              "indexed": false,
              "internalType": "struct EnforcedOptionParam[]",
              "name": "_enforcedOptions",
              "type": "tuple[]"
          }
      ],
      "name": "EnforcedOptionSet",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "address",
              "name": "inspector",
              "type": "address"
          }
      ],
      "name": "MsgInspectorSet",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "bytes32",
              "name": "guid",
              "type": "bytes32"
          },
          {
              "indexed": false,
              "internalType": "uint32",
              "name": "srcEid",
              "type": "uint32"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "toAddress",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amountReceivedLD",
              "type": "uint256"
          }
      ],
      "name": "OFTReceived",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "bytes32",
              "name": "guid",
              "type": "bytes32"
          },
          {
              "indexed": false,
              "internalType": "uint32",
              "name": "dstEid",
              "type": "uint32"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "fromAddress",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amountSentLD",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amountReceivedLD",
              "type": "uint256"
          }
      ],
      "name": "OFTSent",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
          }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint32",
              "name": "eid",
              "type": "uint32"
          },
          {
              "indexed": false,
              "internalType": "bytes32",
              "name": "peer",
              "type": "bytes32"
          }
      ],
      "name": "PeerSet",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "address",
              "name": "preCrimeAddress",
              "type": "address"
          }
      ],
      "name": "PreCrimeSet",
      "type": "event"
  },
  {
      "inputs": [],
      "name": "SEND",
      "outputs": [
          {
              "internalType": "uint16",
              "name": "",
              "type": "uint16"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "SEND_AND_CALL",
      "outputs": [
          {
              "internalType": "uint16",
              "name": "",
              "type": "uint16"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "TOKEN_ADDRESS",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint32",
                      "name": "srcEid",
                      "type": "uint32"
                  },
                  {
                      "internalType": "bytes32",
                      "name": "sender",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "uint64",
                      "name": "nonce",
                      "type": "uint64"
                  }
              ],
              "internalType": "struct Origin",
              "name": "origin",
              "type": "tuple"
          }
      ],
      "name": "allowInitializePath",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "approvalRequired",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "pure",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "attestationsEid",
      "outputs": [
          {
              "internalType": "uint32",
              "name": "",
              "type": "uint32"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
          }
      ],
      "name": "checkUpkeep",
      "outputs": [
          {
              "internalType": "bool",
              "name": "upkeepNeeded",
              "type": "bool"
          },
          {
              "internalType": "bytes",
              "name": "performData",
              "type": "bytes"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint32",
              "name": "_eid",
              "type": "uint32"
          },
          {
              "internalType": "uint16",
              "name": "_msgType",
              "type": "uint16"
          },
          {
              "internalType": "bytes",
              "name": "_extraOptions",
              "type": "bytes"
          }
      ],
      "name": "combineOptions",
      "outputs": [
          {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "composer",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "composerSecondEid",
      "outputs": [
          {
              "internalType": "uint32",
              "name": "",
              "type": "uint32"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "decimalConversionRate",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "endpoint",
      "outputs": [
          {
              "internalType": "contract ILayerZeroEndpointV2",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint32",
              "name": "eid",
              "type": "uint32"
          },
          {
              "internalType": "uint16",
              "name": "msgType",
              "type": "uint16"
          }
      ],
      "name": "enforcedOptions",
      "outputs": [
          {
              "internalType": "bytes",
              "name": "enforcedOption",
              "type": "bytes"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "equalDistributionQueue",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "projectId",
              "type": "uint256"
          },
          {
              "internalType": "uint32",
              "name": "dstChainId",
              "type": "uint32"
          },
          {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "amountToSend",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "equalDistributionQueueFrontIndex",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
          }
      ],
      "name": "fakeCheckUpkeep",
      "outputs": [
          {
              "internalType": "bool",
              "name": "upkeepNeeded",
              "type": "bool"
          },
          {
              "internalType": "bytes",
              "name": "performData",
              "type": "bytes"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
          }
      ],
      "name": "fakePerformUpkeep",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "projectId",
              "type": "uint256"
          }
      ],
      "name": "getAmountLocked",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "getEqualDistributionRecipientQueueFront",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "projectId",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint32",
                      "name": "dstChainId",
                      "type": "uint32"
                  },
                  {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "amountToSend",
                      "type": "uint256"
                  }
              ],
              "internalType": "struct AerodumpOFTAdapter.Recipient",
              "name": "",
              "type": "tuple"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          }
      ],
      "name": "getIsLockedTokens",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "projectOwner",
              "type": "address"
          }
      ],
      "name": "getIsUserVerified",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "_user",
              "type": "address"
          }
      ],
      "name": "getProjectDetailsByAddress",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "bool",
                      "name": "isAirdropActive",
                      "type": "bool"
                  },
                  {
                      "internalType": "uint256",
                      "name": "projectId",
                      "type": "uint256"
                  },
                  {
                      "internalType": "address",
                      "name": "ownerOfTheProject",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "amountLockedInContract",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "incomingChainId",
                      "type": "uint256"
                  },
                  {
                      "internalType": "bool",
                      "name": "isSentToRecipients",
                      "type": "bool"
                  },
                  {
                      "internalType": "address[]",
                      "name": "recipients",
                      "type": "address[]"
                  },
                  {
                      "internalType": "uint32[]",
                      "name": "outgoingChainIds",
                      "type": "uint32[]"
                  }
              ],
              "internalType": "struct AerodumpOFTAdapter.project",
              "name": "",
              "type": "tuple"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_projectId",
              "type": "uint256"
          }
      ],
      "name": "getProjectDetailsById",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "bool",
                      "name": "isAirdropActive",
                      "type": "bool"
                  },
                  {
                      "internalType": "uint256",
                      "name": "projectId",
                      "type": "uint256"
                  },
                  {
                      "internalType": "address",
                      "name": "ownerOfTheProject",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "amountLockedInContract",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "incomingChainId",
                      "type": "uint256"
                  },
                  {
                      "internalType": "bool",
                      "name": "isSentToRecipients",
                      "type": "bool"
                  },
                  {
                      "internalType": "address[]",
                      "name": "recipients",
                      "type": "address[]"
                  },
                  {
                      "internalType": "uint32[]",
                      "name": "outgoingChainIds",
                      "type": "uint32[]"
                  }
              ],
              "internalType": "struct AerodumpOFTAdapter.project",
              "name": "",
              "type": "tuple"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "projectId",
              "type": "uint256"
          }
      ],
      "name": "getProjectIdToOwner",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "user",
              "type": "address"
          }
      ],
      "name": "getProjectOwnerToId",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "getTokenAddress",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "getUnequalDistributionCSVRecipientQueueFront",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "projectId",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint32",
                      "name": "dstChainId",
                      "type": "uint32"
                  },
                  {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "amountToSend",
                      "type": "uint256"
                  }
              ],
              "internalType": "struct AerodumpOFTAdapter.Recipient",
              "name": "",
              "type": "tuple"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint32",
                      "name": "srcEid",
                      "type": "uint32"
                  },
                  {
                      "internalType": "bytes32",
                      "name": "sender",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "uint64",
                      "name": "nonce",
                      "type": "uint64"
                  }
              ],
              "internalType": "struct Origin",
              "name": "",
              "type": "tuple"
          },
          {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
          },
          {
              "internalType": "address",
              "name": "_sender",
              "type": "address"
          }
      ],
      "name": "isComposeMsgSender",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint32",
              "name": "_eid",
              "type": "uint32"
          },
          {
              "internalType": "bytes32",
              "name": "_peer",
              "type": "bytes32"
          }
      ],
      "name": "isPeer",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "name": "isVerifiedUser",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "name": "is_lockedTokens",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_projectId",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "_minAmount",
              "type": "uint256"
          },
          {
              "internalType": "uint32",
              "name": "_dstChainId",
              "type": "uint32"
          }
      ],
      "name": "lockTokens",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "amountSent",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amountRecievedByRemote",
              "type": "uint256"
          }
      ],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "_oApp",
              "type": "address"
          },
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          },
          {
              "internalType": "bytes",
              "name": "_message",
              "type": "bytes"
          },
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          },
          {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
          }
      ],
      "name": "lzCompose",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint32",
                      "name": "srcEid",
                      "type": "uint32"
                  },
                  {
                      "internalType": "bytes32",
                      "name": "sender",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "uint64",
                      "name": "nonce",
                      "type": "uint64"
                  }
              ],
              "internalType": "struct Origin",
              "name": "_origin",
              "type": "tuple"
          },
          {
              "internalType": "bytes32",
              "name": "_guid",
              "type": "bytes32"
          },
          {
              "internalType": "bytes",
              "name": "_message",
              "type": "bytes"
          },
          {
              "internalType": "address",
              "name": "_executor",
              "type": "address"
          },
          {
              "internalType": "bytes",
              "name": "_extraData",
              "type": "bytes"
          }
      ],
      "name": "lzReceive",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "components": [
                          {
                              "internalType": "uint32",
                              "name": "srcEid",
                              "type": "uint32"
                          },
                          {
                              "internalType": "bytes32",
                              "name": "sender",
                              "type": "bytes32"
                          },
                          {
                              "internalType": "uint64",
                              "name": "nonce",
                              "type": "uint64"
                          }
                      ],
                      "internalType": "struct Origin",
                      "name": "origin",
                      "type": "tuple"
                  },
                  {
                      "internalType": "uint32",
                      "name": "dstEid",
                      "type": "uint32"
                  },
                  {
                      "internalType": "address",
                      "name": "receiver",
                      "type": "address"
                  },
                  {
                      "internalType": "bytes32",
                      "name": "guid",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "uint256",
                      "name": "value",
                      "type": "uint256"
                  },
                  {
                      "internalType": "address",
                      "name": "executor",
                      "type": "address"
                  },
                  {
                      "internalType": "bytes",
                      "name": "message",
                      "type": "bytes"
                  },
                  {
                      "internalType": "bytes",
                      "name": "extraData",
                      "type": "bytes"
                  }
              ],
              "internalType": "struct InboundPacket[]",
              "name": "_packets",
              "type": "tuple[]"
          }
      ],
      "name": "lzReceiveAndRevert",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint32",
                      "name": "srcEid",
                      "type": "uint32"
                  },
                  {
                      "internalType": "bytes32",
                      "name": "sender",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "uint64",
                      "name": "nonce",
                      "type": "uint64"
                  }
              ],
              "internalType": "struct Origin",
              "name": "_origin",
              "type": "tuple"
          },
          {
              "internalType": "bytes32",
              "name": "_guid",
              "type": "bytes32"
          },
          {
              "internalType": "bytes",
              "name": "_message",
              "type": "bytes"
          },
          {
              "internalType": "address",
              "name": "_executor",
              "type": "address"
          },
          {
              "internalType": "bytes",
              "name": "_extraData",
              "type": "bytes"
          }
      ],
      "name": "lzReceiveSimulate",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "msgInspector",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint32",
              "name": "",
              "type": "uint32"
          },
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          }
      ],
      "name": "nextNonce",
      "outputs": [
          {
              "internalType": "uint64",
              "name": "nonce",
              "type": "uint64"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "oApp",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "oAppVersion",
      "outputs": [
          {
              "internalType": "uint64",
              "name": "senderVersion",
              "type": "uint64"
          },
          {
              "internalType": "uint64",
              "name": "receiverVersion",
              "type": "uint64"
          }
      ],
      "stateMutability": "pure",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "oftVersion",
      "outputs": [
          {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
          },
          {
              "internalType": "uint64",
              "name": "version",
              "type": "uint64"
          }
      ],
      "stateMutability": "pure",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "owner",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint32",
              "name": "eid",
              "type": "uint32"
          }
      ],
      "name": "peers",
      "outputs": [
          {
              "internalType": "bytes32",
              "name": "peer",
              "type": "bytes32"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
          }
      ],
      "name": "performUpkeep",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "preCrime",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "projectIdToOwner",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "name": "projectOwnerToId",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "projects",
      "outputs": [
          {
              "internalType": "bool",
              "name": "isAirdropActive",
              "type": "bool"
          },
          {
              "internalType": "uint256",
              "name": "projectId",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "ownerOfTheProject",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "amountLockedInContract",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "incomingChainId",
              "type": "uint256"
          },
          {
              "internalType": "bool",
              "name": "isSentToRecipients",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_projectId",
              "type": "uint256"
          },
          {
              "internalType": "address[]",
              "name": "_recipients",
              "type": "address[]"
          },
          {
              "internalType": "uint32",
              "name": "_dstChainId",
              "type": "uint32"
          }
      ],
      "name": "queueAirdropWithEqualDistribution",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "projectId",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint32",
                      "name": "dstChainId",
                      "type": "uint32"
                  },
                  {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "amountToSend",
                      "type": "uint256"
                  }
              ],
              "internalType": "struct AerodumpOFTAdapter.Recipient[]",
              "name": "_recipientsData",
              "type": "tuple[]"
          }
      ],
      "name": "queueAirdropWithUnequalCSVDistribution",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint32",
                      "name": "dstEid",
                      "type": "uint32"
                  },
                  {
                      "internalType": "bytes32",
                      "name": "to",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "uint256",
                      "name": "amountLD",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "minAmountLD",
                      "type": "uint256"
                  },
                  {
                      "internalType": "bytes",
                      "name": "extraOptions",
                      "type": "bytes"
                  },
                  {
                      "internalType": "bytes",
                      "name": "composeMsg",
                      "type": "bytes"
                  },
                  {
                      "internalType": "bytes",
                      "name": "oftCmd",
                      "type": "bytes"
                  }
              ],
              "internalType": "struct SendParam",
              "name": "_sendParam",
              "type": "tuple"
          }
      ],
      "name": "quoteOFT",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "minAmountLD",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "maxAmountLD",
                      "type": "uint256"
                  }
              ],
              "internalType": "struct OFTLimit",
              "name": "oftLimit",
              "type": "tuple"
          },
          {
              "components": [
                  {
                      "internalType": "int256",
                      "name": "feeAmountLD",
                      "type": "int256"
                  },
                  {
                      "internalType": "string",
                      "name": "description",
                      "type": "string"
                  }
              ],
              "internalType": "struct OFTFeeDetail[]",
              "name": "oftFeeDetails",
              "type": "tuple[]"
          },
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "amountSentLD",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "amountReceivedLD",
                      "type": "uint256"
                  }
              ],
              "internalType": "struct OFTReceipt",
              "name": "oftReceipt",
              "type": "tuple"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint32",
                      "name": "dstEid",
                      "type": "uint32"
                  },
                  {
                      "internalType": "bytes32",
                      "name": "to",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "uint256",
                      "name": "amountLD",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "minAmountLD",
                      "type": "uint256"
                  },
                  {
                      "internalType": "bytes",
                      "name": "extraOptions",
                      "type": "bytes"
                  },
                  {
                      "internalType": "bytes",
                      "name": "composeMsg",
                      "type": "bytes"
                  },
                  {
                      "internalType": "bytes",
                      "name": "oftCmd",
                      "type": "bytes"
                  }
              ],
              "internalType": "struct SendParam",
              "name": "_sendParam",
              "type": "tuple"
          },
          {
              "internalType": "bool",
              "name": "_payInLzToken",
              "type": "bool"
          }
      ],
      "name": "quoteSend",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "nativeFee",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "lzTokenFee",
                      "type": "uint256"
                  }
              ],
              "internalType": "struct MessagingFee",
              "name": "msgFee",
              "type": "tuple"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint32",
                      "name": "dstEid",
                      "type": "uint32"
                  },
                  {
                      "internalType": "bytes32",
                      "name": "to",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "uint256",
                      "name": "amountLD",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "minAmountLD",
                      "type": "uint256"
                  },
                  {
                      "internalType": "bytes",
                      "name": "extraOptions",
                      "type": "bytes"
                  },
                  {
                      "internalType": "bytes",
                      "name": "composeMsg",
                      "type": "bytes"
                  },
                  {
                      "internalType": "bytes",
                      "name": "oftCmd",
                      "type": "bytes"
                  }
              ],
              "internalType": "struct SendParam",
              "name": "_sendParam",
              "type": "tuple"
          },
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "nativeFee",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "lzTokenFee",
                      "type": "uint256"
                  }
              ],
              "internalType": "struct MessagingFee",
              "name": "_fee",
              "type": "tuple"
          },
          {
              "internalType": "address",
              "name": "_refundAddress",
              "type": "address"
          }
      ],
      "name": "send",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "bytes32",
                      "name": "guid",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "uint64",
                      "name": "nonce",
                      "type": "uint64"
                  },
                  {
                      "components": [
                          {
                              "internalType": "uint256",
                              "name": "nativeFee",
                              "type": "uint256"
                          },
                          {
                              "internalType": "uint256",
                              "name": "lzTokenFee",
                              "type": "uint256"
                          }
                      ],
                      "internalType": "struct MessagingFee",
                      "name": "fee",
                      "type": "tuple"
                  }
              ],
              "internalType": "struct MessagingReceipt",
              "name": "msgReceipt",
              "type": "tuple"
          },
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "amountSentLD",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "amountReceivedLD",
                      "type": "uint256"
                  }
              ],
              "internalType": "struct OFTReceipt",
              "name": "oftReceipt",
              "type": "tuple"
          }
      ],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint32",
              "name": "_dstEid",
              "type": "uint32"
          }
      ],
      "name": "setAttestationsEid",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "_composer",
              "type": "address"
          }
      ],
      "name": "setComposer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint32",
              "name": "_dstEid",
              "type": "uint32"
          }
      ],
      "name": "setComposerSecondEid",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "_delegate",
              "type": "address"
          }
      ],
      "name": "setDelegate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint32",
                      "name": "eid",
                      "type": "uint32"
                  },
                  {
                      "internalType": "uint16",
                      "name": "msgType",
                      "type": "uint16"
                  },
                  {
                      "internalType": "bytes",
                      "name": "options",
                      "type": "bytes"
                  }
              ],
              "internalType": "struct EnforcedOptionParam[]",
              "name": "_enforcedOptions",
              "type": "tuple[]"
          }
      ],
      "name": "setEnforcedOptions",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "_msgInspector",
              "type": "address"
          }
      ],
      "name": "setMsgInspector",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint32",
              "name": "_eid",
              "type": "uint32"
          },
          {
              "internalType": "bytes32",
              "name": "_peer",
              "type": "bytes32"
          }
      ],
      "name": "setPeer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "_preCrime",
              "type": "address"
          }
      ],
      "name": "setPreCrime",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "sharedDecimals",
      "outputs": [
          {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "token",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
          }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "unequalDistributionCSVQueue",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "projectId",
              "type": "uint256"
          },
          {
              "internalType": "uint32",
              "name": "dstChainId",
              "type": "uint32"
          },
          {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "amountToSend",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "unequalDistributionCSVQueueFrontIndex",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  }
];

const CONTRACT_ABI_OPTIMISM_SEPOLIA_USDC: any[] = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"authorizer","type":"address"},{"indexed":true,"internalType":"bytes32","name":"nonce","type":"bytes32"}],"name":"AuthorizationCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"authorizer","type":"address"},{"indexed":true,"internalType":"bytes32","name":"nonce","type":"bytes32"}],"name":"AuthorizationUsed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_account","type":"address"}],"name":"Blacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newBlacklister","type":"address"}],"name":"BlacklisterChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"burner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newMasterMinter","type":"address"}],"name":"MasterMinterChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"minter","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"uint256","name":"minterAllowedAmount","type":"uint256"}],"name":"MinterConfigured","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldMinter","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"PauserChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newRescuer","type":"address"}],"name":"RescuerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_account","type":"address"}],"name":"UnBlacklisted","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"inputs":[],"name":"CANCEL_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RECEIVE_WITH_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRANSFER_WITH_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"authorizer","type":"address"},{"internalType":"bytes32","name":"nonce","type":"bytes32"}],"name":"authorizationState","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"blacklister","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"authorizer","type":"address"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"cancelAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"authorizer","type":"address"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"cancelAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"},{"internalType":"uint256","name":"minterAllowedAmount","type":"uint256"}],"name":"configureMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currency","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"decrement","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"increment","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenSymbol","type":"string"},{"internalType":"string","name":"tokenCurrency","type":"string"},{"internalType":"uint8","name":"tokenDecimals","type":"uint8"},{"internalType":"address","name":"newMasterMinter","type":"address"},{"internalType":"address","name":"newPauser","type":"address"},{"internalType":"address","name":"newBlacklister","type":"address"},{"internalType":"address","name":"newOwner","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newName","type":"string"}],"name":"initializeV2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"lostAndFound","type":"address"}],"name":"initializeV2_1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"accountsToBlacklist","type":"address[]"},{"internalType":"string","name":"newSymbol","type":"string"}],"name":"initializeV2_2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masterMinter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"}],"name":"minterAllowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pauser","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"receiveWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"receiveWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"}],"name":"removeMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"tokenContract","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"rescueERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rescuer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"transferWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"transferWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"unBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newBlacklister","type":"address"}],"name":"updateBlacklister","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newMasterMinter","type":"address"}],"name":"updateMasterMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newPauser","type":"address"}],"name":"updatePauser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newRescuer","type":"address"}],"name":"updateRescuer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}];

export const ATTESTATIONS_CONTRACT_BASE_SEPOLIA = {
  address: CONTRACT_ADDRESS_ATTESTATIONS_BASE_SEPOLIA,
  abi: CONTRACT_ABI_ATTESTATIONS_BASE_SEPOLIA,
};

export const OFTADAPTER_CONTRACT_OPTIMISM_SEPOLIA = {
  address: CONTRACT_ADDRESS_OFTADAPTER_OPTIMISM_SEPOLIA,
  abi: CONTRACT_ABI_OFTADAPTER_OPTIMISM_SEPOLIA,
};

export const OPTIMISM_SEPOLIA_USDC_CONTRACT = {
  address: CONTRACT_ADDRESS_OPTIMISM_SEPOLIA_USDC,
  abi: CONTRACT_ABI_OPTIMISM_SEPOLIA_USDC,
};
