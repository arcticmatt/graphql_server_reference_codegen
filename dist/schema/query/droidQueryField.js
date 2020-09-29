"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const droid_1 = __importDefault(require("../droid"));
const getDroid_1 = require("../../data/getDroid");
const droidQueryField = {
    type: droid_1.default,
    args: {
        id: {
            description: "id of the droid",
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
        },
    },
    resolve: (_source, { id }) => getDroid_1.getDroid(id),
};
exports.default = droidQueryField;
