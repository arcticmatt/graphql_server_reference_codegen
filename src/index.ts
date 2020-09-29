import { performAstCodegen, performTypeScriptCodegen } from "./codegen";

import { ApolloServer } from "apollo-server";
import starWarsSchema from "./schema/starWarsSchema";

const server = new ApolloServer({ schema: starWarsSchema });

performAstCodegen();
performTypeScriptCodegen();

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
