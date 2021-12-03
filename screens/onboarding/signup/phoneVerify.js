import React, { useState, useEffect } from "react";
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
    const [seconds, setSeconds] = useState(30);
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                setExpired(true);
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    const dispatch = useDispatch();
    const [code, setCode] = useState('');
    const [expired, setExpired] = useState(false);
    const { confirmation } = route.params;

    async function confirmCode() {
        try {
            await confirmation
                .confirm(code)
                .then((userCredentials) => {
                    navigation.navigate('NicknameScreen', { userCredentials: userCredentials });
                })
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
                {
                    expired
                        ?
                        <View>
                            <OvalButton
                                title='Resend Verification Code'
                                onPress={() => {
                                    setSeconds(30);
                                    setExpired(false);
                                }}
                                containerStyle={styles.resendButton}
                                textStyle={styles.resendButtonText} />
                        </View>
                        :
                        <View>
                            <OvalButton
                                title={`Your code expires in (0:${seconds})`}
                                disabled
                                containerStyle={styles.countDownButton}
                                textStyle={styles.countDownText} />
                        </View>
                }
            </View>
            <View style={styles.footer}>
                <OvalButton
                    title='Verify'
                    disabled={code.length < 6}
                    onPress={() => {
                        confirmCode();
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