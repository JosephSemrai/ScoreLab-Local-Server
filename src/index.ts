import { app } from './app';
import * as logger from './utils/logger';

import * as config from './utils/config';

app.listen(config.PORT, () => {
  // tslint:disable-next-line:no-console
  logger.info(`Server started at http://localhost:${config.PORT}`);
});
