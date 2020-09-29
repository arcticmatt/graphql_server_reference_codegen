import { droidData, humanData } from "./Data";

import { Droid } from "./types/Droid";
import { Human } from "./types/Human";
import { SumInput } from "./types/SumInput";

export function getHumanOrDroid(input: SumInput): Human | Droid {
  if ((input.one + input.two + input.three) % 2 === 0) {
    return humanData[Object.keys(humanData)[0]];
  }
  return droidData[Object.keys(droidData)[0]];
}
