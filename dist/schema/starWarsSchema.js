"use strict";
/**
 * Code copied from https://github.com/graphql/graphql-js/blob/master/src/__tests__/starWarsSchema.js.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const query_1 = __importDefault(require("./query/query"));
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
const starWarsSchema = new graphql_1.GraphQLSchema({
    query: query_1.default,
});
exports.default = starWarsSchema;
