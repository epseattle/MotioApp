import { configureStore } from "@reduxjs/toolkit";

import UserReducer from './userSlice';
import ChallengeReducer from './challengeSlice';

export default configureStore({
    reducer: {
        user: UserReducer,
        challenge: ChallengeReducer,
    }
});