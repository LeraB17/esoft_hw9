import express from 'express';
import { IUserController } from '../interfaces/IUserController';

export const userRoutes = (userController: IUserController) => {
    const router = express.Router();

    /**
     * @openapi
     * components:
     *   schemas:
     *     User:
     *       type: object
     *       properties:
     *         id:
     *           type: string
     *         name:
     *           type: string
     *         email:
     *           type: string
     *         age:
     *           type: number
     *       required:
     *         - id
     *         - name
     *         - email
     *         - age
     */

    /**
     * @openapi
     * components:
     *   schemas:
     *     UserList:
     *       type: object
     *       properties:
     *          count:
     *              type: number
     *          data:
     *              type: array
     *              items:
     *                   $ref: '#/components/schemas/User'
     */

    /**
     *  @openapi
     * /api/users/sorted:
     *  get:
     *    tags:
     *    - Users
     *    summary: Sorting users by name
     *    responses:
     *      200:
     *          description: Success
     *          content:
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/UserList'
     *      500:
     *          description: Error
     */
    router.get('/users/sorted', userController.getUsersSorted);
    /**
     *  @openapi
     * /api/users/age/{age}:
     *  get:
     *    tags:
     *    - Users
     *    summary: Get users older than age
     *    parameters:
     *      - name: age
     *        in: path
     *        description: Age to filter
     *        required: true
     *    responses:
     *      200:
     *          description: Success
     *          content:
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/UserList'
     *      500:
     *          description: Error
     */
    router.get('/users/age/:age', userController.getUsersFilteredAge);
    /**
     *  @openapi
     * /api/users/domain/{domain}:
     *  get:
     *    tags:
     *    - Users
     *    summary: Get users with domain
     *    parameters:
     *      - name: domain
     *        in: path
     *        description: Domain to filter
     *        required: true
     *    responses:
     *      200:
     *          description: Success
     *          content:
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/UserList'
     *      500:
     *          description: Error
     */
    router.get('/users/domain/:domain', userController.getUsersFilteredDomain);
    /**
     *  @openapi
     * /api/users:
     *  get:
     *    tags:
     *    - Users
     *    summary: Get all users
     *    responses:
     *      200:
     *          description: Success
     *          content:
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/UserList'
     *      500:
     *          description: Error
     *  post:
     *     tags:
     *     - Users
     *     summary: Create user
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/User'
     *     responses:
     *       200:
     *         description: Success
     *         content:
     *          application/json:
     *           schema:
     *              $ref: '#/components/schemas/User'
     *       500:
     *         description: Error
     */
    router.get('/users', userController.getUsers);
    router.post('/users', userController.createUser);
    /**
     * @openapi
     * /api/users/{id}:
     *  get:
     *     tags:
     *     - Users
     *     summary: Get user by id
     *     parameters:
     *      - name: id
     *        in: path
     *        description: Id of user
     *        required: true
     *     responses:
     *       200:
     *         description: Success
     *         content:
     *          application/json:
     *           schema:
     *              $ref: '#/components/schemas/User'
     *       404:
     *         description: User not found
     *       500:
     *          description: Error
     *  put:
     *     tags:
     *     - Users
     *     summary: Update user
     *     parameters:
     *      - name: id
     *        in: path
     *        description: Id of user
     *        required: true
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/User'
     *     responses:
     *       200:
     *         description: Success
     *         content:
     *          application/json:
     *           schema:
     *              $ref: '#/components/schemas/User'
     *       404:
     *         description: User not found
     *       500:
     *         description: Error
     *  delete:
     *     tags:
     *     - Users
     *     summary: Delete user
     *     parameters:
     *      - name: id
     *        in: path
     *        description: Id of user
     *        required: true
     *     responses:
     *       200:
     *         description: User deleted
     *       404:
     *         description: User not found
     *       500:
     *         description: Error
     */
    router.get('/users/:id', userController.getUser);
    router.put('/users/:id', userController.updateUser);
    router.delete('/users/:id', userController.deleteUser);

    return router;
};
