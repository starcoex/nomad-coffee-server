import { Resolvers } from "../../generated/graphql";
import prisma from "../../prisma/client";
import { deleteAwsS3 } from "../../shared/shared.util";
const resolvers: Resolvers = {
  Mutation: {
    deleteCoffeeShop: async (_, { id }, { dataSources }) => {
      try {
        const coffeeShop = await prisma.coffeeShop.findUnique({
          where: { id },
          select: { userId: true },
        });

        const coffeeShopPhoto = await prisma.coffeeShopPhoto.findFirst({
          where: { coffeeShopId: id },
        });
        if (!coffeeShop) {
          return {
            ok: false,
            error: "존재하지 않는 커피숍입니다.",
          };
        } else if (coffeeShop.userId !== dataSources.loggedInUser.id) {
          return {
            ok: false,
            error: "권한이 없습니다.",
          };
        } else if (coffeeShop.userId === dataSources.loggedInUser.id) {
          await prisma.coffeeShop.delete({ where: { id } });
        }

        await deleteAwsS3(coffeeShopPhoto.url, "uploads");
        return {
          ok: true,
          id: coffeeShop.userId,
        };
      } catch (error) {
        return {
          ok: false,
          error: "Delete Not",
        };
      }
    },
  },
};
export default resolvers;
