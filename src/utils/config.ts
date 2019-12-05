import { resolve } from 'path';

import * as dotenv from 'dotenv';

dotenv.config({ path: resolve(__dirname, '../../../.env') });

let PORT: string;

if (process.env.NODE_ENV === 'TEST') {
  PORT = '8080';
} else {
  PORT = process.env.PORT || '8080';
}

export { PORT };
