import express from 'express';
import { IUserController } from '../interfaces/IUserController';

export const userRoutes = (userController: IUserController) => {
    const router = express.Router();

    // router.get('/sorted', userController.getUsersSorted);
    // router.get('/age/:age', userController.getUsersFilteredAge);
    // router.get('/domain/:domain', userController.getUsersFilteredDomain);
    router.get('/users', userController.getUsers);
    router.get('/users/:id', userController.getUser);
    router.post('/users', userController.createUser);
    router.put('/users/:id', userController.updateUser);
    router.delete('/users/:id', userController.deleteUser);

    return router;
};
