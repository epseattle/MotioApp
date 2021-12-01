import React from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

import CheckMark from '../../assets/icons/evericons/check-mark.svg';
import Color from '../../styles/color';
import Font from '../../styles/font';
import { width, height } from '../../util/scale';

const color = Color.Secondary;

const ApprovedButton = (props) => {
    return (
        <TouchableWithoutFeedback onPress={() => props.onPress()}>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.container}>
                    <CheckMark color={Color.White} width={width(26)} height={height(26)} />
                </View>
                <Text style={{ color: color, ...Font.B3 }}>Done</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

styles = StyleSheet.create({
    container: {
        width: width(60),
        height: height(60),
        backgroundColor: color,
        borderRadius: width(30),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: height(5)
    }
});

export default ApprovedButton;