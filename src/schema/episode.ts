import { GraphQLEnumType } from "graphql";

const episode = new GraphQLEnumType({
  name: "Episode",
  description: "One of the films in the Star Wars Trilogy",
  values: {
    // NOTE: GraphQL Code Generator doesn't preserve values in generated code. So just change these
    // to be 0, 1, and 2 instead of 4, 5, and 6.
    NEW_HOPE: {
      value: 0,
      description: "Released in 1977.",
    },
    EMPIRE: {
      value: 1,
      description: "Released in 1980.",
    },
    JEDI: {
      value: 2,
      description: "Released in 1983.",
    },
  },
});

export default episode;
