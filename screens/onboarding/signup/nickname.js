import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

import TopNavigationLayout from "../../../components/layouts/TopNavigation";
import TextInput from "../../../components/inputs/text";
import OvalButton from "../../../components/buttons/oval";
import { height } from "../../../util/scale";
import Color from "../../../styles/color";
import Font from '../../../styles/font'

const NicknameScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [valid, setValid] = useState(true);
    return (
        <TopNavigationLayout
            header={`Create a nickname`}>
            <View>
                <Text style={{ color: Color.LightGrey, ...Font.B3 }}>
                    Your nickname will be your user name and will be displayed to other users.
                </Text>
            </View>
            <View style={styles.input}>
                <TextInput />
            </View>
            <View style={styles.footer}>
                <OvalButton
                    title='Next'
                    disabled={!valid}
                    onPress={() => {
                        // confirmCode();
                        navigation.navigate('ProfilePictureScreen')
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

export default NicknameScreen;