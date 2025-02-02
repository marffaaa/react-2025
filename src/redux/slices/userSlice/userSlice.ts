import { createSlice, isFulfilled, isRejected, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../models/IUser";
import { loadUsers } from "./loadUsers";
import { loadUser } from "./loadUser";

type UserSliceType = {
    users: IUser[];
    user: IUser | null;
    total: number;
    loadState: boolean;
};

const userInitialState: UserSliceType = {
    users: [],
    user: null,
    total: 0,
    loadState: false,
};

export const userSlice = createSlice({
    name: "userSlice",
    initialState: userInitialState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.loadState = action.payload;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<{ users: IUser[]; total: number }>) => {
                state.users = action.payload.users;
                state.total = action.payload.total;
            })
            .addCase(loadUsers.rejected, (state, action) => {
                console.log(state);
                console.log(action);
            })
            .addCase(loadUser.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.user = action.payload;
            })
            .addMatcher(isFulfilled(loadUsers, loadUser), (state) => {
                state.loadState = false;
            })
            .addMatcher(isRejected(loadUser, loadUsers), (state) => {
                console.log(state);
            }),
});

export const userSliceAction = {
    ...userSlice.actions,
    loadUsers,
    loadUser,
};
