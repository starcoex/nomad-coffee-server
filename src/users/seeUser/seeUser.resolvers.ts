import { Resolvers } from "../../generated/graphql";
import prisma from "../../prisma/client";

const resolvers: Resolvers = {
  Query: {
    seeUser: async (_, { page, userName }) => {
      try {
        const user = await prisma.user.findMany({
          where: { userName },
          include: {
            followers: true,
            following: true,
          },
          take: 25,
          skip: (page - 1) * 25,
        });
        return {
          ok: true,
          user,
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
