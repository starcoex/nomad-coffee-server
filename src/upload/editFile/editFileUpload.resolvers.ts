import { Resolvers, Mutation } from "../../generated/graphql";
import prisma from "../../prisma/client";

const resolvers: Resolvers = {
  Mutation: {
    editFileUpload: async (_, { id, avatarURL }, { dataSources }) => {
      try {
        const file = await prisma.file.findFirst({
          where: { id },
          include: {
            user: {
              select: { id: true },
            },
          },
        });
        if (file.userId !== dataSources.loggedInUser.id) {
          return {
            ok: false,
            error: "Not FileUpload",
          };
        }
        const updateFile = await prisma.file.update({
          where: {
            id,
          },
          data: {
            fileURL: avatarURL,
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
