import { GraphQLNonNull, GraphQLFieldConfig } from "graphql";
import { connectionDefinitions, connectionArgs, connectionFromArray } from "graphql-relay";
import { userType } from "../types";
import { QueryUsersArgs, ResolversParentTypes, ResolversTypes } from "../generatedTypes";
import { Context } from "../context";
import { usersSeed } from "../../../seed";

export const users: GraphQLFieldConfig<ResolversParentTypes["Query"], Context, QueryUsersArgs> = {
  type: new GraphQLNonNull(
    connectionDefinitions({ nodeType: userType }).connectionType,
  ),
  args: connectionArgs,
  resolve: (_source, args, _ctx): ResolversTypes["UserConnection"] => {
    return connectionFromArray(usersSeed, args);
  },
};
