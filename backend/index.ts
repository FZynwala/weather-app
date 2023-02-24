import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import googleApi from './api/googleApi';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.get('/place/autocomplete/json', async (req: Request, res: Response) => {
    try {
        const response = await googleApi.get('', {
            params: {
                input: req.query.input,
                key: process.env.API_KEY,
                language: 'en',
                radius: '5000',
                rankby: 'distance',
            },
        });
        res.send(response.data);
    } catch (e) {
        console.log(e);
        res.send(e);
    }
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
