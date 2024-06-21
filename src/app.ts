import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Meeting Room Booking System for Co-working spaces');
});

export default app;
