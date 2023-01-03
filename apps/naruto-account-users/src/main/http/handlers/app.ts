import { config } from 'dotenv-flow'
import express from 'express'

import setupErrorHandler from '@main/config/errorHandler';
import setupMiddlewares from '@main/config/middlewares';
import setupRoutes from '@main/http/routes' // eslint-disable-line

config({ silent: true })

const app = express();

setupMiddlewares(app);
setupRoutes(app);
setupErrorHandler(app);

export { app };

