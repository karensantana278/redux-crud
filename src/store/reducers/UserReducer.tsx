import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userList, User } from "../../data/Data";


const userSlice = createSlice({
    name: "user",
    initialState: userList,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.push(action.payload);
        },
        updateUser: (state, action: PayloadAction<User>) => {
            const index = state.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state[index] = { ...state[index], ...action.payload };
            }
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            const index = state.findIndex(user => user.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
    }
})

export const {addUser, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;