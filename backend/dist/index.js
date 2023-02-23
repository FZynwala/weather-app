"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const node_fetch_1 = __importDefault(require("node-fetch"));
dotenv_1.default.config();
const app = (0, express_1.default)();
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
        const response = yield (0, node_fetch_1.default)(finalApiUrl);
        res.send(response.json());
    }
    catch (e) {
        console.log(e);
        res.send(e);
    }
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
