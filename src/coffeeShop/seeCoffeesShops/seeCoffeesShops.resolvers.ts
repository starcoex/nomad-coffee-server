import prisma from "../../prisma/client";
import { Resolvers } from "../../type";

const resolvers: Resolvers = {
  Query: {
    seeCoffeesShops: async (_, { lastId }) => {
      try {
        const coffeeShop = await prisma.coffeeShop.findMany({
          take: 5,
          skip: lastId ? 1 : 0,
          ...(lastId && { cursor: { id: lastId } }),
        });
        return {
          ok: true,
          coffeeShop,
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
