/**
 * Code copied from https://github.com/graphql/graphql-js/blob/master/src/__tests__/starWarsSchema.js.
 */

import { GraphQLSchema } from "graphql";
import query from "./query/query";

/**
 * Using our shorthand to describe type systems, the type system for our
 * Star Wars example is:
 *
 * enum Episode { NEW_HOPE, EMPIRE, JEDI }
 *
 * interface Character {
 *   id: String!
 *   name: String
 *   friends: [Character]
 *   appearsIn: [Episode]
 * }
 *
 * type Human implements Character {
 *   id: String!
 *   name: String
 *   friends: [Character]
 *   appearsIn: [Episode]
 *   homePlanet: String
 * }
 *
 * type Droid implements Character {
 *   id: String!
 *   name: String
 *   friends: [Character]
 *   appearsIn: [Episode]
 *   primaryFunction: String
 * }
 *
 * input SumInput {
 *   one: Int!
 *   two: Int!
 *   three: Int!
 * }
 *
 * union HumanOrDroid = Human | Droid
 *
 * type Query {
 *   hero(episode: Episode): Character
 *   human(id: String!): Human
 *   droid(id: String!): Droid
 *   humanOrDroid(input: SumInput!): HumanOrDroid
 * }
 */

const starWarsSchema: GraphQLSchema = new GraphQLSchema({
  query: query,
});

export default starWarsSchema;
