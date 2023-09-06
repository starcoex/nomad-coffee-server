import prisma from "../../prisma/client";
import { Resolvers } from "../../type";

const resolvers: Resolvers = {
  Query: {
    seeCoffeesShops: async (_, { page }) => {
      try {
        const coffeeShop = await prisma.coffeeShop.findMany({
          take: 5,
          skip: (page - 1) * 5,
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
