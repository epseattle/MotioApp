import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import MainTabsNavigator from "./mainTabs";
import CreateChallengeScreen from "../../screens/modals/createChallenge";

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
            </MainStack.Group>
            <MainStack.Group screenOptions={{ presentation: 'modal' }}>
                <MainStack.Screen name="CreateChallengeScreen" component={CreateChallengeScreen} />
            </MainStack.Group>
        </MainStack.Navigator>
    );
}

export default MainStackNavigator;