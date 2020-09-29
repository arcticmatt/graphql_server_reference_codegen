import { GraphQLEnumType } from "graphql";

const episode = new GraphQLEnumType({
  name: "Episode",
  description: "One of the films in the Star Wars Trilogy",
  values: {
    NEW_HOPE: {
      value: 4,
      description: "Released in 1977.",
    },
    EMPIRE: {
      value: 5,
      description: "Released in 1980.",
    },
    JEDI: {
      value: 6,
      description: "Released in 1983.",
    },
  },
});

export default episode;
