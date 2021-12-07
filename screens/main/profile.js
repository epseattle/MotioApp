import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/userSlice';

import auth from '@react-native-firebase/auth';

import TopNavigationLayout from '../../components/layouts/TopNavigation';
import ProfileIcon from '../../assets/icons/profile/profileIcon';
import ProfileButton from '../../components/buttons/profile';
import { height, width } from '../../util/scale';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

const ProfileScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const user = auth().currentUser;

    return (
        <TopNavigationLayout>
            <Text>
                {user.displayName}
            </Text>
            <TouchableWithoutFeedback
                onPress={() => {
                    auth()
                        .signOut()
                        .then(() => {
                            dispatch(signOut())
                            alert('user has been signed out.')
                        });
                }}>
                <Text>
                    Sign out
                </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {
            }}>
                <Text>
                    Change Profile Image
                </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <Text>
                    Set Email
                </Text>
            </TouchableWithoutFeedback>
        </TopNavigationLayout>
    );
}

const styles = StyleSheet.create({
    profile: {
        justifyContent: 'center',
        width: width(75),
        height: height(75),
        backgroundColor: 'black',
        margin: 2,
        padding: 8
    }
});

export default ProfileScreen;