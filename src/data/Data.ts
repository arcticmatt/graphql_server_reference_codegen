import { Droid } from "./types/Droid";
import { Episode } from "../generated";
import { Human } from "./types/Human";

export const luke: Human = {
  type: "Human",
  id: "1000",
  name: "Luke Skywalker",
  friends: ["1002", "1003", "2000", "2001"],
  appearsIn: [Episode.NEW_HOPE, Episode.EMPIRE, Episode.JEDI],
  homePlanet: "Tatooine",
};

export const vader: Human = {
  type: "Human",
  id: "1001",
  name: "Darth Vader",
  friends: ["1004"],
  appearsIn: [Episode.NEW_HOPE, Episode.EMPIRE, Episode.JEDI],
  homePlanet: "Tatooine",
};

export const han: Human = {
  type: "Human",
  id: "1002",
  name: "Han Solo",
  friends: ["1000", "1003", "2001"],
  appearsIn: [Episode.NEW_HOPE, Episode.EMPIRE, Episode.JEDI],
};

export const leia: Human = {
  type: "Human",
  id: "1003",
  name: "Leia Organa",
  friends: ["1000", "1002", "2000", "2001"],
  appearsIn: [Episode.NEW_HOPE, Episode.EMPIRE, Episode.JEDI],
  homePlanet: "Alderaan",
};

export const tarkin: Human = {
  type: "Human",
  id: "1004",
  name: "Wilhuff Tarkin",
  friends: ["1001"],
  appearsIn: [Episode.NEW_HOPE],
};

export const humanData: { [id: string]: Human } = {
  [luke.id]: luke,
  [vader.id]: vader,
  [han.id]: han,
  [leia.id]: leia,
  [tarkin.id]: tarkin,
};

export const threepio: Droid = {
  type: "Droid",
  id: "2000",
  name: "C-3PO",
  friends: ["1000", "1002", "1003", "2001"],
  appearsIn: [Episode.NEW_HOPE, Episode.EMPIRE, Episode.JEDI],
  primaryFunction: "Protocol",
};

export const artoo: Droid = {
  type: "Droid",
  id: "2001",
  name: "R2-D2",
  friends: ["1000", "1002", "1003"],
  appearsIn: [Episode.NEW_HOPE, Episode.EMPIRE, Episode.JEDI],
  primaryFunction: "Astromech",
};

export const droidData: { [id: string]: Droid } = {
  [threepio.id]: threepio,
  [artoo.id]: artoo,
};
