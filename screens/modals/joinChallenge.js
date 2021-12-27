import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    KeyboardAvoidingView
} from 'react-native';

import auth from '@react-native-firebase/auth';

import { useDispatch } from 'react-redux';
import { selectChallenge } from '../../redux/challengeSlice';

import { getChallengeWithCode } from '../../clients/challengeClient';

import Font from '../../styles/font';
import Color from '../../styles/color';
import { height, width } from '../../util/scale';

import ModalLayout from '../../components/layouts/Modal';
import TextInput from '../../components/inputs/text';
import OvalButton from '../../components/buttons/oval'

const FrequencyUnits = [
    'Day',
    'Week',
    'Month'
];

const JoinChallengeScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [challengeCode, setChallengeCode] = useState('');
    const openChallenge = () => {
    }

    return (
        <ModalLayout>
            <View style={{ flex: 1, backgroundColor: 'transparent' }}>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{
                    backgroundColor: Color.White,
                    paddingHorizontal: width(20),
                    paddingTop: height(20),
                    borderTopLeftRadius: width(10),
                    borderTopRightRadius: width(10),
                }}
            >
                <View style={[styles.inputSectionContainer, styles.headerSectionContainer]}>
                    <View>
                        <Text style={[Font.H2]}>Join Challenge</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={() => { navigation.goBack() }}>
                        <Text style={[Font.B2, { color: Color.Primary }]}>Cancel</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={[styles.inputSectionContainer]}>
                    <View style={[styles.inputSectionHeaderContainer]}>
                        <Text style={{ ...Font.B3 }}>Challenge Code</Text>
                        {/* <Text style={{ color: Color.LightGrey, ...Font.B5 }}>0/40 Characters</Text> */}
                    </View>
                    <TextInput setValue={setChallengeCode} />
                </View>
                <OvalButton
                    title='Join'
                    onPress={() => {
                        getChallengeWithCode(challengeCode)
                            .then((res) => {
                                console.log(res)
                                return res.json();
                            })
                            .then((json) => {
                                console.log(json);
                                dispatch(selectChallenge(json))
                                navigation.navigate('DetailsScreen', { challenge: json })
                            })
                    }} />
            </KeyboardAvoidingView>
        </ModalLayout>
    );
};

const styles = StyleSheet.create({
    headerSectionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    inputSectionContainer: {
        marginBottom: height(30)
    },
    inputSectionHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: height(8)
    },
    inputContainer: {
        flexDirection: 'row'
    },
    categoryIconContainer: {
        width: width(63),
        height: height(63),
        backgroundColor: Color.LightGrey,
        marginHorizontal: width(8),
        borderRadius: width(5),
        paddingHorizontal: width(10),
        paddingVertical: height(10)
    }
});

export default JoinChallengeScreen;