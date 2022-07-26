import * as express from 'express';
import { PORT, STATIC_ROOT_FOLDER_PATH } from './utils/constants';
import { createApolloServer } from './apollo/apollo-sever';
import { createServer } from 'http';
import mongoose from 'mongoose';
import seedDB from './utils/seed-database';

const app = express();

async function main() {
  app.use('/static', express.static(STATIC_ROOT_FOLDER_PATH));
  const httpServer = createServer(app);
  const apolloServer = await createApolloServer(httpServer, app);

  const mongoURL = process.env.MONGO_URL as string;

  mongoose
    .connect(mongoURL)
    .then(async () => {
      console.log('connected to mongo db');
      await seedDB();
      console.log('database seeded');
    })
    .catch((e) => {
      console.log('error conne cting to mongo DB');
      console.log(e);
    });

  await new Promise<void>((resolve) => {
    app.listen(PORT, () => {
      console.log(
        `GraphQL API Listening on http://localhost:${PORT}${apolloServer.graphqlPath}`
      );
      resolve();
    });
  });
}

main().catch((err) => console.log(err));
