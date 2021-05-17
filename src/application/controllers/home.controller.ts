import express, { Request, Response, Router } from 'express';
import traceability from 'traceability';

import Controller from './interfaces/controller';

const { Logger } = traceability;

class HomeController implements Controller {
  private router: Router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get('/api/home', this.index);
  }

  public getRoutes(): Router {
    return this.router;
  }

  index = (req: Request, res: Response) => {
    Logger.info('Home request', { eventName: 'init', process: 'home' });

    const users = [
      {
        id: 1,
        name: 'Ali',
      },
      {
        id: 2,
        name: 'Can',
      },
      {
        id: 3,
        name: 'Ahmet',
      },
    ];

    Logger.info('Home request', {
      eventName: 'finish',
      process: 'home',
    });

    res.send({ users });
  };
}

export default HomeController;
