import http from 'http';
import express from 'express';
import { SERVER } from './config/config.js';
import InMemoryUserRepository from './repositories/inMemoryUserRepository.js';
import UserService from './services/userService.js';
import UserController from './controllers/userController.js';
import { userRoutes } from './routes/userRoutes.js';
import { routeNotFound } from './middleware/routeNotFound.js';

const userModel = new InMemoryUserRepository();

const userService = new UserService(userModel);
const userController = new UserController(userService);

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', userRoutes(userController));
app.use(routeNotFound);

const httpServer = http.createServer(app);
httpServer.listen(SERVER.SERVER_PORT, () => {
    console.log(`Server started on port ${SERVER.SERVER_PORT}`);
});
