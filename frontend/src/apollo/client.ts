import ApolloClient from "apollo-boost";

console.log(process.env);

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`
  },
});

export default client;