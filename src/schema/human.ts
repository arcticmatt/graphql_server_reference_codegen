import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

import character from "./character";
import episode from "./episode";
import getFriends from "../data/getFriends";

const human = new GraphQLObjectType({
  name: "Human",
  description: "A humanoid creature in the Star Wars universe.",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The id of the human.",
    },
    name: {
      type: GraphQLString,
      description: "The name of the human.",
    },
    friends: {
      type: new GraphQLList(character),
      description:
        "The friends of the human, or an empty list if they have none.",
      resolve: (human) => getFriends(human),
    },
    appearsIn: {
      type: new GraphQLList(episode),
      description: "Which movies they appear in.",
    },
    homePlanet: {
      type: GraphQLString,
      description: "The home planet of the human, or null if unknown.",
    },
    secretBackstory: {
      type: GraphQLString,
      description: "Where are they from and how they came to be who they are.",
      resolve(): string | null {
        throw new Error("secretBackstory is secret.");
      },
    },
  },
  interfaces: [character],
});

export default human;
