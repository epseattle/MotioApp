import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { signIn } from '../../../redux/userSlice';
import auth from '@react-native-firebase/auth';

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
    const [selected, setSelected] = useState('');
    console.log(auth().curentUser);

    return (
        <TopNavigationLayout
            header={`Set a profile picture`}>
            <View>
                <Text style={{ color: Color.LightGrey, ...Font.B3 }}>
                    You can choose among our default characters or choose your own profile picture.
                </Text>
            </View>
            {
                ['blue', 'pink'].map((item) => {
                    return (
                        <View style={styles.input}>
                            {[1, 2, 3, 4].map((index) => {
                                return (
                                    <TouchableWithoutFeedback onPress={() => {
                                        console.log(selected);
                                        if (selected == item + index) {
                                            setSelected('');
                                        }
                                        else {
                                            setSelected(item + index);
                                        }
                                    }}>
                                        <View
                                            style={[{
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                borderRadius: width(36),
                                                width: width(50),
                                                height: height(50)
                                            }, selected == item + index ? styles.selected : null]}>
                                            <ProfileIcon profile={item + index} />
                                        </View>
                                    </TouchableWithoutFeedback>
                                );
                            })}
                        </View>
                    );
                })
            }
            <View style={{ flexDirection: 'row', marginTop: height(36), justifyContent: 'center' }}>
                <Text style={{ color: Color.LightGrey, ...Font.B3 }}>
                    or ...
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ color: Color.LightGrey, ...Font.B3 }}>
                    Upload your own profile picture!
                </Text>
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
        marginTop: height(32),
        marginVertical: height(0),
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        marginVertical: height(16)
    },
    selected: {
        borderColor: Color.Primary,
        borderWidth: width(3)
    }
});

export default ProfilePictureScreen;