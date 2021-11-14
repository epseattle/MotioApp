import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

import Camera from '../../assets/icons/evericons/camera.svg';
import Color from '../../styles/color';
import Font from '../../styles/font';
import { width, height } from '../../util/scale';

const CameraButton = (props) => {
    return (
        <TouchableWithoutFeedback onPress={() => props.onPress()}>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.container}>
                    <Camera color={Color.White} width={width(26)} height={height(26)} />
                </View>
                <Text style={{ color: Color.Primary, ...Font.B4 }}>Submit</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

styles = StyleSheet.create({
    container: {
        width: width(60),
        height: height(60),
        backgroundColor: Color.Primary,
        borderRadius: width(30),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: height(5)
    }
});

export default CameraButton;