import { Router } from 'express';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';

const router = Router();

const { create } = new UserController();
const surveysController = new SurveysController();

router.post("/users", create);
router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

export { router };