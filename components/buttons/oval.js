import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

import { width, height } from '../../util/scale';
import Color from '../../styles/color';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Font from '../../styles/font';

const OvalButton = (props) => {
    return (
        <TouchableWithoutFeedback
            onPress={props.onPress}
            style={styles.container}>
            <Text style={styles.label}>
                {props.title}
            </Text>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        height: height(48),
        width: width(343),
        backgroundColor: Color.Primary,
        borderRadius: height(24),
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        color: Color.White,
        ...Font.B2
    }
});

export default OvalButton;