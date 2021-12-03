import { createSlice } from '@reduxjs/toolkit';

export const challengeSlice = createSlice({
    name: 'challenge',
    initialState: {
        ongoingChallenges: {},
        upcomingChallenges: {},
        completedChallenge: {},
    },
    reducers: {
        createChallenge: (state, action) => {
            var challenge = action.payload;
            var challengeId = challenge.id;
            var upcomingChallenges = state.upcomingChallenges;
            upcomingChallenges[challengeId] = challenge;
            state.upcomingChallenges = {
                ...upcomingChallenges
            };
        },
        startChallenge: (state, action) => {
            var challenge = action.challenge;
            var challengeId = action.challenge.id;
            
            var upcomingChallenges = { ...state.upcomingChallenges };
            delete upcomingChallenges[challengeId];
            state.upcomingChallenges = {
                ...state.upcomingChallenges
            };
            
            state.ongoingChallenges = {
                ...state.ongoingChallenges,
                challengeId: challenge
            };
        },
        completeChallenge: (state, action) => {
            var challenge = action.challenge
            var challengeId = action.challenge.id;

            var ongoingChallenges = { ...state.ongoingChallenges };
            delete ongoingChallenges[challengeId];
            state.ongoingChallenges = {
                ...state.ongoingChallenges
            };

            state.upcomingChallenges = {
                ...state.upcomingChallenges,
                challengeId: challenge
            };
        },
        quitOngoingChallenge: (state, action) => {
            var challenge = action.challenge;
            var challengeId = action.challenge.id;

            var ongoingChallenges = { ...state.ongoingChallenges };
            delete ongoingChallenges[challengeId];
            state.ongoingChallenges = {
                ...state.ongoingChallenges
            };
        },
        quitUpcomingChallenge: (state, action) => {
            var challenge = action.challenge;
            var challengeId = action.challenge.id;

            var upcomingChallenges = { ...state.upcomingChallenges };
            delete upcomingChallenges[challengeId];
            state.upcomingChallenges = {
                ...state.upcomingChallenges
            };
        }
    }
});

export const { createChallenge, startChallenge, completeChallenge, quitOngoingChallenge, quitUpcomingChallenge } = challengeSlice.actions;
export default challengeSlice.reducer;