import React from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

import MoreHorizontal from '../../assets/icons/evericons/more-horizontal.svg';
import Color from '../../styles/color';
import Font from '../../styles/font';
import { width, height } from '../../util/scale';

const color = Color.LightGrey;

const PendingButton = (props) => {
    return (
        <TouchableWithoutFeedback onPress={() => props.onPress()}>
            <View style={{ alignItems: 'center' }}>
                <View style={{
                    backgroundColor: color,
                    width: width(60),
                    height: height(60),
                    borderRadius: width(30),
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: height(5)
                }}>
                    <MoreHorizontal color={Color.White} width={width(26)} height={height(26)} />
                </View>
                <Text style={{ color: color, ...Font.B4 }}>Pending</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

styles = StyleSheet.create({
    container: {
        backgroundColor: color,
        width: width(60),
        height: height(60),
        borderRadius: width(30),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: height(5)
    }
});

export default PendingButton;