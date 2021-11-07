import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import TextInput from './text';

const VerificationCodeInput = (props) => {
    return (
        <View style={styles.container}>
            <TextInput />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    }
});

export default VerificationCodeInput;