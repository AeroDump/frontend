
const CONTRACT_ADDRESS: `0x${string}` = '0x5c33941c4AF7bFc5d5b1bF09f93075F2563A8d8e';

const CONTRACT_ABI: any[] = [
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
          }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
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
      "inputs": [],
      "name": "airdropExecutionSchemaId",
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
      "name": "csvUploadSchemaId",
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
      "inputs": [],
      "name": "getIsTokensLoked",
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
      "inputs": [],
      "name": "projectSchemaId",
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
              "internalType": "bytes32",
              "name": "fileHash",
              "type": "bytes32"
          },
          {
              "internalType": "uint256",
              "name": "recipientCount",
              "type": "uint256"
          }
      ],
      "name": "recordCSVFileUpload",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "inputs": [
          {
              "internalType": "string",
              "name": "projectName",
              "type": "string"
          },
          {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "recordProjectTokenDeposit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bool",
              "name": "consentGiven",
              "type": "bool"
          }
      ],
      "name": "recordUserConsent",
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
              "internalType": "uint64",
              "name": "_verifyProjectCertificateSchemaId",
              "type": "uint64"
          },
          {
              "internalType": "uint64",
              "name": "_kycVerificationSchemaId",
              "type": "uint64"
          },
          {
              "internalType": "uint64",
              "name": "_csvUploadSchemaId",
              "type": "uint64"
          },
          {
              "internalType": "uint64",
              "name": "_tokenDepositSchemaId",
              "type": "uint64"
          },
          {
              "internalType": "uint64",
              "name": "_userConsentSchemaId",
              "type": "uint64"
          },
          {
              "internalType": "uint64",
              "name": "_distributionCertificateSchemaId",
              "type": "uint64"
          },
          {
              "internalType": "uint64",
              "name": "_airdropExecutionSchemaId",
              "type": "uint64"
          }
      ],
      "name": "setSchemaIds",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "projectName",
              "type": "string"
          }
      ],
      "name": "signRefundAgreement",
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
      "name": "userConsentSchemaId",
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
              "name": "projectDescription",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "websiteUrl",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "twitterUrl",
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
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "verifyProjectCertificateSchemaId",
      "outputs": [
          {
              "internalType": "uint64",
              "name": "",
              "type": "uint64"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  }
];

export const CONTRACT = {
  address: CONTRACT_ADDRESS,
  abi: CONTRACT_ABI,
};
