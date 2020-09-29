"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const character_1 = __importDefault(require("./character"));
const episode_1 = __importDefault(require("./episode"));
const getFriends_1 = __importDefault(require("../data/getFriends"));
const human = new graphql_1.GraphQLObjectType({
    name: "Human",
    description: "A humanoid creature in the Star Wars universe.",
    fields: {
        id: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            description: "The id of the human.",
        },
        name: {
            type: graphql_1.GraphQLString,
            description: "The name of the human.",
        },
        friends: {
            type: new graphql_1.GraphQLList(character_1.default),
            description: "The friends of the human, or an empty list if they have none.",
            resolve: (human) => getFriends_1.default(human),
        },
        appearsIn: {
            type: new graphql_1.GraphQLList(episode_1.default),
            description: "Which movies they appear in.",
        },
        homePlanet: {
            type: graphql_1.GraphQLString,
            description: "The home planet of the human, or null if unknown.",
        },
        secretBackstory: {
            type: graphql_1.GraphQLString,
            description: "Where are they from and how they came to be who they are.",
            resolve() {
                throw new Error("secretBackstory is secret.");
            },
        },
    },
    interfaces: [character_1.default],
});
exports.default = human;
