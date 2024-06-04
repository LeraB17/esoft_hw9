import { IUser, PartialUserData, UserData } from '../interfaces/IUser';
import { IUserRepository } from '../interfaces/IUserRepository';
import { v4 as uuidv4 } from 'uuid';

class InMemoryUserRepository implements IUserRepository {
    users: IUser[] = [];

    constructor() {}

    getAll = async (): Promise<IUser[]> => {
        return this.users;
    };

    getById = async (id: string): Promise<IUser | undefined> => {
        return this.users.find((usr) => usr.id === id);
    };

    create = async (userData: UserData): Promise<IUser> => {
        const newUser = {
            id: uuidv4(),
            ...userData,
        };
        this.users.push(newUser);
        return newUser;
    };

    update = async (id: string, data: PartialUserData): Promise<IUser | undefined> => {
        const user = this.users.find((usr) => usr.id === id);
        if (user) {
            const { name, email, age } = data;

            if (name) user.name = name;
            if (email) user.email = email;
            if (age) user.age = age;

            return user;
        }
        return undefined;
    };

    delete = async (id: string): Promise<IUser | undefined> => {
        const user = this.users.find((usr) => usr.id === id);
        if (user) {
            this.users = this.users.filter((usr) => usr.id !== id);
            return user;
        }
        return undefined;
    };

    filterByAge = async (age: number): Promise<IUser[]> => {
        return this.users.filter((user) => user.age > age);
    };

    filterByDomain = async (domain: string): Promise<IUser[]> => {
        return this.users.filter((user) => user.email.split('@')[1] === domain);
    };

    sorted = async (): Promise<IUser[]> => {
        return this.users.slice().sort((a, b) => a.name.localeCompare(b.name));
    };
}

export default InMemoryUserRepository;
