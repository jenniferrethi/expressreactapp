import * as express from 'express';

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {res.send('Hello World!')});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});