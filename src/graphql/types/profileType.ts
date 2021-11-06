import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLNonNull } from "graphql";

export const profileType = new GraphQLObjectType({
  name: "Profile",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { 
      type: new GraphQLNonNull(GraphQLString),
      resolve: (source, _args, _ctx) => {
        return source.firstName + source.lastName;
      }
    },
  }
});
