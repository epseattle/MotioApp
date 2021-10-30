import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import auth from '@react-native-firebase/auth';

import {
    StyleSheet
} from 'react-native';

import TopNavigationLayout from "../../../components/layouts/TopNavigation";
import TextInput from '../../../components/inputs/text';
import OvalButton from '../../../components/buttons/oval';

const PhoneNumberScreen = ({ navigation }) => {
    const [confirm, setConfirm] = useState(null);

    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
        navigation.navigate('PhoneNumberVerifyScreen', { confirmation: confirm })
    }

    return (
        <TopNavigationLayout>
            <TextInput />
            <OvalButton title='Next' onPress={() => {
                signInWithPhoneNumber('+1 425-773-0854');
            }} />
        </TopNavigationLayout>
    );
};

const styles = StyleSheet.create({

});

export default PhoneNumberScreen;