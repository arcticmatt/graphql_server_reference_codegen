"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = require("./Data");
/**
 * Helper function to get a character by ID.
 */
function getCharacter(id) {
    var _a;
    // Returning a promise just to illustrate that GraphQL.js supports it.
    return Promise.resolve((_a = Data_1.humanData[id]) !== null && _a !== void 0 ? _a : Data_1.droidData[id]);
}
exports.default = getCharacter;
