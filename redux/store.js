import { getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";

import UserReducer from './userSlice';
import ChallengeReducer from './challengeSlice';

export default configureStore({
    reducer: {
        user: UserReducer,
        challenge: ChallengeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['user/setUser', 'user/signIn', 'user/signOut']
        },
    }),
});