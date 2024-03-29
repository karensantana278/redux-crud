export interface User {
    name: string;
    email: string;
    id: number;
}

export type RootState = {
    user: User[];
};
