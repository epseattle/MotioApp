import React from "react";
import { useDispatch } from 'react-redux';
import { signIn } from '../../../redux/userSlice';

import {
    View,
    Text,
    Button,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

import TopNavigationLayout from "../../../components/layouts/TopNavigation";
import OvalButton from "../../../components/buttons/oval";
import Upload from '../../../assets/icons/evericons/file-upload.svg'
import { width, height } from "../../../util/scale";
import Color from "../../../styles/color";

const ProfilePictureScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    return (
        <TopNavigationLayout
            header={`Set a profile picture`}>
            <TouchableWithoutFeedback>
                <Upload width={width(150)} height={height(150)} color="black" />
            </TouchableWithoutFeedback>
            <View style={styles.footer}>
                <OvalButton
                    title='Complete'
                    onPress={() => {
                        console.log('complete')
                        dispatch(signIn());
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