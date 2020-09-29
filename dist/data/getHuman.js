"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = require("./Data");
/**
 * Allows us to query for the human with the given id.
 */
function getHuman(id) {
    return Data_1.humanData[id];
}
exports.default = getHuman;
