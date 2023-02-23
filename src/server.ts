import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import { routes } from './routes/routes';

const app = express();

app.use(express.json());

app.use('/', routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  return response.json({
    message: err.message,
  });
});

app.listen(3333, () => {
  console.log('TCC esquecido... Vamo lá');
});
