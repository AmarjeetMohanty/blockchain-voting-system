const { ethers } = require("ethers")
const fs = require('fs');
import { ethers } from "ethers";
const jsonFile = "./abi.json";
const abi=JSON.parse(fs.readFileSync(jsonFile));
const contractAddress = '0x45d2002eBb4aF839c6C91C92feDeC9c1a569be91'; // Insert contract address here


async function main(){
	//let provider = new ethers.getDefaultProvider("https://mainnet.infura.io/v3/59bb994837e348dcb3b79612153b46bd", {})
	try {
        const { ethereum } = window;
  
        if (!ethereum) {
          return toast({
            status: "error",
            position: "top-right",
            title: "Error",
            description: "No ethereum wallet found",
          });
        }
        const contract = new ethers.Contract(contractAddress,abi, provider)
        const name = await contract.getAddress()
        console.log(name)
        
        const block = await provider.getBlockNumber();
        console.log(block)
    }catch{
        return "Chutiya";
    }
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
