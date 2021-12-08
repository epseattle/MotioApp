import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        firebaseUser: {},
        motiUser: {},
        isSignedIn: false,
    },
    reducers: {
        signIn: (state) => {
            state.isSignedIn = true;
        },
        signOut: (state) => {
            state.isSignedIn = false;
            state.motiUser = {};
            state.firebaseUser = {};
        }
    }
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;