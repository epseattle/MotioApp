import React from 'react';

import {
    View,
    SafeAreaView,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    StyleSheet
} from 'react-native';

import { height, width } from '../../util/scale';
import Color from '../../styles/color';
import Font from '../../styles/font';
import { useNavigation } from '@react-navigation/core';

const BottomTabNavigationLayout = (props) => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.White }}>
            <TouchableWithoutFeedback>
                <KeyboardAvoidingView
                    behavior={'padding'}
                    style={styles.container}>
                    {props.children}
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: width(20)
    },
});

export default BottomTabNavigationLayout;