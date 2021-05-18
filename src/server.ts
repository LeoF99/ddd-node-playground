import express from 'express';
import traceability from 'traceability';
import dotenv from 'dotenv';

import {
  swaggerAppCustomizer,
  validationAppCustomizer,
  validatorMiddleware,
} from './configurations/api';
import HelloController from './application/controllers/hello.controller';
import HomeController from './application/controllers/home.controller';
import App from './app';

dotenv.config();

const { ContextAsyncHooks } = traceability;
const { PORT } = process.env;

const app = new App({
  port: Number(PORT || 3333),
  controllers: [new HomeController(), new HelloController()],
  middleWares: [
    express.json(),
    express.urlencoded({ extended: true }),
    ContextAsyncHooks.getExpressMiddlewareTracking(),
    validatorMiddleware,
  ],
  customizers: [swaggerAppCustomizer, validationAppCustomizer],
});

app.listen();
