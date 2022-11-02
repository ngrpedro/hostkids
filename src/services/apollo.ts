import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://graphql.datocms.com", //import.meta.env.VITE_API_URL,
    headers: {
      Authorization:
        "Bearer 250720ff3f7b5fb3e058de04703a2e", //`Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
    },
    cache: new InMemoryCache(),
  });
  