import { ICatService } from './ICatService';
import { FuncType } from './IUserController';

export interface ICatController {
    catService: ICatService;
    getUserCats: FuncType;
    getUserCat: FuncType;
    createCat: FuncType;
}
