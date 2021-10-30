import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        firebaseUser: {},
        isSignedIn: false,
    },
    reducers: {
        signIn: (state) => {
            state.isSignedIn = true
        },
        signOut: (state) => {
            state.isSignedIn = false
        }
    }
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;