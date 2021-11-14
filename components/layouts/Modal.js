import React from 'react';

import {
    View,
    KeyboardAvoidingView,
    StyleSheet,
    Keyboard
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import Color from '../../styles/color'
import { height, width } from '../../util/scale';

const ModalLayout = (props) => {
    return (
        <View style={ styles.container }>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: width(20),
        paddingTop: height(20),
        height: '100%',
        backgroundColor: Color.White
    }
});

export default ModalLayout;