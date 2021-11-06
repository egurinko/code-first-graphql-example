import { GraphQLObjectType } from "graphql";
import * as queries from "./queries";

export const queryType = new GraphQLObjectType({
  name: "Query",
  fields: queries,
});
