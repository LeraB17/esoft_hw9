export interface ICat {
    id: string;
    name: string;
    userId: string;
}

export type CatData = Omit<ICat, 'id' | 'userId'>;

export const isCatData = (data: any): data is CatData => {
    return typeof data === 'object' && data !== null && 'name' in data && typeof data.name === 'string';
};
