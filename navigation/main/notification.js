import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import NotificationScreen from '../../screens/main/notification/notification';

const NotificationStack = createStackNavigator();

const NotificationNavigator = () => {
    return(
        <NotificationStack.Navigator
            screenOptions={{ headerShown: false }}>
            <NotificationStack.Screen name="NotificationScreen" component={NotificationScreen}/>
        </NotificationStack.Navigator>
    );
}

export default NotificationNavigator;