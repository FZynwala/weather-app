var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';
dotenv.config();
const app = express();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.get('/place/autocomplete/json', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('!!!!!!!!!!!!!!', req.query);
    let apiUrl = 'https://maps.googleapos.com/maps/api/place/autocomplete/json?';
    let params = `input=${'bon'}&key=${process.env.API_KEY}&language=en&radius=5000&rankby=distance`;
    let finalApiUrl = `${apiUrl}${encodeURI(params)}`;
    try {
        const response = yield fetch(finalApiUrl);
        res.send(response.json());
    }
    catch (e) {
        console.log(e);
    }
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
