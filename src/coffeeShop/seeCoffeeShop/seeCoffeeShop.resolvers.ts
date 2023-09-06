import { Resolvers } from "../../generated/graphql";
import prisma from "../../prisma/client";

const resolvers: Resolvers = {
  Query: {
    //@ts-ignore
    seeCoffeeShop: async (_, { id, page }) => {
      try {
        const coffeeShop = await prisma.coffeeShop.findUnique({
          where: { id },
          // include: { coffeeshopPhotos: true },
          // take: 5,
          // skip: (page - 1) * 5,
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
