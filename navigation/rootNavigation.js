import React from 'react';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import auth from '@react-native-firebase/auth';

import OnboardingStackNavigator from './onboarding/onboarding';
import MainStackNavigator from './main/main';

const RootNavigation = () => {
    const signedIn = useSelector(state => state.user.isSignedIn);
    console.log(signedIn);
    console.log(auth().currentUser);

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