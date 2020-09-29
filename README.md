# graphql_server_reference_codegen

An example GraphQL server implemented using the reference JavaScript implementation ([graphql-js](https://github.com/graphql/graphql-js)) + [GraphQL Code Generator](https://graphql-code-generator.com/docs/getting-started/index).

## Setup

This repository is based on https://github.com/arcticmatt/graphql_server_reference.

## Yarn scripts

### Running the code

Run the server with `yarn start`. Since we're using `ts-node-dev`, the server will be restarted when any relevant changes are made. Then go to http://localhost:4000/graphql to run queries.

### Testing the code

Run `yarn jest`.

### Typechecking the code

Run `yarn tsc`.

### Linting the code

Run `yarn eslint`.
