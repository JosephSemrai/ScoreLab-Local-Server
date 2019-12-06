import * as express from 'express';

const rootRouter = express.Router();

// Home page route.
rootRouter.get('/', (req: express.Request, res: express.Response) => {
  res.sendFile('index.html', { root: './src/public/' });
});

export { rootRouter };
