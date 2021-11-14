import React from "react";
import { useDispatch } from 'react-redux';
import { signOut } from '../../../redux/userSlice';

import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

import BottomTabNavigationLayout from '../../../components/layouts/BottomTabNavigation';

const SettingsScreen = () => {
    const dispatch = useDispatch();
    return (
        <BottomTabNavigationLayout>
            <Text>Hello, Settings</Text>
            <Button title='Sign Out' onPress={() => { dispatch(signOut()) }} />
        </BottomTabNavigationLayout>
    );
};

const styles = StyleSheet.create({

});

export default SettingsScreen;