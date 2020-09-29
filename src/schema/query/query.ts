import { GraphQLObjectType } from "graphql";
import droidQueryField from "./droidQueryField";
import heroQueryField from "./heroQueryField";
import humanOrDroidQueryField from "./humanOrDroidQueryField";
import humanQueryField from "./humanQueryField";

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    hero: heroQueryField,
    human: humanQueryField,
    droid: droidQueryField,
    humanOrDroid: humanOrDroidQueryField,
  },
});

export default query;
