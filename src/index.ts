import http from 'http';
import express from 'express';
import { SERVER } from './config/config.js';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', (req, res, next) => {
    return res.status(200).json({ message: 'hello world!' });
});

const httpServer = http.createServer(app);
httpServer.listen(SERVER.SERVER_PORT, () => {
    console.log(`Server started on port ${SERVER.SERVER_PORT}`);
});
