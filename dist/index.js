"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const codegen_1 = __importDefault(require("./codegen"));
const starWarsSchema_1 = __importDefault(require("./schema/starWarsSchema"));
const server = new apollo_server_1.ApolloServer({ schema: starWarsSchema_1.default });
codegen_1.default();
// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
