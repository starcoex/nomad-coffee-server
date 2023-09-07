import "dotenv/config";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { graphqlUploadExpress } from "graphql-upload-minimal";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { ApolloServer } from "@apollo/server";
import { typeDefs, resolvers, schema } from "./schema";
import { getUser } from "./util/users.utils";
import morgan from "morgan";
import prisma from "./prisma/client";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";

const PORT = Number(process.env.PORT || 5000);
const app = express();
const httpServer = http.createServer(app);
const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/graphql",
});

interface OnConnectProps {
  connectionParams?: {
    token: string;
  };
}
app.use(morgan("tiny"));
app.use("/static", express.static("uploads"));

const serverCleanup = useServer(
  {
    schema,
    context: async ({ connectionParams: { token } }: OnConnectProps) => {
      if (token) {
        const loggedInUser = await getUser(token);
        return { dataSources: { loggedInUser, prisma } };
      }
    },
  },
  wsServer
);

async function startApolloServer() {
  const server = new ApolloServer({
    // typeDefs,
    // resolvers,
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
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
            prisma,
            loggedInUser: await getUser(ctx.req.headers.token as string),
          },
        };
      },
    })
  );

  // httpServer.listen(PORT, () => {
  //   console.log(`Server is now running on http://localhost:${PORT}/graphql`);
  // });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  );
  console.log(` 🚀  Server is running!
  //   📭  Query at http://localhost:${PORT}/graphql`);
}

startApolloServer();
