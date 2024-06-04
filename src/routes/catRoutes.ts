import express from 'express';
import { ICatController } from '../interfaces/ICatController';

export const catPoutes = (catController: ICatController) => {
    const router = express.Router();

    router.get('/users/:userId/cats/:id', catController.getUserCat);
    router.get('/users/:userId/cats', catController.getUserCats);
    router.post('/users/:userId/cats', catController.createCat);

    return router;
};
