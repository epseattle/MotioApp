import React from 'react';

import {
    View,
    SafeAreaView,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    StyleSheet,
    Keyboard,
} from 'react-native';

import { height, width } from '../../util/scale';
import Color from '../../styles/color';
import Font from '../../styles/font';
import { useNavigation } from '@react-navigation/core';

const BottomTabNavigationLayout = (props) => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.White }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <KeyboardAvoidingView
                    behavior={'padding'}
                    style={styles.container}>
                    <View style={{ flex: 1 }}>
                        {props.children}
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: width(16)
    },
});

export default BottomTabNavigationLayout;