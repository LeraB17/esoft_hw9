import { Request, Response } from 'express';
import { ICatController } from '../interfaces/ICatController';
import { ICatService } from '../interfaces/ICatService';

class CatController implements ICatController {
    constructor(readonly catService: ICatService) {}

    getUserCats = async (req: Request, res: Response) => {
        try {
            const cats = await this.catService.getUserCats(req.params.userId);
            res.status(200).json({
                count: cats.length,
                data: cats,
            });
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Unknown error occurred' });
            }
        }
    };

    getUserCat = async (req: Request, res: Response) => {
        try {
            const cat = await this.catService.getUserCat(req.params.userId, req.params.id);

            if (cat) {
                res.status(200).json(cat);
            } else {
                res.status(404).json({ error: 'Cat not found' });
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Unknown error occurred' });
            }
        }
    };

    createCat = async (req: Request, res: Response) => {
        try {
            const user = await this.catService.createCat(req.params.userId, req.body);
            res.status(201).json(user);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Unknown error occurred' });
            }
        }
    };
}

export default CatController;
