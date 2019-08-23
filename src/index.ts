import { ApolloServer, gql  } from 'apollo-server-express';
import app from "./app";
const schema = gql`
  type Query {
    me: User
  }

  type User {
    username: String!
  }
`;

const resolvers = {
  Query: {
    me: () => {
      return {
        username: 'Robin Wieruch',
      };
    },
  },
};
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });
app.listen(3001, () => {
  console.log("Express server listening on port 3001");
});
