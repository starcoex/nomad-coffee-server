import { Resolvers } from "../../generated/graphql";
import prisma from "../../prisma/client";

const resolvers: Resolvers = {
  Query: {
    seeUser: async (_, { userName }) => {
      try {
        const user = await prisma.user.findUnique({ where: { userName } });
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
