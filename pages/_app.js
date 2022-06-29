import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
//for some reason this doesn't work
import client from "../apollo-client";
import Layout from "../components/Layout";
import { ApolloProvider } from "@apollo/client";
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura'
import { ApolloClient, InMemoryCache } from "@apollo/client";

//apollo client make queries on your subgraph
const apollo_client = new ApolloClient({
  //replace with the url for the subgraph you want to query
    uri: 'https://api.thegraph.com/subgraphs/name/rtomas/lens-subgraph', 
    cache: new InMemoryCache()
  });

//set a variable in a file at the root of your project, .env.local, called NEXT_PUBLIC_INFURA_ID with your own Infura ID
const infuraId = process.env.NEXT_PUBLIC_INFURA_ID

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon],
  [infuraProvider({ infuraId })],
)

const { connectors } = getDefaultWallets({
  appName: 'web3-frontend-starter',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
      <ApolloProvider client={apollo_client}>
        <Layout>
        <Component {...pageProps} />
        </Layout>
        </ApolloProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
