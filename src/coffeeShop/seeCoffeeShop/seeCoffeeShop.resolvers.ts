import prisma from "../../prisma/client";
import { Resolvers } from "../../type";

const resolvers: Resolvers = {
  Query: {
    seeCoffeeShop: async (_, { id }) => {
      try {
        const coffeeShop = await prisma.coffeeShop.findUnique({
          where: { id },
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
