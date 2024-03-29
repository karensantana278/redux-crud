export interface User {
    name: string;
    email: string;
    id: number;
}

export const userList: User[] = [
    {
        name: "Myllena lucena",
        email: "myllena@gmail.com",
        id: 1
    },
    {
        name: "Nathalia Machado",
        email: "nathalia@gmail.com",
        id: 2
    },
    {
        name: "Ana Lucia",
        email: "ana@gmail.com",
        id: 3
    },
    {
        name: "Marcos Paulo",
        email: "marcos@gmail.com",
        id: 4
    },
];

export type RootState = {
    user: User[];
};
