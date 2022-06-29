import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/rtomas/lens-subgraph',
    cache: new InMemoryCache()
  });