import React from 'react';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import OnboardingStackNavigator from './onboarding/onboarding';
import MainStackNavigator from './main/main';

const RootNavigation = () => {
    const isSignedIn = useSelector((state) => state.user.isSignedIn);
    return (
        <NavigationContainer>
            {
                isSignedIn ? (
                    <MainStackNavigator />
                ) : (
                    <OnboardingStackNavigator />
                )
            }
        </NavigationContainer>
    );
};

export default RootNavigation;