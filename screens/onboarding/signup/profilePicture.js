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
import Font from "../../../styles/font";
import ProfileButton from "../../../components/buttons/profile";
import ProfileIcon from "../../../assets/icons/profile/profileIcon";

const ProfilePictureScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    return (
        <TopNavigationLayout
            header={`Set a profile picture`}>
            <View>
                <Text style={{ color: Color.LightGrey, ...Font.B3 }}>
                    You can choose among our default characters or choose your own profile picture.
                </Text>
            </View>
            <View style={styles.input}>
                <TouchableWithoutFeedback>
                    <View
                        style={{
                            alignItems: 'center',
                            textAlign: 'center',
                            borderRadius: width(36),
                            width: width(50),
                            height: height(50)
                        }}>
                        <ProfileIcon profile='blue1' />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View
                        style={{
                            alignItems: 'center',
                            textAlign: 'center',
                            borderRadius: width(36),
                            width: width(50),
                            height: height(50)
                        }}>
                        <ProfileIcon profile='blue2' />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View
                        style={{
                            alignItems: 'center',
                            textAlign: 'center',
                            borderRadius: width(36),
                            width: width(50),
                            height: height(50)
                        }}>
                        <ProfileIcon profile='blue3' />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View
                        style={{
                            alignItems: 'center',
                            textAlign: 'center',
                            borderRadius: width(36),
                            width: width(50),
                            height: height(50)
                        }}>
                        <ProfileIcon profile='pink1' />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View
                        style={{
                            alignItems: 'center',
                            textAlign: 'center',
                            borderRadius: width(36),
                            width: width(50),
                            height: height(50)
                        }}>
                        <ProfileIcon profile='pink2' />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View
                        style={{
                            alignItems: 'center',
                            textAlign: 'center',
                            borderRadius: width(36),
                            width: width(50),
                            height: height(50)
                        }}>
                        <ProfileIcon profile='pink3' />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View
                        style={{
                            alignItems: 'center',
                            textAlign: 'center',
                            borderRadius: width(36),
                            width: width(50),
                            height: height(50)
                        }}>
                        <ProfileIcon profile='pink4' />
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={{ ...styles.input, justifyContent: 'center' }}>
                <TouchableWithoutFeedback>
                    <Upload width={width(50)} height={height(50)} color="black" />
                </TouchableWithoutFeedback>
            </View>
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
        marginVertical: height(16),
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        marginVertical: height(16)
    }
});

export default ProfilePictureScreen;