import { Resolvers } from "../../generated/graphql";
import prisma from "../../prisma/client";

const resolvers: Resolvers = {
  Query: {
    //@ts-ignore
    seeCategories: async (_, { page }) => {
      try {
        const category = await prisma.category.findMany({
          take: 5,
          skip: (page - 1) * 5,
        });
        return {
          ok: true,
          category,
        };
      } catch (error) {
        return {
          ok: false,
          error: "CoffeeShop not found.",
        };
      }
    },
  },
};

export default resolvers;
