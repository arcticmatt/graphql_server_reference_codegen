import { Character } from "./types/Character";
import getCharacter from "./getCharacter";

/**
 * Allows us to query for a character's friends.
 */
function getFriends(character: Character): Array<Promise<Character>> {
  // Notice that GraphQL accepts Arrays of Promises.
  return character.friends.map((id) => getCharacter(id));
}

export default getFriends;
