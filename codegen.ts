import type { CodegenConfig } from "@graphql-codegen/cli";
import { GraphQLUpload } from "graphql-upload-minimal";

const config: CodegenConfig = {
  schema: "./src/**/*.typeDefs.ts",
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "../types/context#DataSourceContext",
        // mappers: {
        //   CoffeeShop: "../types/models#CoffeeShopModel",
        // },
        scalars: {
          Upload: GraphQLUpload,
        },
      },
    },
  },
};

export default config;
