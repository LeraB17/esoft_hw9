import http from 'http';
import express from 'express';
import { SERVER } from './config/config.js';
import InMemoryUserRepository from './repositories/inMemoryUserRepository.js';
import UserService from './services/userService.js';
import UserController from './controllers/userController.js';
import { userRoutes } from './routes/userRoutes.js';
import { routeNotFound } from './middleware/routeNotFound.js';
import InMemoryCatRepository from './repositories/inMemoryCatRepository.js';
import CatService from './services/catService.js';
import CatController from './controllers/catController.js';
import { catPoutes } from './routes/catRoutes.js';

const userRepo = new InMemoryUserRepository();
const catRepo = new InMemoryCatRepository();

const userService = new UserService(userRepo);
const userController = new UserController(userService);

const catService = new CatService(catRepo);
const catController = new CatController(catService);

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', userRoutes(userController));
app.use('/api', catPoutes(catController));
app.use(routeNotFound);

const httpServer = http.createServer(app);
httpServer.listen(SERVER.SERVER_PORT, () => {
    console.log(`Server started on port ${SERVER.SERVER_PORT}`);
});
