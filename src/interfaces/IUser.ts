export interface IUser {
    id: string;
    name: string;
    email: string;
    age: number;
}

export type UserData = Omit<IUser, 'id'>;
export type PartialUserData = Partial<UserData>;

export const isUserData = (data: any): data is UserData => {
    return (
        typeof data === 'object' &&
        data !== null &&
        'name' in data &&
        'email' in data &&
        'age' in data &&
        typeof data.name === 'string' &&
        typeof data.email === 'string' &&
        typeof data.age === 'number'
    );
};

const PartialUserDataFields: (keyof PartialUserData)[] = ['name', 'email', 'age'];

export const validateFields = (
    data: Record<string, any>,
    expectedFields: (keyof PartialUserData)[] = PartialUserDataFields
): boolean => {
    return Object.keys(data).every((key) => expectedFields.includes(key as keyof PartialUserData));
};
