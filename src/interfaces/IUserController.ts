import { NextFunction, Request, Response } from 'express';
import { IUserService } from './IUserService';

type FuncType = (req: Request, res: Response) => void;

export interface IUserController {
    userService: IUserService;
    getUsers: FuncType;
    getUser: FuncType;
    createUser: FuncType;
    updateUser: FuncType;
    deleteUser: FuncType;
    getUsersSorted: FuncType;
    getUsersFilteredAge: FuncType;
    getUsersFilteredDomain: FuncType;
}
