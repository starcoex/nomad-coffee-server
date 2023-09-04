import { Resolvers } from "../../generated/graphql";
import prisma from "../../prisma/client";

const resolvers: Resolvers = {
  Mutation: {
    unFollowerUser: async (_, { userName }, { dataSources }) => {
      try {
        const user = await prisma.user.findUnique({
          where: { userName: dataSources.loggedInUser.userName },
        });
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
              disconnect: {
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
