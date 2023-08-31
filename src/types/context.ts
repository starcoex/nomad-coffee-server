import { User } from "../generated/graphql";

// export type LoggedInUser = {
//   loggedInUser?: User;
// };

export type DataSourceContext = {
  dataSources: {
    loggedInUser?: User;
  };
};
