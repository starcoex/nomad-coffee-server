import { Resolvers } from "../../generated/graphql";
import prisma from "../../prisma/client";

const resolvers: Resolvers = {
  Mutation: {
    createCoffeeShop: async (
      _,
      { name, latitude, longitude, categories },
      { dataSources }
    ) => {
      try {
        let categoryObj = [];
        if (categories) {
          categories.map(async (category) => {
            const trimCategory = category.trim().toLowerCase();
            const categorySlug = trimCategory.replace(/ +/g, "-");
            categoryObj = [
              {
                where: { name: trimCategory, slug: categorySlug },
                create: { name: trimCategory, slug: categorySlug },
              },
            ];
          });
        }
        await prisma.coffeeShop.create({
          data: {
            name,
            latitude,
            longitude,
            user: { connect: { id: dataSources.loggedInUser.id } },
            ...(categoryObj.length > 0 && {
              categories: {
                connectOrCreate: categoryObj,
              },
            }),
          },
        });
        return {
          ok: true,
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
