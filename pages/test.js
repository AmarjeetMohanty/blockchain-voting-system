const { ethers } = require("ethers")
const fs = require('fs');
const jsonFile = "./abi.json";
const abi=JSON.parse(fs.readFileSync(jsonFile));
const contractAddress = '0x1aa9407865c76ea7203cf74263db7d616c10e56115f1e04d1112796869859460'; // Insert contract address here


async function main(){
	let provider = new ethers.getDefaultProvider("https://mainnet.infura.io/v3/59bb994837e348dcb3b79612153b46bd", {})
	//const provider = new ethers.providers.Web3Provider(window.ethereum)
    const contract = new ethers.Contract(contractAddress,abi, provider)
    const name = await contract.getAddress
    console.log(name)
	
    const block = await provider.getBlockNumber();
    console.log(block)
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
