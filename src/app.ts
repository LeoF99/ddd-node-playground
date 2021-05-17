import express, { Application, RequestHandler } from 'express';
import traceability from 'traceability';
import Controller from './application/controllers/interfaces/controller';

const { Logger } = traceability;

class App {
  public app: Application;

  public port: number;

  constructor(appInit: {
    port: number;
    middleWares: Array<RequestHandler>;
    controllers: Array<Controller>;
    customizers: Array<(application: Application) => void>;
  }) {
    this.app = express();
    this.port = appInit.port;

    this.middlewares(appInit.middleWares);
    this.routes(appInit.controllers);
    this.customizers(appInit.customizers);
  }

  private customizers(customizers: Array<(application: Application) => void>) {
    customizers.forEach((customizer) => customizer(this.app));
  }

  private middlewares(middleWares: Array<RequestHandler>) {
    middleWares.forEach((middleWare) => this.app.use(middleWare));
  }

  private routes(controllers: Array<Controller>) {
    controllers.forEach((controller) =>
      this.app.use('/', controller.getRoutes()),
    );
  }

  public listen() {
    this.app.listen(this.port, () => {
      Logger.info(`App listening on the http://localhost:${this.port}`, {
        eventName: 'start_listening',
        process: 'Application',
      });
    });
  }
}

export default App;
