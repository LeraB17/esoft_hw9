import { IUser, PartialUserData, UserData } from './IUser';
import { IUserRepository } from './IUserRepository';

export interface IUserService {
    userRepo: IUserRepository;
    getUsers: () => Promise<IUser[]>;
    getUser: (id: string) => Promise<IUser | undefined>;
    createUser: (userData: UserData) => Promise<IUser>;
    updateUser: (id: string, data: PartialUserData) => Promise<IUser | undefined>;
    deleteUser: (id: string) => Promise<IUser | undefined>;
    // getUsersFilteredAge: (age: number) => Promise<IUser[]>;
    // getUsersFilteredDomain: (domain: string) => Promise<IUser[]>;
    // getUsersSorted: () => Promise<IUser[]>;
}
