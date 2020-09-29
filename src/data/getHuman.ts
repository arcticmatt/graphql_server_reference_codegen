import { Human } from "./types/Human";
import { humanData } from "./Data";

/**
 * Allows us to query for the human with the given id.
 */
function getHuman(id: string): Human {
  return humanData[id];
}

export default getHuman;
