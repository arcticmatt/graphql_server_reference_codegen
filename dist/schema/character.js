"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const episode_1 = __importDefault(require("./episode"));
const character = new graphql_1.GraphQLInterfaceType({
    name: "Character",
    description: "A character in the Star Wars Trilogy",
    fields: () => ({
        id: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            description: "The id of the character.",
        },
        name: {
            type: graphql_1.GraphQLString,
            description: "The name of the character.",
        },
        friends: {
            type: new graphql_1.GraphQLList(character),
            description: "The friends of the character, or an empty list if they have none.",
        },
        appearsIn: {
            type: new graphql_1.GraphQLList(episode_1.default),
            description: "Which movies they appear in.",
        },
        secretBackstory: {
            type: graphql_1.GraphQLString,
            description: "All secrets about their past.",
        },
    }),
    resolveType(character) {
        return character.type;
    },
});
exports.default = character;
