import express from "express";
import http from "http";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import fakeData from "./fakeData/index.js";
import { log } from "console";

const app = express();
const httpServer = http.createServer(app);

const typeDefs = `#graphql
  type Folders {
    id: String!,
    name: String!,
    author: Author!,
    createdAt: String!,
    updatedAt: String!,
  }

  type Author {
    id: String!,
    name: String!,
  }

  type Query {
    folders: [Folders!]!
  }
`;
const resolvers = {
  Query: {
    folders: () => {
      return fakeData.folders;
    },
  },
  Folders: {
    author: (parent, args) => {
      console.log("Parent", parent, "Args", args);
      const authorId = parent.authorId;
      return fakeData.authors.find((author) => author.id === authorId);
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer: httpServer })],
});

await apolloServer.start();

app.use(cors(), bodyParser.json(), expressMiddleware(apolloServer));

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

console.log(`🚀 Server ready at http://localhost:4000`);
