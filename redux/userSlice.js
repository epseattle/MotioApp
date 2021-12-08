import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        firebaseUser: {},
        motiUser: {},
        isSignedIn: false,
    },
    reducers: {
        signIn: (state, action) => {
            const user = action.payload;
            state.isSignedIn = true;
            state.motiUser = user;
        },
        signOut: (state) => {
            state.isSignedIn = false;
            state.motiUser = {};
        }
    }
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;