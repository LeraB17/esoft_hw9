import { CatData, ICat } from './ICat';
import { ICatRepository } from './ICatRepository';

export interface ICatService {
    catsRepo: ICatRepository;
    getUserCats: (userId: string) => Promise<ICat[]>;
    getUserCat: (userId: string, id: string) => Promise<ICat | undefined>;
    createCat: (userId: string, catData: CatData) => Promise<ICat>;
}
