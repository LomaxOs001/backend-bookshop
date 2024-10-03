import express, { json } from 'express';
import looger from 'morgan';
import { router } from './server.api/routes/router.js';

const app = express();

app.use(looger("dev"));
app.use((req, res, next) => {
  console.log(`Incoming request to: ${req.method} ${req.path}`);
  next();
});

app.use(json());
app.use('/api', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  
app.use("/api", router);


const port = 4600;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});