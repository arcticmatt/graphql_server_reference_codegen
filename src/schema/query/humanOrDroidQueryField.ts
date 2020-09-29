import { Droid } from "../../data/types/Droid";
import { GraphQLNonNull } from "graphql";
import { Human } from "../../data/types/Human";
import { SumInput } from "../../data/types/SumInput";
import { getHumanOrDroid } from "../../data/getHumanOrDroid";
import humanOrDroid from "../humanOrDroid";
import sumInput from "../sumInput";

const humanOrDroidQueryField = {
  type: humanOrDroid,
  args: {
    input: {
      type: GraphQLNonNull(sumInput),
    },
  },
  resolve(_source: unknown, { input }: { input?: SumInput }): Human | Droid {
    return getHumanOrDroid(input!);
  },
};

export default humanOrDroidQueryField;
