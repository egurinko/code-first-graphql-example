import { GraphQLNonNull, GraphQLList } from "graphql";
import { userType } from "../types";
import { usersSeed } from "../../../seed";

export const users = {
  type: new GraphQLNonNull(
    new GraphQLList(new GraphQLNonNull(userType))
  ),
  resolve: (_source: any, _args: any, _ctx: any) => {
    return usersSeed;
  },
};
