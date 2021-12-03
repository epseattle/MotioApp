import React from 'react';

import {
    View,
    KeyboardAvoidingView,
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';

import Color from '../../styles/color'
import { height, width } from '../../util/scale';

const ModalLayout = (props) => {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View>
                    {props.children}
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: width(20),
        paddingTop: height(20),
        backgroundColor: Color.White
    }
});

export default ModalLayout;