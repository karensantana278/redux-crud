import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/User";

const getUsersFromLocalStorage = (): User[] => {
    const usersJSON = localStorage.getItem('users');
    return usersJSON ? JSON.parse(usersJSON) : [];
}

const initialState: User[] = getUsersFromLocalStorage();

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.push(action.payload);
            localStorage.setItem('users', JSON.stringify(state));
        },
        updateUser: (state, action: PayloadAction<User>) => {
            const index = state.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state[index] = { ...state[index], ...action.payload };
                localStorage.setItem('users', JSON.stringify(state));
            }
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            const index = state.findIndex(user => user.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
                localStorage.setItem('users', JSON.stringify(state));
            }
        }
    }
})

export const {addUser, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;