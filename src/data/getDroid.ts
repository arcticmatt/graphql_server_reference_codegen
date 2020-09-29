import { Droid } from "./types/Droid";
import { droidData } from "./Data";

/**
 * Allows us to query for the droid with the given id.
 */
export function getDroid(id: string): Droid {
  return droidData[id];
}
