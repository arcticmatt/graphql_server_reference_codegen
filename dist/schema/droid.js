"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const character_1 = __importDefault(require("./character"));
const episode_1 = __importDefault(require("./episode"));
const getFriends_1 = __importDefault(require("../data/getFriends"));
const droid = new graphql_1.GraphQLObjectType({
    name: "Droid",
    description: "A mechanical creature in the Star Wars universe.",
    fields: {
        id: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            description: "The id of the droid.",
        },
        name: {
            type: graphql_1.GraphQLString,
            description: "The name of the droid.",
        },
        friends: {
            type: new graphql_1.GraphQLList(character_1.default),
            description: "The friends of the droid, or an empty list if they have none.",
            resolve: (droid) => getFriends_1.default(droid),
        },
        appearsIn: {
            type: new graphql_1.GraphQLList(episode_1.default),
            description: "Which movies they appear in.",
        },
        secretBackstory: {
            type: graphql_1.GraphQLString,
            description: "Construction date and the name of the designer.",
            resolve() {
                throw new Error("secretBackstory is secret.");
            },
        },
        primaryFunction: {
            type: graphql_1.GraphQLString,
            description: "The primary function of the droid.",
        },
    },
    interfaces: [character_1.default],
});
exports.default = droid;
