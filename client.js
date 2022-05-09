import {ApolloClient,InMemoryCache} from "@apollo/client";
export const client = new ApolloClient({
    uri: 'https://cmsv4.omnivoltaic.com/graphql',
    cache: new InMemoryCache()
  });