import { Resolvers, ResolverTypeWrapper } from "../../generated/graphql";
import prisma from "../../prisma/client";

const resolvers: Resolvers = {
  Mutation: {
    deleteFileUpload: async (_, { id }, { dataSources }) => {
      try {
        const file = await prisma.file.findUnique({
          where: { id },
          select: { userId: true },
        });
        if (!file) {
          return {
            ok: false,
            error: "File not delete",
          };
        } else if (file.userId !== dataSources.loggedInUser.id) {
          return {
            ok: false,
            error: "Not authorized",
          };
        } else if (file.userId === dataSources.loggedInUser.id) {
          await prisma.file.delete({ where: { id } });
          return {
            ok: true,
            id: file.userId,
          };
        }
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
