import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

import character from "./character";
import episode from "./episode";
import getFriends from "../data/getFriends";

const droid = new GraphQLObjectType({
  name: "Droid",
  description: "A mechanical creature in the Star Wars universe.",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The id of the droid.",
    },
    name: {
      type: GraphQLString,
      description: "The name of the droid.",
    },
    friends: {
      type: new GraphQLList(character),
      description:
        "The friends of the droid, or an empty list if they have none.",
      resolve: (droid) => getFriends(droid),
    },
    appearsIn: {
      type: new GraphQLList(episode),
      description: "Which movies they appear in.",
    },
    secretBackstory: {
      type: GraphQLString,
      description: "Construction date and the name of the designer.",
      resolve(): string | null {
        throw new Error("secretBackstory is secret.");
      },
    },
    primaryFunction: {
      type: GraphQLString,
      description: "The primary function of the droid.",
    },
  },
  interfaces: [character],
});

export default droid;
