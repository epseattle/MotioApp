import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    SafeAreaView,
    KeyboardAvoidingView
} from 'react-native';

import auth from '@react-native-firebase/auth';

import { useDispatch } from 'react-redux';
import { createChallenge as createChallengeAction } from '../../redux/challengeSlice';

import { createChallenge as createChallengeRequest } from '../../clients/challengeClient';

import Font from '../../styles/font';
import Color from '../../styles/color';
import { height, width } from '../../util/scale';

import Categories from '../../constants/categories';

import CategoriesIcon from '../../assets/icons/categories/categoriesIcon';

import ModalLayout from '../../components/layouts/Modal';
import TextInput from '../../components/inputs/text';
import OvalButton from '../../components/buttons/oval'
import DatePicker from '../../components/inputs/datePicker';
import Picker from '../../components/inputs/picker';

const FrequencyUnits = [
    'Day',
    'Week',
    'Month'
];

const CreateChallengeScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const [creating, setCreating] = useState(false);

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState(Categories[0]);
    const [rule, setRule] = useState('');
    const [frequency, setFrequency] = useState(1);
    const [frequencyUnit, setFrequencyUnit] = useState(FrequencyUnits[0]);
    const [startDate, setStartDate] = useState(tomorrow);
    const [memberCount, setMemberCount] = useState(1);

    const createChallenge = () => {
        setCreating(true);

        var challenge = {
            'title': title,
            'category': category,
            'ownerId': auth().currentUser.uid,
            'rules': [
                rule
            ],
            'schedule': {
                'frequency': {
                    'count': frequency,
                    'unit': frequencyUnit,
                },
                'startDate': startDate,
                'durationInDays': 28
            },
            'maxMemberCount': memberCount + 1 // including the owner
        };

        createChallengeRequest(challenge)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                dispatch(createChallengeAction(json))
            })
            .then(() => {
                navigation.goBack();
                setCreating(false);
            });
    };

    return (
        <ModalLayout>
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
                        <Text style={[Font.H2]}>Start New Challenge</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={() => { navigation.goBack() }}>
                        <Text style={[Font.B2, { color: Color.Primary }]}>Cancel</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={[styles.inputSectionContainer]}>
                    <View style={[styles.inputSectionHeaderContainer]}>
                        <Text style={{ ...Font.B3 }}>Challenge Name</Text>
                        <Text style={{ color: Color.LightGrey, ...Font.B5 }}>{title.length}/40 Characters</Text>
                    </View>
                    <TextInput setValue={setTitle} />
                </View>
                <View style={[styles.inputSectionContainer, {
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                }]}>
                    <View style={{
                        width: width(263)
                    }}>
                        <View style={[styles.inputSectionHeaderContainer]}>
                            <Text style={[Font.B3]}>What kind of goal is it?</Text>
                        </View>
                        <Picker data={Categories} onValueChange={setCategory} />
                    </View>
                    <View style={[styles.categoryIconContainer]}>
                        <CategoriesIcon category={category} />
                    </View>
                </View>
                <View style={[styles.inputSectionContainer]}>
                    <View style={[styles.inputSectionHeaderContainer]}>
                        <Text style={{ ...Font.B3 }}>Set the rule</Text>
                        <Text style={{ color: Color.LightGrey, ...Font.B5 }}>{rule.length}/100 Characters</Text>
                    </View>
                    <TextInput multiline={false} setValue={setRule} style={{}} />
                </View>
                <View style={[styles.inputSectionContainer]}>
                    <View style={[styles.inputSectionHeaderContainer]}>
                        <Text style={{ ...Font.B3 }}>How often are we going to do it?</Text>
                    </View>
                    <View style={[styles.inputContainer]}>
                        <Picker
                            data={['1', '2', '3', '4', '5', '6', '7', '8', '9']}
                            onValueChange={setFrequency} />
                        <View style={{ justifyContent: 'flex-end' }}>
                            <Text style={{ marginHorizontal: width(8), color: Color.LightGrey, ...Font.B3 }}> times per </Text>
                        </View>
                        <Picker
                            data={FrequencyUnits}
                            onValueChange={setFrequencyUnit} />
                    </View>
                </View>
                <View style={[styles.inputSectionContainer]}>
                    <Text style={{ ...Font.B3 }}>When should we start?</Text>
                    <View style={[styles.inputSectionHeaderContainer]}>
                        <Text style={{ color: Color.LightGrey, ...Font.B5 }}>The challenge will automatically end after 4 weeks</Text>
                    </View>
                    <DatePicker setDate={setStartDate} />
                </View>
                <View style={[styles.inputSectionContainer]}>
                    <View style={[styles.inputSectionHeaderContainer]}>
                        <Text style={{ ...Font.B3 }}>How many people can join you?</Text>
                        {/* <View style={[styles.inputSectionHeaderContainer]}>
                            <Text style={{ color: Color.LightGrey, ...Font.B5 }}>*max 10 members</Text>
                        </View> */}
                    </View>
                    <View style={[styles.inputContainer]}>
                        <Picker
                            data={['1', '2', '3', '4', '5', '6', '7', '8', '9']}
                            onValueChange={setMemberCount}
                        />
                        <View style={{
                            justifyContent: 'flex-end'
                        }}>
                            <Text style={{ marginHorizontal: width(8), color: Color.LightGrey, ...Font.B3 }}> people</Text>
                        </View>
                    </View>
                </View>
                <OvalButton
                    title='Create'
                    disabled={creating}
                    onPress={() => {
                        createChallenge();
                    }} />
            </KeyboardAvoidingView>
        </ModalLayout>
    );
};

const styles = StyleSheet.create({
    headerSectionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    },
    inputSectionContainer: {
        marginBottom: height(24)
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
        backgroundColor: Color.Concrete,
        marginLeft: width(8),
        borderRadius: width(5)
    }
});

export default CreateChallengeScreen;