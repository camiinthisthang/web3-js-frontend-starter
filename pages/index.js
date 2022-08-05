
import Layout from "../components/Layout";
import abi from "../utils/abi.json";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
//The component to display the data that comes back from your query to the subgraph
import List from "../components/List";
//you need these to save inputs from your user and send them to web3.storage
import { useState, useEffect } from "react";
import ListProfiles from "../components/ListProfiles";
import Heading from "../components/Heading";
import { useContract } from "wagmi";

//todo:
//1. show how to use the connectContract button
//2. use the subgraph in the UI
//3. API call to send things to web3.storage

const LENS_QUERY = gql`
  query getUserInfo {
    profiles(first: 20) {
      imageURI
      handle
      totalFollowers
      totalFollowings
      totalPosts
    }
  }
`;
const CONTRACT_ADDRESS = "0x-your-contract-address-here"

export default function Home() {
  //uncomment this after you add your contract address above, and 
  //abi in the abi.json file to declaratively creating an ethers Contract instance. 
  
  // const contract = useContract({
  //   addressOrName: CONTRACT_ADDRESS,
  //   contractInterface: abi.abi,
  // });

  const { loading, error, data } = useQuery(LENS_QUERY);
  console.log("Data", data);


//how to execute a function defined in your smart contract:
  const callSmartContractFunction = async () => {
    try {
      //name this in a way related to your smart contract, but the name doesn't matter as long as you keep it consistent in this function
      const myContract = connectContract();
      //if it was able to create that instance successfuly 
      if (myContract) {
        //because blockchain transactions take some time to execute, we need to wait until it finished executing before moving on 
        //myContract.smartContractFunction is actually calling the function, so replace 'smartContractFunction' with the name of the function in your smart contrac that you want to execute
        const txn = await myContract.smartContractFunction(pass, args, here, {
          gasLimit: 900000,
        });
        console.log("Minting...", txn.hash);
        let wait = await txn.wait();
        console.log("Minted -- ", txn.hash);
      } else {
        console.log("Error getting contract.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Heading></Heading>
      <div className="grid grid-cols-4 gap-4 justify-items-center">
        {data &&
          data.profiles.map((profile) => (
            <ListProfiles
              handle={profile.handle}
              followers={profile.totalFollowers}
              following={profile.totalFollowings}
              posts={profile.totalPosts}
              imageURI={profile.imageURI}
            ></ListProfiles>
          ))}
      </div>
    </div>
  );
}
