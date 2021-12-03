import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut } from '../redux/userSlice';

import { NavigationContainer } from '@react-navigation/native';

import auth from '@react-native-firebase/auth';

import OnboardingStackNavigator from './onboarding/onboarding';
import MainStackNavigator from './main/main';

const RootNavigation = (props) => {
    const dispatch = useDispatch();
    const signedIn = useSelector(state => state.user.isSignedIn);
    if (auth().currentUser) {
        dispatch(signIn());
    }
    else {
        dispatch(signOut());
    }
    console.log(auth().currentUser);
    console.log(signedIn);

    return (
        <NavigationContainer>
            {
                auth().currentUser || signedIn ? (
                    <MainStackNavigator />
                ) : (
                    <OnboardingStackNavigator />
                )
            }
        </NavigationContainer>
    );
};

export default RootNavigation;