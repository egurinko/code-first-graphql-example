import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from "./graphql/schema";

const PORT = 4000;
const app = express();

app.use(
  '/graphql',
  express.json(),
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => console.log('Listening on :4000'));
