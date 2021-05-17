import express, { NextFunction, Request, Response, Router } from 'express';
import traceability from 'traceability';
import Controller from './interfaces/controller';
import BusinessError from '../../domain/exceptions/business.error';

const { Logger } = traceability;

class HelloController implements Controller {
  private router: Router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.post('/api/hello', this.index);
  }

  public getRoutes(): Router {
    return this.router;
  }

  index = (req: Request, res: Response, next: NextFunction) => {
    Logger.info(`Request Body ${req.body}`, {
      eventName: 'init',
      process: 'hello_world',
    });

    const users = [
      {
        id: 1,
        name: 'Ali',
        msg: 'Ali',
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

    const businessError = new BusinessError([
      {
        field: 'some_field',
        code: 'some.code',
      },
    ]);

    Logger.info('Done', { eventName: 'finish', process: 'hello_world' });

    res.send({ users, msg: 'msg' });
  };
}

export default HelloController;
