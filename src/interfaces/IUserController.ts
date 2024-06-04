import { NextFunction, Request, Response } from 'express';
import { IUserService } from './IUserService';

export interface IUserController {
    userService: IUserService;
    getUsers: (req: Request, res: Response, next: NextFunction) => void;
    getUser: (req: Request, res: Response, next: NextFunction) => void;
    createUser: (req: Request, res: Response, next: NextFunction) => void;
    updateUser: (req: Request, res: Response, next: NextFunction) => void;
    deleteUser: (req: Request, res: Response, next: NextFunction) => void;
    // getUsersSorted: any;
    // getUsersFilteredAge: any;
    // getUsersFilteredDomain: any;
}
