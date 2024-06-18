import { Request, Response } from 'express';
import { IUserController } from '../interfaces/IUserController';
import { IUserService } from '../interfaces/IUserService';

class UserController implements IUserController {
    constructor(readonly userService: IUserService) {}

    getUsers = async (req: Request, res: Response) => {
        try {
            const users = await this.userService.getUsers();
            res.status(200).json({
                count: users.length,
                data: users,
            });
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Unknown error occurred' });
            }
        }
    };

    getUser = async (req: Request, res: Response) => {
        try {
            const user = await this.userService.getUser(req.params.id);

            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Unknown error occurred' });
            }
        }
    };

    createUser = async (req: Request, res: Response) => {
        try {
            const user = await this.userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Unknown error occurred' });
            }
        }
    };

    updateUser = async (req: Request, res: Response) => {
        try {
            const user = await this.userService.updateUser(req.params.id, req.body);
            if (user) {
                res.status(201).json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Unknown error occurred' });
            }
        }
    };

    deleteUser = async (req: Request, res: Response) => {
        try {
            const user = await this.userService.deleteUser(req.params.id);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Unknown error occurred' });
            }
        }
    };

    getUsersFilteredAge = async (req: Request, res: Response) => {
        try {
            const users = await this.userService.getUsersFilteredAge(Number(req.params.age));
            res.status(200).json({
                count: users.length,
                data: users,
            });
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Unknown error occurred' });
            }
        }
    };

    getUsersFilteredDomain = async (req: Request, res: Response) => {
        try {
            const users = await this.userService.getUsersFilteredDomain(req.params.domain);
            res.status(200).json({
                count: users.length,
                data: users,
            });
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Unknown error occurred' });
            }
        }
    };

    getUsersSorted = async (req: Request, res: Response) => {
        try {
            const users = await this.userService.getUsersSorted();
            res.status(200).json({
                count: users.length,
                data: users,
            });
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Unknown error occurred' });
            }
        }
    };
}

export default UserController;
