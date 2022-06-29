import abiJSON from "../utils/yourabi.json";
import { ethers } from "ethers";

//todo: go into yourabi.json and paste in your abi generated from your smart contract

function connectContract() {
    const contractAddress = "your-contract-address-here";
    const contractABI = abiJSON.abi;
    let myContract;
    try {
        const { ethereum } = window;
  
        if (ethereum.chainId === "0x13881") { //this is the chainId for Mumbai testnet
          //checking for eth object in the window, see if they have wallet connected to Mumbai network
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          console.log("contractABI", contractABI);
          myContract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          ); // instantiating new connection to the contract
        } else {
          throw new Error('Please connect to the Polygon Mumbai network.')
        }
      } catch (error) {
        console.log("ERROR:", error);
      }
      return myContract;
  }
  
  export default connectContract;