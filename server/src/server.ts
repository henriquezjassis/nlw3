import Express from 'express';
import path from 'path';
import 'express-async-errors';
import cors from 'cors';

import errorHandler from './errors/handler'
import './database/connection.ts';
import router from './routes';

const app = Express();

app.use(cors());
app.use(Express.json());
app.use(router);
app.use('/uploads', Express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

app.listen(3333);