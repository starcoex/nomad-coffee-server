import { PrismaClient, User } from "@prisma/client";
import prisma from "./prisma/client";

type Context = {
  dataSources: {
    loggedInUser?: User;
    prisma: PrismaClient;
  };
};

export type Resolver = (
  root: any,
  args: any,
  context: Context,
  info: any
) => any;

export type Resolvers = {
  [key: string]: {
    [key: string]: Resolver;
  };
};

export type SubResolvers = {
  [key: string]: {
    [key: string]: {
      subscribe: Resolver;
    };
  };
};
