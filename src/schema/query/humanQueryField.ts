import { GraphQLNonNull, GraphQLString } from "graphql";

import { Human } from "../../data/types/Human";
import getHuman from "../../data/getHuman";
import human from "../human";

const humanQueryField = {
  type: human,
  args: {
    id: {
      description: "id of the human",
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (_source: unknown, { id }: { id?: string }): Human => getHuman(id!),
};

export default humanQueryField;
