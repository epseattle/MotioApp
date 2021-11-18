import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback
} from 'react-native';
import ModalLayout from "../../components/layouts/Modal";
import TextInput from '../../components/inputs/text';
import Font from '../../styles/font';
import Color from '../../styles/color';
import { height, width } from "../../util/scale";
import { SafeAreaView } from "react-native-safe-area-context";
import OvalButton from '../../components/buttons/oval'

const CreateChallengeScreen = () => {
    const navigation = useNavigation();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [frequency, setFrequency] = useState('');
    const [schedule, setSchedule] = useState('');
    const [rule, setRule] = useState('');

    const createChallenge = () => {
        navigation.goBack();
    };
    return (
        <ModalLayout>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: height(30) }}>
                <View>
                    <Text style={{ ...Font.H2 }}>Start New Challenge</Text>
                </View>
                <TouchableWithoutFeedback onPress={() => { navigation.goBack() }}>
                    <Text style={{ color: Color.Primary, ...Font.B2 }}>Cancel</Text>
                </TouchableWithoutFeedback>
            </View>
            <View style={{ marginBottom: height(30) }}>
                <View style={[styles.header]}>
                    <Text style={{ ...Font.B3 }}>Challenge Name</Text>
                    <Text style={{ color: Color.LightGrey, ...Font.B5 }}>0/40 Characters</Text>
                </View>
                <TextInput />
            </View>
            <View style={{ marginBottom: height(30) }}>
                <View style={[styles.header]}>
                    <Text style={{ ...Font.B3 }}>What kind of goal is it?</Text>
                </View>
                <TextInput style={{ width: width(263) }} />
            </View>
            <View style={{ marginBottom: height(30) }}>
                <View style={[styles.header]}>
                    <Text style={{ ...Font.B3 }}>Set the rule</Text>
                </View>
                <TextInput style={{}} />
            </View>
            <View style={{ marginBottom: height(30) }}>
                <View style={[styles.header]}>
                    <Text style={{ ...Font.B3 }}>How often are we going to do it?</Text>
                </View>
                <View style={[styles.inputContainer]}>
                    {/* <TextInput style={{ width: width(60) }} /> */}
                    {/* <Text style={{ color: Color.LightGrey, ...Font.B3 }}>times per</Text> */}
                    {/* <TextInput style={{ width: width(116) }} /> */}
                </View>
            </View>
            <View style={{ marginBottom: height(30) }}>
                <Text style={{ ...Font.B3 }}>When are we starting it?</Text>
                <View style={[styles.header]}>
                    <Text style={{ color: Color.LightGrey, ...Font.B5 }}>The challenge will automatically end after 4 weeks</Text>
                </View>
                <TextInput style={{ width: width(263) }} />
            </View>
            <View style={{
            }}>
                <OvalButton title='Create' />
            </View>
        </ModalLayout>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: height(8)
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'baseline'
    }
});

export default CreateChallengeScreen;