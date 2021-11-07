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
import OvalButton from "../../../components/buttons/oval";
import Color from "../../../styles/color";
import Font from "../../../styles/font";
import { height } from "../../../util/scale";
import VerificationCodeInput from "../../../components/inputs/verificationCode";

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
        <TopNavigationLayout
            header={`Verify your number`}>
            <View>
                <Text style={{ color: Color.LightGrey, ...Font.B3 }}>
                    Enter the one-time six-digit verification code.
                </Text>
                <Text style={{ color: Color.LightGrey, ...Font.B3 }}>
                    We sent the code to the number provided.
                </Text>
            </View>
            <View>
                <View style={styles.input}>
                    <VerificationCodeInput />
                </View>
                <View>
                    <OvalButton
                        title='Resend Verification Code'
                        onPress={() => {
                            confirmCode();
                        }} />
                </View>
            </View>
            <View style={styles.footer}>
                <OvalButton
                    title='Verify'
                    onPress={() => {
                        // confirmCode();
                        navigation.navigate('NicknameScreen');
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

export default PhoneNumberVerifyScreen;