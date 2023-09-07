import { Resolvers } from "../../generated/graphql";
import prisma from "../../prisma/client";

const resolvers: Resolvers = {
  Mutation: {
    deleteCategory: async (_, { id }, { dataSources }) => {
      try {
        const category = await prisma.category.findUnique({ where: { id } });
        if (!category) {
          return {
            ok: false,
            error: "존재하지 않는 카테고리입니다.",
          };
        }
        await prisma.category.delete({ where: { id } });
        return {
          ok: true,
          id: category.id,
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
