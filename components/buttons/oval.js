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
            onPress={props.disabled ? null : props.onPress}
            style={[styles.containerSize, props.negative ? styles.negativeContainer : styles.container, props.disabled ? styles.disabledContainer : null, props.containerStyle]}>
            <Text style={[props.negative ? styles.negativeLabel : styles.label, props.textStyle]}>
                {props.title}
            </Text>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    containerSize: {
        height: height(48),
        width: width(343),
        borderRadius: height(24),
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        backgroundColor: Color.Primary,
    },
    negativeContainer: {
        backgroundColor: Color.White,
        borderColor: Color.Primary,
        borderWidth: width(2),
    },
    disabledContainer: {
        backgroundColor: Color.LightGrey,
    },
    label: {
        color: Color.White,
        ...Font.B2
    },
    negativeLabel: {
        color: Color.Primary,
        ...Font.B2
    }
});

export default OvalButton;