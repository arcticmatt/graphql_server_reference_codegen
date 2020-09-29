"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const droid_1 = __importDefault(require("./droid"));
const human_1 = __importDefault(require("./human"));
const humanOrDroid = new graphql_1.GraphQLUnionType({
    name: "HumanOrDroid",
    types: [human_1.default, droid_1.default],
    resolveType(character) {
        return character.type;
    },
});
exports.default = humanOrDroid;
