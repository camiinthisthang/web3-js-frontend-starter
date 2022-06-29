import Image from "next/image";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";

export default function ListProfiles({
  handle,
  following,
  followers,
  posts,
  imageURI,
}) {

  return (
    <div className="my-9">
          <div className="border-4">
            <h1>{handle}</h1>
            <img src={imageURI} width="300px" height="200px"/>
            <h2>Followers: {followers} </h2>
            <h2>Following: {following} </h2>
            <p>Posts: {posts}</p>
          </div>
    </div>
  );
}
