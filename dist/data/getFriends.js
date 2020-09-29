"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getCharacter_1 = __importDefault(require("./getCharacter"));
/**
 * Allows us to query for a character's friends.
 */
function getFriends(character) {
    // Notice that GraphQL accepts Arrays of Promises.
    return character.friends.map((id) => getCharacter_1.default(id));
}
exports.default = getFriends;
