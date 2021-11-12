import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ChallengeNavigator from './challenge'
import NotificationNavigator from "./notification";
import SettingsNavigator from "./settings";
import TabBar from "./tabBar";

const MainTab = createBottomTabNavigator();

const MainTabsNavigator = () => {
    return (
        <MainTab.Navigator
            tabBar={props => <TabBar {...props} />}
            screenOptions={{ headerShown: false }}>
            <MainTab.Screen
                name="Challenge"
                component={ChallengeNavigator} />
            <MainTab.Screen
                name="Notification"
                component={NotificationNavigator} />
            <MainTab.Screen
                name="Settings"
                component={SettingsNavigator} />
        </MainTab.Navigator>
    );
}

export default MainTabsNavigator;