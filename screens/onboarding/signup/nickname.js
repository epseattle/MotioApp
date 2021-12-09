import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

import auth from '@react-native-firebase/auth';

import TopNavigationLayout from "../../../components/layouts/TopNavigation";
import TextInput from "../../../components/inputs/text";
import OvalButton from "../../../components/buttons/oval";
import { height } from "../../../util/scale";
import Color from "../../../styles/color";
import Font from '../../../styles/font'

const NicknameScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const [valid, setValid] = useState(true);
    const [nickName, setNickName] = useState('');
    const user = auth().currentUser;

    if (user.displayName != null) {
        navigation.navigate('ProfilePictureScreen')
    }

    return (
        <TopNavigationLayout
            header={`Create a nickname`}>
            <View>
                <Text style={{ color: Color.LightGrey, ...Font.B3 }}>
                    Your nickname will be your user name and will be displayed to other users.
                </Text>
            </View>
            <View style={styles.input}>
                <TextInput setValue={setNickName} />
            </View>
            <View style={styles.footer}>
                <OvalButton
                    title='Next'
                    disabled={!valid}
                    onPress={() => {
                        user.updateProfile({
                            displayName: nickName
                        })
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