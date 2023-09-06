import prisma from "../../prisma/client";
import { Resolvers } from "../../type";

const resolvers: Resolvers = {
  Query: {
    seeUser: async (_, { page, userName }) => {
      try {
        const user = await prisma.user.findMany({
          where: { userName },
          include: {
            followers: true,
            following: true,
            coffeeShops: true,
          },
          take: 25,
          skip: (page - 1) * 25,
        });
        return {
          ok: true,
          user: user,
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
