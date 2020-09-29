import { GraphQLNonNull, GraphQLString } from "graphql";

import { Droid } from "../../data/types/Droid";
import droid from "../droid";
import { getDroid } from "../../data/getDroid";

const droidQueryField = {
  type: droid,
  args: {
    id: {
      description: "id of the droid",
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (_source: unknown, { id }: { id?: string }): Droid => getDroid(id!),
};

export default droidQueryField;
