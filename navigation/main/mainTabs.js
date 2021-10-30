import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ChallengeNavigator from './challenge'
import NotificationNavigator from "./notification";
import SettingsNavigator from "./settings";

const MainTab = createBottomTabNavigator();

const MainTabsNavigator = () => {
    return (
        <MainTab.Navigator
            screenOptions={{ headerShown: false }}>
            <MainTab.Screen name="ChallengeNavigator" component={ChallengeNavigator} />
            <MainTab.Screen name="NotificationNavigator" component={NotificationNavigator} />
            <MainTab.Screen name="SettingsNavigator" component={SettingsNavigator} />
        </MainTab.Navigator>
    );
}

export default MainTabsNavigator;