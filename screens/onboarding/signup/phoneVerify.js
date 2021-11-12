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
import { height, width } from "../../../util/scale";
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
                    <VerificationCodeInput
                        setCode={(code) => {
                            setCode(code);
                        }}
                    />
                </View>
                <View>
                    <OvalButton
                        title={`Your code expires in (${'0:00'})`}
                        onPress={() => {
                        }}
                        containerStyle={styles.countDownButton}
                        textStyle={styles.countDownText} />
                </View>
                <View>
                    <OvalButton
                        title='Resend Verification Code'
                        onPress={() => {
                        }}
                        containerStyle={styles.resendButton}
                        textStyle={styles.resendButtonText} />
                </View>
            </View>
            <View style={styles.footer}>
                <OvalButton
                    title='Verify'
                    onPress={() => {
                        alert(code);
                        // confirmCode();
                        navigation.navigate('NicknameScreen');
                    }} />
            </View>
        </TopNavigationLayout>
    );
};

const styles = StyleSheet.create({
    input: {
        marginVertical: height(16),
        marginBottom: height(40)
    },
    countDownButton: {
        width: width(221)
    },
    countDownText: {
        ...Font.B3
    },
    resendButton: {
        width: width(206)
    },
    resendButtonText: {
        ...Font.B3
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        marginVertical: height(16)
    }
});

export default PhoneNumberVerifyScreen;