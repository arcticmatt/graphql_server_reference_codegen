"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const droidQueryField_1 = __importDefault(require("./droidQueryField"));
const heroQueryField_1 = __importDefault(require("./heroQueryField"));
const humanOrDroidQueryField_1 = __importDefault(require("./humanOrDroidQueryField"));
const humanQueryField_1 = __importDefault(require("./humanQueryField"));
const query = new graphql_1.GraphQLObjectType({
    name: "Query",
    fields: {
        hero: heroQueryField_1.default,
        human: humanQueryField_1.default,
        droid: droidQueryField_1.default,
        humanOrDroid: humanOrDroidQueryField_1.default,
    },
});
exports.default = query;
