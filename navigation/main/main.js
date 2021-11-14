import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import MainTabsNavigator from "./mainTabs";
import CreateChallengeScreen from "../../screens/modals/createChallenge";
import ProfileScreen from "../../screens/main/profile";

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <MainStack.Navigator
            initialRouteName="MainTabs"
            screenOptions={{
                headerShown: false
            }}>
            <MainStack.Group>
                <MainStack.Screen name="MainTabsNavigator" component={MainTabsNavigator} />
                <MainStack.Screen name="ProfileScreen" component={ProfileScreen} />
            </MainStack.Group>
            <MainStack.Group screenOptions={{ presentation: 'modal' }}>
                <MainStack.Screen name="CreateChallengeScreen" component={CreateChallengeScreen} />
            </MainStack.Group>
        </MainStack.Navigator>
    );
}

export default MainStackNavigator;