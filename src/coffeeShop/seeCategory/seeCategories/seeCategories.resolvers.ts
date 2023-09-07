import { Resolvers } from "../../../generated/graphql";
import prisma from "../../../prisma/client";

const resolvers: Resolvers = {
  Query: {
    seeCategories: async (_, { lastId }, { dataSources }) => {
      try {
        const categories = await prisma.category.findMany({
          take: 5,
          skip: lastId ? 1 : 0,
          ...(lastId && { cursor: { id: lastId } }),
        });
        return {
          ok: true,
          coffeeshops: categories as [],
        };
      } catch (e) {
        return {
          ok: false,
          error: e.message,
        };
      }
    },
  },
};

export default resolvers;
