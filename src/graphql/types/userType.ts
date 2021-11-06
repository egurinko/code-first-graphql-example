import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLNonNull } from "graphql";
import { connectionDefinitions, connectionArgs, connectionFromArray } from "graphql-relay";
import { profileType } from "./profileType";
import { postType } from "./postType";

export const userType = new GraphQLObjectType({
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
      resolve: (source, args, _ctx) => {
        return connectionFromArray(source.posts, args)
      }
    },
  }
});
