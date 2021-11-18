import React from 'react';
import {
    View,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

import { height, width } from '../../util/scale';

import You from '../../assets/icons/custom/you.svg'
import Color from '../../styles/color';
import { useNavigation } from '@react-navigation/core';

const ProfileButton = (props) => {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback onPress={() => {
            if (!props.disabled) {
                navigation.navigate("ProfileScreen")
            }
        }}>
            <View style={[styles.container, props.style, props.highlight ? styles.highlight : null]}>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: width(36),
        width: width(50),
        height: height(50),
        backgroundColor: Color.LightGrey
    },
    highlight: {
        borderWidth: width(2),
        borderColor: Color.Primary
    }
});

export default ProfileButton;