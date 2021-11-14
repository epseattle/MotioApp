import { useNavigation } from "@react-navigation/core";
import React from "react";
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

const CreateChallengeScreen = () => {
    const navigation = useNavigation();
    const createChallenge = () => {
        navigation.goBack();
    };
    return (
        <ModalLayout>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginVertical: height(30) }}>
                <View>
                    <Text style={{ ...Font.H2 }}>Start New Challenge</Text>
                </View>
                <TouchableWithoutFeedback onPress={() => { navigation.goBack() }}>
                    <Text style={{ color: Color.Primary, ...Font.B2 }}>Cancel</Text>
                </TouchableWithoutFeedback>
            </View>
            <View style={{ marginBottom: height(30) }}>
                <Text style={{ ...Font.B3 }}>Challenge Name</Text>
                <Text style={{ color: Color.LightGrey, ...Font.B5 }}>0/40 Characters</Text>
                <TextInput />
            </View>
            <View style={{ marginBottom: height(30) }}>
                <Text style={{ ...Font.B3 }}>What kind of goal is it?</Text>
                <TextInput style={{ width: width(263) }} />
            </View>
            <View style={{ marginBottom: height(30) }}>
                <Text style={{ ...Font.B3 }}>How often are we going to do it?</Text>
                <TextInput style={{ width: width(60) }} />
                <Text style={{ color: Color.LightGrey, ...Font.B3 }}>times</Text>
                <TextInput style={{ width: width(116) }} />
                <Text style={{ color: Color.LightGrey, ...Font.B3 }}>per</Text>
            </View>
            <View style={{ marginBottom: height(30) }}>
                <Text style={{ ...Font.B3 }}>When are we starting it?</Text>
                <Text style={{ color: Color.LightGrey, ...Font.B5 }}>The challenge will automatically end after 4 weeks</Text>
                <TextInput style={{ width: width(263) }} />
            </View>
            <View style={{ marginBottom: height(30) }}>
                <Text style={{ ...Font.B3 }}>How many people can join you?</Text>
                <Text style={{ color: Color.LightGrey, ...Font.B5 }}>Max 10 people</Text>
                <TextInput style={{ width: width(60) }} />
                <Text style={{ color: Color.LightGrey, ...Font.B3 }}>People</Text>
            </View>
        </ModalLayout>
    );
};

const styles = StyleSheet.create({

});

export default CreateChallengeScreen;