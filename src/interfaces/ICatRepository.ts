import { CatData, ICat } from './ICat';

export interface ICatRepository {
    getAllByUserId: (userId: string) => Promise<ICat[]>;
    getById: (userId: string, id: string) => Promise<ICat | undefined>;
    create: (userId: string, catData: CatData) => Promise<ICat>;
}
