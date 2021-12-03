import React from 'react';

import {
    View,
    KeyboardAvoidingView,
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback,
    SafeAreaView
} from 'react-native';

import Color from '../../styles/color'
import { height, width } from '../../util/scale';

const ModalLayout = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                        <View style={{
                            flex: 1
                        }}>
                            {props.children}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </SafeAreaView>
            <SafeAreaView style={{ backgroundColor: 'white' }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: width(20),
        // paddingTop: height(20),
        backgroundColor: 'rgba(52, 52, 52, 0.0)'
    }
});

export default ModalLayout;