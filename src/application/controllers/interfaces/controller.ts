import { Router } from 'express';

interface Controller {
  getRoutes(): Router;
}

export default Controller;
