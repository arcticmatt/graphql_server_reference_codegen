"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = require("./Data");
/**
 * Allows us to fetch the undisputed hero of the Star Wars trilogy, R2-D2.
 */
function getHero(episode) {
    if (episode === 5) {
        // Luke is the hero of Episode V.
        return Data_1.luke;
    }
    // Artoo is the hero otherwise.
    return Data_1.artoo;
}
exports.default = getHero;
