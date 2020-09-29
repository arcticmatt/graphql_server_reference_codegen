"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.droidData = exports.artoo = exports.threepio = exports.humanData = exports.tarkin = exports.leia = exports.han = exports.vader = exports.luke = void 0;
exports.luke = {
    type: "Human",
    id: "1000",
    name: "Luke Skywalker",
    friends: ["1002", "1003", "2000", "2001"],
    appearsIn: [4, 5, 6],
    homePlanet: "Tatooine",
};
exports.vader = {
    type: "Human",
    id: "1001",
    name: "Darth Vader",
    friends: ["1004"],
    appearsIn: [4, 5, 6],
    homePlanet: "Tatooine",
};
exports.han = {
    type: "Human",
    id: "1002",
    name: "Han Solo",
    friends: ["1000", "1003", "2001"],
    appearsIn: [4, 5, 6],
};
exports.leia = {
    type: "Human",
    id: "1003",
    name: "Leia Organa",
    friends: ["1000", "1002", "2000", "2001"],
    appearsIn: [4, 5, 6],
    homePlanet: "Alderaan",
};
exports.tarkin = {
    type: "Human",
    id: "1004",
    name: "Wilhuff Tarkin",
    friends: ["1001"],
    appearsIn: [4],
};
exports.humanData = {
    [exports.luke.id]: exports.luke,
    [exports.vader.id]: exports.vader,
    [exports.han.id]: exports.han,
    [exports.leia.id]: exports.leia,
    [exports.tarkin.id]: exports.tarkin,
};
exports.threepio = {
    type: "Droid",
    id: "2000",
    name: "C-3PO",
    friends: ["1000", "1002", "1003", "2001"],
    appearsIn: [4, 5, 6],
    primaryFunction: "Protocol",
};
exports.artoo = {
    type: "Droid",
    id: "2001",
    name: "R2-D2",
    friends: ["1000", "1002", "1003"],
    appearsIn: [4, 5, 6],
    primaryFunction: "Astromech",
};
exports.droidData = {
    [exports.threepio.id]: exports.threepio,
    [exports.artoo.id]: exports.artoo,
};
