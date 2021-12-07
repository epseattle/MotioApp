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

const color = Color.Primary;

const CameraButton = (props) => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={() => {
            navigation.navigate('SubmissionScreen');
        }}>
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
                    <Camera color={Color.White} width={width(26)} height={height(26)} />
                </View>
                <Text style={{ color: color, ...Font.B3 }}>Submit</Text>
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

export default CameraButton;