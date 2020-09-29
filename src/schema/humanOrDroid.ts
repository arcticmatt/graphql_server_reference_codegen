import { GraphQLUnionType } from "graphql";
import droid from "./droid";
import human from "./human";

const humanOrDroid = new GraphQLUnionType({
  name: "HumanOrDroid",
  types: [human, droid],
  resolveType(character) {
    return character.type;
  },
});

export default humanOrDroid;
