import { GraphQLNonNull } from "graphql";
import { connectionDefinitions, connectionArgs, connectionFromArray } from "graphql-relay";
import { userType } from "../types";
import { usersSeed } from "../../../seed";

export const users = {
  type: new GraphQLNonNull(
    connectionDefinitions({ nodeType: userType }).connectionType,
  ),
  args: connectionArgs,
  resolve: (_source: any, args: any, _ctx: any) => {
    return connectionFromArray(usersSeed, args);
  },
};
