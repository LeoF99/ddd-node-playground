import express from 'express';
import traceability from 'traceability';

import {
  swaggerAppCustomizer,
  validationAppCustomizer,
  validatorMiddleware,
} from './configurations/api';
import HelloController from './application/controllers/hello.controller';
import HomeController from './application/controllers/home.controller';
import App from './app';

const { ContextAsyncHooks } = traceability;

const app = new App({
  port: 5000,
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
