import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';

import { width, height } from '../../util/scale';
import Color from '../../styles/color';
import Font from '../../styles/font';

const OvalButton = (props) => {
    return (
        <TouchableWithoutFeedback
            onPress={props.disabled ? null : props.onPress}>
            <View
                style={[
                    styles.containerSize,
                    props.title ? styles.textLabel : null,
                    props.negative ? styles.negativeContainer : styles.container,
                    props.disabled ? styles.disabledContainer : null,
                    props.containerStyle]}>
                {
                    props.icon
                        ?
                        <View style={{ marginRight: width(16) }}>
                            {
                                props.icon
                            }
                        </View>
                        :
                        null
                }
                <Text style={[props.negative ? styles.negativeLabel : styles.label, props.textStyle]}>
                    {props.title}
                </Text>
                <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    {props.children}
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    containerSize: {
        flexDirection: 'row',
        height: height(48),
        width: width(343),
        borderRadius: height(24),
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    textLabel: {
        justifyContent: 'center'
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
        ...Font.B4
    },
    negativeLabel: {
        color: Color.Primary,
        ...Font.B4
    }
});

export default OvalButton;