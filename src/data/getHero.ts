import { artoo, luke } from "./Data";

import { Character } from "./types/Character";
import { Episode } from "../generated";

/**
 * Allows us to fetch the undisputed hero of the Star Wars trilogy, R2-D2.
 */
function getHero(episode?: Episode): Character {
  if (episode === Episode.EMPIRE) {
    // Luke is the hero of Episode V.
    return luke;
  }
  // Artoo is the hero otherwise.
  return artoo;
}

export default getHero;
