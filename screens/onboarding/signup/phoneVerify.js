import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

import TopNavigationLayout from "../../../components/layouts/TopNavigation";

const PhoneNumberVerifyScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const [code, setCode] = useState('');
    const { confirmation } = route.params;

    async function confirmCode() {
        try {
            await confirmation.confirm(code);
        } catch (error) {
            console.log('Invalid code.');
        }
    }

    return (
        <TopNavigationLayout>
            <Text>Hello, PhoneNumberVerifyScreen</Text>
            <Button title='Next' onPress={() => { navigation.navigate('NicknameScreen') }} />
            <TextInput value={code} onChangeText={text => setCode(text)} />
            <Button title="Confirm Code" onPress={() => {confirmCode()}} />
        </TopNavigationLayout>
    );
};

const styles = StyleSheet.create({

});

export default PhoneNumberVerifyScreen;