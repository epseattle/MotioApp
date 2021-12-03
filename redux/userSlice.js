import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        firebaseUser: {},
        isSignedIn: false,
    },
    reducers: {
        signIn: (state, action) => {
            state.isSignedIn = true
        },
        signOut: (state) => {
            state.isSignedIn = false
        }
    }
});

export const { signIn, signOut, setUser } = userSlice.actions;
export default userSlice.reducer;