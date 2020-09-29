"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const episode = new graphql_1.GraphQLEnumType({
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
exports.default = episode;
