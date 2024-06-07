import express from 'express';
import { ICatController } from '../interfaces/ICatController';

export const catPoutes = (catController: ICatController) => {
    const router = express.Router();

    /**
     * @openapi
     * components:
     *   schemas:
     *     Cat:
     *       type: object
     *       properties:
     *         id:
     *           type: string
     *         name:
     *           type: string
     *         userId:
     *           type: string
     *       required:
     *         - id
     *         - name
     *         - userId
     */

    /**
     * @openapi
     * components:
     *   schemas:
     *     CatList:
     *       type: object
     *       properties:
     *          count:
     *              type: number
     *          data:
     *              type: array
     *              items:
     *                   $ref: '#/components/schemas/Cat'
     */

    /**
     * @openapi
     * /api/users/{userId}/cats/{id}:
     *  get:
     *     tags:
     *     - Cats
     *     summary: Get cat by id and userId
     *     parameters:
     *      - name: userId
     *        in: path
     *        description: Id of user
     *        required: true
     *      - name: id
     *        in: path
     *        description: Id of cat
     *        required: true
     *     responses:
     *       200:
     *         description: Success
     *         content:
     *          application/json:
     *           schema:
     *              $ref: '#/components/schemas/Cat'
     *       404:
     *         description: Cat not found
     *       500:
     *          description: Error
     */

    router.get('/users/:userId/cats/:id', catController.getUserCat);
    /**
     *  @openapi
     * /api/users/{userId}/cats:
     *  get:
     *    tags:
     *    - Cats
     *    summary: Get cats of user
     *    parameters:
     *      - name: userId
     *        in: path
     *        description: Id of user-owner
     *        required: true
     *    responses:
     *      200:
     *        description: Success
     *        content:
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/CatList'
     *      500:
     *        description: Error
     *  post:
     *     tags:
     *     - Cats
     *     summary: Create cat for user
     *     parameters:
     *      - name: userId
     *        in: path
     *        description: Id of user-owner
     *        required: true
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Cat'
     *     responses:
     *       200:
     *         description: Success
     *         content:
     *          application/json:
     *           schema:
     *              $ref: '#/components/schemas/Cat'
     *       500:
     *         description: Error
     */
    router.get('/users/:userId/cats', catController.getUserCats);
    router.post('/users/:userId/cats', catController.createCat);

    return router;
};
