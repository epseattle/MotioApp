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

const ProfilePictureScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    return (
        <TopNavigationLayout>
            <Text>Hello, ProfilePictureScreen</Text>
            <Button title='Sign Up' onPress={() => {
                dispatch(signIn());
            }} />
        </TopNavigationLayout>
    );
};

const styles = StyleSheet.create({

});

export default ProfilePictureScreen;