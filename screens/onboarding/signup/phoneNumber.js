import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import auth from '@react-native-firebase/auth';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import TopNavigationLayout from "../../../components/layouts/TopNavigation";
import TextInput from '../../../components/inputs/text';
import OvalButton from '../../../components/buttons/oval';
import Color from "color";
import Font from "../../../styles/font";

const PhoneNumberScreen = ({ navigation }) => {
    const [confirm, setConfirm] = useState(null);

    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
        navigation.navigate('PhoneNumberVerifyScreen', { confirmation: confirm })
    }

    return (
        <TopNavigationLayout
            header={`Let's get started`}>
            <View>
                <Text style={{ color: Color.LightGrey, ...Font.B3 }}>
                    Moti will send an SMS message to verify your phone number.SMS rates may apply.
                </Text>
                <Text style={{ color: Color.LightGrey, ...Font.B4 }}>
                    This helps us confirm your identity.
                </Text>
            </View>
            <TextInput />
            <View>
                <OvalButton
                    title='Next'
                    onPress={() => {
                        signInWithPhoneNumber('+1 425-773-0854');
                    }} />
            </View>
        </TopNavigationLayout>
    );
};

const styles = StyleSheet.create({

});

export default PhoneNumberScreen;