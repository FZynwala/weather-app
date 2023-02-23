import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import fetch from 'node-fetch';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/place/autocomplete/json', async (req: Request, res: Response) => {
  console.log('!!!!!!!!!!!!!!', req.query);
  let apiUrl = 'https://maps.googleapos.com/maps/api/place/autocomplete/json?';
  let params = `input=${'bon'}&key=${process.env.API_KEY}&language=en&radius=5000&rankby=distance`;
  let finalApiUrl = `${apiUrl}${encodeURI(params)}`

  try {
    const response = await fetch(finalApiUrl);
    res.send(response.json());
  } catch(e) {
    console.log(e);
    res.send(e)
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});