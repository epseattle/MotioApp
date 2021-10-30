import React from "react";
import { useDispatch } from 'react-redux';
import { signOut } from '../../../redux/userSlice';

import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

const SettingsScreen = () => {
    const dispatch = useDispatch();
    return (
        <View>
            <Text>Hello, Settings</Text>
            <Button title='Sign Out' onPress={() => { dispatch(signOut()) }} />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SettingsScreen;