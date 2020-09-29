"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const sumInput = new graphql_1.GraphQLInputObjectType({
    name: "SumInput",
    fields: {
        one: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
            description: "An arbitrary integer.",
        },
        two: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
            description: "An arbitrary integer.",
        },
        three: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
            description: "An arbitrary integer.",
        },
    },
});
exports.default = sumInput;
