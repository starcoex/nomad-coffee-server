import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "./schema";
import { PrismaClient } from "@prisma/client";

const PORT = Number(process.env.PORT || 5000);

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server listening at: ${url}`);

  // await server.start();

  // console.log(` 🚀  Server is running!
  // //   📭  Query at http://localhost:${PORT}/graphql`);
}

startApolloServer();
