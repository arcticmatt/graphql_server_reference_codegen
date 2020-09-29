"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDroid = void 0;
const Data_1 = require("./Data");
/**
 * Allows us to query for the droid with the given id.
 */
function getDroid(id) {
    return Data_1.droidData[id];
}
exports.getDroid = getDroid;
