export interface User {
    name: string;
    email: string;
    id: number;
}

export const userList: User[] = [
    {
        name: "User 1",
        email: "user1@email.com",
        id: 1
    },
    {
        name: "User 2",
        email: "user2@email.com",
        id: 2
    },
    {
        name: "User 3",
        email: "user3@email.com",
        id: 3
    },
    {
        name: "User 4",
        email: "user4@email.com",
        id: 4
    },
];

export type RootState = {
    user: User[];
};
