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
import DatePicker from "../../components/inputs/datePicker";
import Picker from '../../components/inputs/picker';
import Categories from "../../constants/categories";
import CategoriesIcon from '../../assets/icons/categories/categoriesIcon';

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
                <TextInput setValue={setTitle} />
            </View>
            <View style={{
                marginBottom: height(30),
                flexDirection: 'row',
                alignItems: 'flex-end'
            }}>
                <View style={{
                    width: width(263)
                }}>
                    <View style={[styles.header]}>
                        <Text style={{ ...Font.B3 }}>What kind of goal is it?</Text>
                    </View>
                    <Picker data={Categories} />
                </View>
                <View style={{
                    width: width(63),
                    height: height(63),
                    backgroundColor: Color.LightGrey,
                    marginHorizontal: width(8),
                    borderRadius: width(5),
                    paddingHorizontal: width(10),
                    paddingVertical: height(10)
                }}>
                    <CategoriesIcon category='health'/>
                </View>
            </View>
            <View style={{ marginBottom: height(30) }}>
                <View style={[styles.header]}>
                    <Text style={{ ...Font.B3 }}>Set the rule</Text>
                </View>
                <TextInput multiline={false} setVelu={setRule} style={{}} />
            </View>
            <View style={{ marginBottom: height(30) }}>
                <View style={[styles.header]}>
                    <Text style={{ ...Font.B3 }}>How often are we going to do it?</Text>
                </View>
                <View style={[styles.inputContainer]}>
                    <Picker data={['1', '2', '3', '4', '5', '6', '7', '8', '9']} />
                    <View style={{ justifyContent: 'flex-end' }}>
                        <Text style={{ marginHorizontal: width(8), color: Color.LightGrey, ...Font.B3 }}> times per </Text>
                    </View>
                    <Picker data={[
                        'Day',
                        'Week',
                        'Month'
                    ]} />
                </View>
            </View>
            <View style={{ marginBottom: height(30) }}>
                <Text style={{ ...Font.B3 }}>When are we starting it?</Text>
                <View style={[styles.header]}>
                    <Text style={{ color: Color.LightGrey, ...Font.B5 }}>The challenge will automatically end after 4 weeks</Text>
                </View>
                <DatePicker />
            </View>
            <View style={{ marginBottom: height(30) }}>
                <View style={[styles.header]}>
                    <Text style={{ ...Font.B3 }}>How many people can join you?</Text>
                    <Text style={{ color: Color.LightGrey, ...Font.B5 }}>*max 10 people</Text>
                </View>
                <View style={[styles.inputContainer]}>
                    <Picker data={['1', '2', '3', '4', '5', '6', '7', '8', '9']} />
                    <View style={{
                        justifyContent: 'flex-end'
                    }}>
                        <Text style={{ marginHorizontal: width(8), color: Color.LightGrey, ...Font.B3 }}> people</Text>
                    </View>
                </View>
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
        flexDirection: 'row'
    }
});

export default CreateChallengeScreen;