const { ethers } = require("ethers")
const contractABI = [ [
	{
		"inputs": [
			{
				"internalType": "bytes32[]",
				"name": "proposalNames",
				"type": "bytes32[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "voter",
				"type": "address"
			}
		],
		"name": "authenticate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "chairperson",
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
		"name": "proposals",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "name",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
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
				"name": "",
				"type": "address"
			}
		],
		"name": "voters",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "vote",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "voted",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "weight",
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
				"name": "proposal",
				"type": "uint256"
			}
		],
		"name": "voting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "winningName",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "winningName_",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "winningproposal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "winningproposal_",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]];
const contractAddress = '0x652c9ACcC53e765e1d96e2455E618dAaB79bA595'; // Insert contract address here

let provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/59bb994837e348dcb3b79612153b46bd")
async function main(){
    const contract = new ethers.Contract(contractAddress,contractABI, provider)
    // const name = await contract.winningproposal()
    // console.log(name)
    // let block = await provider.getBlockNumber();
    // console.log(block)
}
main()
// // Define the contract ABI and address

// // Instantiate the contract object
// const contract = new web3.eth.Contract(contractABI, contractAddress);

// // Call a contract function
// contract.methods.winningName().call((err, result) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(result);
// });

// // // Send a transaction to a contract function
// // contract.methods.voting(0).send({ from: '0x456...', gas: 100000 }, (err, txHash) => {
// //   if (err) {
// //     console.error(err);
// //     return;
// //   }
// //   console.log(txHash);
// // });
