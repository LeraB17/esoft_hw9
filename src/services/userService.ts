import { IUser, PartialUserData, UserData, isUserData, validateFields } from '../interfaces/IUser';
import { IUserRepository } from '../interfaces/IUserRepository';
import { IUserService } from '../interfaces/IUserService';

class UserService implements IUserService {
    constructor(readonly userRepo: IUserRepository) {}

    getUsers = async (): Promise<IUser[]> => {
        return this.userRepo.getAll();
    };

    getUser = async (id: string): Promise<IUser | undefined> => {
        return this.userRepo.getById(id);
    };

    createUser = async (userData: UserData): Promise<IUser> => {
        if (!isUserData(userData)) {
            throw new Error('Incorrect data format');
        }
        return this.userRepo.create(userData);
    };

    updateUser = async (id: string, data: PartialUserData): Promise<IUser | undefined> => {
        if (!validateFields(data)) {
            throw new Error('Incorrect data format');
        }
        return this.userRepo.update(id, data);
    };

    deleteUser = async (id: string): Promise<IUser | undefined> => {
        return this.userRepo.delete(id);
    };

    getUsersFilteredAge = async (age: number): Promise<IUser[]> => {
        if (!age) {
            throw new Error('Incorrect age');
        }
        return this.userRepo.filterByAge(age);
    };

    getUsersFilteredDomain = async (domain: string): Promise<IUser[]> => {
        return this.userRepo.filterByDomain(domain);
    };

    getUsersSorted = async (): Promise<IUser[]> => {
        return this.userRepo.sorted();
    };
}

export default UserService;
