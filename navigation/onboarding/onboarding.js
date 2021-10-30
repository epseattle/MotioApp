import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from '../../screens/onboarding/welcome';
import SignUpNavigator from './signUp';

const OnboardingStack = createStackNavigator();

const OnboardingStackNavigator = () => {
    return (
        <OnboardingStack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <OnboardingStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <OnboardingStack.Screen name="SignUpNavigator" component={SignUpNavigator} />
        </OnboardingStack.Navigator>
    );
}

export default OnboardingStackNavigator;