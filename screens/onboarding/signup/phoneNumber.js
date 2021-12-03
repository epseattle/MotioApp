import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import auth from '@react-native-firebase/auth';

import {
    View,
    Text,
    StyleSheet,
    Alert
} from 'react-native';

import TopNavigationLayout from "../../../components/layouts/TopNavigation";
import TextInput from '../../../components/inputs/text';
import PhoneNumberInput from "../../../components/inputs/phoneNumber";
import OvalButton from '../../../components/buttons/oval';
import Color from "../../../styles/color";
import Font from "../../../styles/font";
import { height } from "../../../util/scale";

const PhoneNumberScreen = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(false);

    async function signInWithPhoneNumber() {
        await auth()
            .signInWithPhoneNumber(phoneNumber)
            .then((confirmation) => {
                navigation.navigate('PhoneNumberVerifyScreen', { confirmation: confirmation, phoneNumber: phoneNumber });
            });
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
            <View style={styles.input}>
                <PhoneNumberInput
                    setPhoneNumber={(phoneNumber) => {
                        setPhoneNumber(phoneNumber);
                    }}
                    setValid={(valid) => {
                        setValid(valid);
                    }}
                />
            </View>
            <View style={styles.footer}>
                <OvalButton
                    disabled={!valid}
                    title='Send'
                    onPress={() => {
                        if (valid) {
                            signInWithPhoneNumber();
                        }
                    }} />
            </View>
        </TopNavigationLayout>
    );
};

const styles = StyleSheet.create({
    input: {
        marginVertical: height(16)
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        marginVertical: height(16)
    }
});

export default PhoneNumberScreen;