import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from "../../screens/main/settings/settings";

const SettingsStack = createStackNavigator();

const SettingsNavigator = () => {
    return(
        <SettingsStack.Navigator
            screenOptions={{ headerShown: false }}>
            <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen}/>
        </SettingsStack.Navigator>
    );
}

export default SettingsNavigator;