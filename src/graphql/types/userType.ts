import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLNonNull, GraphQLList } from "graphql";
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
        new GraphQLList(postType)
      )
    },
  }
});
