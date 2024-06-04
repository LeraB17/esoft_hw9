import { CatData, ICat, isCatData } from '../interfaces/ICat';
import { ICatRepository } from '../interfaces/ICatRepository';
import { ICatService } from '../interfaces/ICatService';

class CatService implements ICatService {
    constructor(readonly catsRepo: ICatRepository) {}

    getUserCats = async (userId: string): Promise<ICat[]> => {
        return this.catsRepo.getAllByUserId(userId);
    };

    getUserCat = async (userId: string, id: string): Promise<ICat | undefined> => {
        return this.catsRepo.getById(userId, id);
    };

    createCat = async (userId: string, catData: CatData): Promise<ICat> => {
        if (!isCatData(catData)) {
            throw new Error('Incorrect data format');
        }
        return this.catsRepo.create(userId, catData);
    };
}

export default CatService;
