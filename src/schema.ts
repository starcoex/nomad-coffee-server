import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";
import path from "path";

const typesArray = loadFilesSync(path.join(__dirname, "/**/*.typeDefs.*"));
const resolversArray = loadFilesSync(path.join(__dirname, "/**/*.resolvers.*"));

export const typeDefs = mergeTypeDefs(typesArray);
export const resolvers: any = mergeResolvers(resolversArray);

export const schema = makeExecutableSchema({ typeDefs, resolvers });
