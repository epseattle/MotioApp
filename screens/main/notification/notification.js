import React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import BottomTabNavigationLayout from '../../../components/layouts/BottomTabNavigation';

const NotificationScreen = () => {
    return (
        <BottomTabNavigationLayout>
            <Text>Hello, Notification</Text>
        </BottomTabNavigationLayout>
    );
};

const styles = StyleSheet.create({

});

export default NotificationScreen;