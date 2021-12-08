import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/userSlice';

import auth from '@react-native-firebase/auth';

import TopNavigationLayout from '../../components/layouts/TopNavigation';
import { height, width } from '../../util/scale';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const ProfileScreen = ({ route }) => {
    const dispatch = useDispatch();
    const user = auth().currentUser;

    return (
        <TopNavigationLayout>
            <Text>
                {user.displayName}
            </Text>
            <Text>
                {user.uid}
            </Text>
            <Text>
                {user.photoURL}
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