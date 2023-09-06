// import { Resolvers, Category } from "../generated/graphql";
// import prisma from "../prisma/client";

// const resolvers: Resolvers = {
//   Category: {
//     totalShops: ({ id }, _, { dataSources }) => {
//       return prisma.coffeeShop.count({
//         where: { categories: { some: { id } } },
//       });
//     },
//   },
// };

// export default resolvers;
