import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        firebaseUser: {},
        isSignedIn: false,
    },
    reducers: {
        signIn: (state, action) => {
            state.fireBaseUser = action.user;
            state.isSignedIn = true
        },
        signOut: (state) => {
            state.fireBaseUser = {};
            state.isSignedIn = false
        }
    }
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;