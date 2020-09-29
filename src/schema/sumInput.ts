import { GraphQLInputObjectType, GraphQLInt, GraphQLNonNull } from "graphql";

const sumInput = new GraphQLInputObjectType({
  name: "SumInput",
  fields: {
    one: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "An arbitrary integer.",
    },
    two: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "An arbitrary integer.",
    },
    three: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "An arbitrary integer.",
    },
  },
});

export default sumInput;
