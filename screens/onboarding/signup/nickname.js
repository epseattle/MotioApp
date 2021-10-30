import React from "react";
import { useDispatch } from 'react-redux';

import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

import TopNavigationLayout from "../../../components/layouts/TopNavigation";

const NicknameScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    return (
        <TopNavigationLayout>
            <Text>Hello, NicknameScreen</Text>
            <Button title='Next' onPress={() => { navigation.navigate('ProfilePictureScreen') }} />
        </TopNavigationLayout>
    );
};

const styles = StyleSheet.create({

});

export default NicknameScreen;