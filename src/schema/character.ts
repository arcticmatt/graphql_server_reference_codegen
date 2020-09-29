import {
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";

import episode from "./episode";

const character: any = new GraphQLInterfaceType({
  name: "Character",
  description: "A character in the Star Wars Trilogy",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The id of the character.",
    },
    name: {
      type: GraphQLString,
      description: "The name of the character.",
    },
    friends: {
      type: new GraphQLList(character),
      description:
        "The friends of the character, or an empty list if they have none.",
    },
    appearsIn: {
      type: new GraphQLList(episode),
      description: "Which movies they appear in.",
    },
    secretBackstory: {
      type: GraphQLString,
      description: "All secrets about their past.",
    },
  }),
  resolveType(character) {
    return character.type;
  },
});

export default character;
