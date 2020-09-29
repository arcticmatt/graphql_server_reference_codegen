"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const getHuman_1 = __importDefault(require("../../data/getHuman"));
const human_1 = __importDefault(require("../human"));
const humanQueryField = {
    type: human_1.default,
    args: {
        id: {
            description: "id of the human",
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        },
    },
    resolve: (_source, { id }) => getHuman_1.default(id),
};
exports.default = humanQueryField;
