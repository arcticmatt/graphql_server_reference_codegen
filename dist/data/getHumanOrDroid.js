"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHumanOrDroid = void 0;
const Data_1 = require("./Data");
function getHumanOrDroid(input) {
    if ((input.one + input.two + input.three) % 2 === 0) {
        return Data_1.humanData[Object.keys(Data_1.humanData)[0]];
    }
    return Data_1.droidData[Object.keys(Data_1.droidData)[0]];
}
exports.getHumanOrDroid = getHumanOrDroid;
