import { IUser, PartialUserData, UserData } from './IUser';

export interface IUserRepository {
    getAll: () => Promise<IUser[]>;
    getById: (id: string) => Promise<IUser | undefined>;
    create: (userData: UserData) => Promise<IUser>;
    update: (id: string, data: PartialUserData) => Promise<IUser | undefined>;
    delete: (id: string) => Promise<IUser | undefined>;
    filterByAge: (age: number) => Promise<IUser[]>;
    filterByDomain: (domain: string) => Promise<IUser[]>;
    sorted: () => Promise<IUser[]>;
}
