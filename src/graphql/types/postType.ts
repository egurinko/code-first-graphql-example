import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLNonNull } from "graphql";

export const postType = new GraphQLObjectType({
  name: "Post",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    detail: { type: new GraphQLNonNull(GraphQLString) },
  }
});
