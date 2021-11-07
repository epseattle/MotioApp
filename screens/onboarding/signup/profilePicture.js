import React from "react";
import { useDispatch } from 'react-redux';
import { signIn } from '../../../redux/userSlice';

import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

import TopNavigationLayout from "../../../components/layouts/TopNavigation";
import { height } from "../../../util/scale";
import OvalButton from "../../../components/buttons/oval";

const ProfilePictureScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    return (
        <TopNavigationLayout
            header={`Set a profile picture`}>
            <View style={styles.footer}>
                <OvalButton
                    title='Next'
                    onPress={() => {
                        // dispatch(signIn());
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

export default ProfilePictureScreen;