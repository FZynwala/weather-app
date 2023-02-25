import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import googleApi from './api/googleApi';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/place/autocomplete/json', async (req: Request, res: Response) => {
    console.log(req.query);
    try {
        const response = await googleApi.get('/maps/api/place/autocomplete/json', {
            params: {
                input: req.query.input,
                key: process.env.API_KEY,
                language: 'en',
                radius: '5000',
                rankby: 'distance',
            },
        });
        console.log(response.data);
        res.send(JSON.stringify(response.data));
    } catch (e) {
        res.sendStatus(500).send(e);
    }
});

app.get('/place/details/json', async (req: Request, res: Response) => {
    try {
        const response = await googleApi.get('/maps/api/place/details/json', {
            params: {
                placeid: req.query.placeid,
                key: process.env.API_KEY,
            },
        });
        res.send(JSON.stringify(response.data));
    } catch (e) {
        res.sendStatus(500).send(e);
    }
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
