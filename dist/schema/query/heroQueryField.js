"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = __importDefault(require("../character"));
const episode_1 = __importDefault(require("../episode"));
const getHero_1 = __importDefault(require("../../data/getHero"));
const heroQueryField = {
    type: character_1.default,
    args: {
        episode: {
            description: "If omitted, returns the hero of the whole saga. If provided, returns the hero of that particular episode.",
            type: episode_1.default,
        },
    },
    resolve: (_source, { episode }) => {
        return getHero_1.default(episode);
    },
};
exports.default = heroQueryField;
