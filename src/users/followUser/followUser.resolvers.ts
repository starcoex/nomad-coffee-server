import prisma from "../../prisma/client";
import { Resolvers } from "../../type";

const resolvers: Resolvers = {
  Mutation: {
    followerUser: async (_, { userName }, { dataSources }) => {
      try {
        const user = await prisma.user.findUnique({ where: { userName } });
        if (!user) {
          return {
            ok: false,
            error: "That user does not exits.",
          };
        }
        await prisma.user.update({
          where: { id: dataSources.loggedInUser.id },
          data: {
            followers: {
              connect: {
                userName,
              },
            },
          },
        });
        return {
          ok: true,
        };
      } catch (error) {
        return {
          ok: false,
          error: "That user does not exits.",
        };
      }
    },
  },
};

export default resolvers;
