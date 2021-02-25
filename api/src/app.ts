import 'reflect-metadata';
import express, { json } from 'express';
import  createConnection from "./database";
import { router } from './routes';

createConnection();
const app = express();

app.use(json());
app.use(router);

export { app };