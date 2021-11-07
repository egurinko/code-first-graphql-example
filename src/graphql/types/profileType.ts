import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLNonNull } from "graphql";
import { ResolversParentTypes, ResolversTypes } from "../generatedTypes";
import { Context } from "../context";

export const profileType: GraphQLObjectType<ResolversParentTypes["Profile"], Context> = new GraphQLObjectType({
  name: "Profile",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { 
      type: new GraphQLNonNull(GraphQLString),
      resolve: (source, _args, _ctx): ResolversTypes["String"] => {
        return source.firstName + source.lastName;
      }
    },
  }
});
