import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import PhoneNumberScreen from "../../screens/onboarding/signup/phoneNumber";
import PhoneNumberVerifyScreen from "../../screens/onboarding/signup/phoneVerify";
import NicknameScreen from "../../screens/onboarding/signup/nickname";
import ProfilePictureScreen from "../../screens/onboarding/signup/profilePicture";

const SignUpStack = createStackNavigator();

const SignUpNavigator = () => {
    return (
        <SignUpStack.Navigator
            initialRouteName="PhoneNumberScreen"
            screenOptions={{ headerShown: false }}>
            <SignUpStack.Screen name="PhoneNumberScreen" component={PhoneNumberScreen} />
            <SignUpStack.Screen name="PhoneNumberVerifyScreen" component={PhoneNumberVerifyScreen} />
            <SignUpStack.Screen name="NicknameScreen" component={NicknameScreen} />
            <SignUpStack.Screen name="ProfilePictureScreen" component={ProfilePictureScreen} />
        </SignUpStack.Navigator>
    );
}

export default SignUpNavigator;