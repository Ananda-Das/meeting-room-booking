import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import router from './app/route';
import globalErrorHandler from './app/middleware/globalErrorhandler';
import notFound from './app/middleware/notFound';

const app: Application = express();

//parsers
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Meeting Room Booking System for Co-working spaces 🚀');
});

//global error handler
app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
