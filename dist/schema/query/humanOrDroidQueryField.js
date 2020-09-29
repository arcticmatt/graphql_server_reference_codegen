"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const getHumanOrDroid_1 = require("../../data/getHumanOrDroid");
const humanOrDroid_1 = __importDefault(require("../humanOrDroid"));
const sumInput_1 = __importDefault(require("../sumInput"));
const humanOrDroidQueryField = {
    type: humanOrDroid_1.default,
    args: {
        input: {
            type: graphql_1.GraphQLNonNull(sumInput_1.default),
        },
    },
    resolve(_source, { input }) {
        return getHumanOrDroid_1.getHumanOrDroid(input);
    },
};
exports.default = humanOrDroidQueryField;
