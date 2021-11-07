import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLNonNull } from "graphql";
import { connectionDefinitions, connectionArgs, connectionFromArray } from "graphql-relay";
import { profileType } from "./profileType";
import { postType } from "./postType";
import { ResolversParentTypes, ResolversTypes, UserPostsArgs } from "../generatedTypes";
import { Context } from "../context";

export const userType: GraphQLObjectType<ResolversParentTypes["User"], Context> = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    profile: { type: new GraphQLNonNull(profileType) },
    posts: { 
      type: new GraphQLNonNull(
        connectionDefinitions({ nodeType: postType }).connectionType,
      ),
      args: connectionArgs,
      resolve: (source, args: UserPostsArgs, _ctx): ResolversTypes["PostConnection"] => {
        return connectionFromArray(source.posts, args)
      }
    },
  }
});
