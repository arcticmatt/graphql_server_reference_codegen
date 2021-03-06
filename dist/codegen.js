"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const typescriptPlugin = __importStar(require("@graphql-codegen/typescript"));
const graphql_1 = require("graphql");
const core_1 = require("@graphql-codegen/core");
const path_1 = __importDefault(require("path"));
const starWarsSchema_1 = __importDefault(require("./schema/starWarsSchema"));
async function performCodegen() {
    const outputFile = "generated.ts";
    const config = {
        config: {},
        documents: [],
        filename: outputFile,
        schema: graphql_1.parse(graphql_1.printSchema(starWarsSchema_1.default)),
        plugins: [{ typescript: {} }],
        pluginMap: {
            typescript: typescriptPlugin,
        },
    };
    const output = await core_1.codegen(config);
    fs.writeFile(path_1.default.join(__dirname, outputFile), output, () => {
        console.log("Outputs generated!");
    });
}
exports.default = performCodegen;
