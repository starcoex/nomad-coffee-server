import "dotenv/config";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { graphqlUploadExpress } from "graphql-upload-minimal";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { ApolloServer } from "@apollo/server";
import { typeDefs, resolvers } from "./schema";
import { getUser } from "./util/users.utils";

const PORT = Number(process.env.PORT || 5000);

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    csrfPrevention: false,
  });

  await server.start();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>({
      credentials: true,
    }),
    bodyParser.json(),
    graphqlUploadExpress(),
    expressMiddleware(server, {
      context: async (ctx) => {
        return {
          dataSources: {
            loggedInUser: await getUser(ctx.req.headers.authorization),
          },
        };
      },
    })
  );
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  );
  console.log(` 🚀  Server is running!
  //   📭  Query at http://localhost:${PORT}/graphql`);
  // const { url } = await startStandaloneServer(server, {
  //   context: async ({ req, res }) => {
  //     const token = req.headers.authorization || "";
  //     const loggedInUser = await getUser(token);
  //     return {
  //       dataSources: {
  //         loggedInUser,
  //       },
  //     };
  //   },
  //   listen: { port: PORT },
  // });

  // console.log(`🚀 Server listening at: ${url}`);

  // await server.start();

  // console.log(` 🚀  Server is running!
  // //   📭  Query at http://localhost:${PORT}/graphql`);
}

startApolloServer();
