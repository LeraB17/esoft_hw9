import { CatData, ICat } from '../interfaces/ICat';
import { ICatRepository } from '../interfaces/ICatRepository';
import { v4 as uuidv4 } from 'uuid';

class InMemoryCatRepository implements ICatRepository {
    cats: ICat[] = [];

    constructor() {}

    getAllByUserId = async (userId: string): Promise<ICat[]> => {
        return this.cats.filter((cat) => cat.userId === userId);
    };

    getById = async (userId: string, id: string): Promise<ICat | undefined> => {
        return this.cats.find((cat) => cat.userId === userId && cat.id === id);
    };

    create = async (userId: string, catData: CatData): Promise<ICat> => {
        const newCat = {
            id: uuidv4(),
            ...catData,
            userId,
        };
        this.cats.push(newCat);
        return newCat;
    };
}

export default InMemoryCatRepository;
