import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Color from '../../styles/color';
import Font from "../../styles/font";
import { width, height } from "../../util/scale";

const RectangleButton = (props) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                props.onPress();
            }}>
            <View style={[styles.container, props.negative ? styles.negative : null, props.containerStyle]}>
                <Text style={[Font.B3, styles.label, props.negative ? styles.negative : null, props.labelStyle]}>{props.label}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: Color.Primary,
        borderWidth: 1,
        height: height(42),
        backgroundColor: Color.Primary,
        borderRadius: width(8),
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        color: Color.White
    },
    negative: {
        color: Color.Primary,
        backgroundColor: Color.White
    }
});

export default RectangleButton;