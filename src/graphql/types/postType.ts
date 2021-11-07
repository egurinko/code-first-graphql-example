import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLNonNull } from "graphql";
import { ResolversParentTypes } from "../generatedTypes";
import { Context } from "../context";

export const postType: GraphQLObjectType<ResolversParentTypes["Post"], Context> = new GraphQLObjectType({
  name: "Post",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    detail: { type: new GraphQLNonNull(GraphQLString) },
  }
});
