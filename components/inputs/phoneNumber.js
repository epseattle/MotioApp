import React from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';

import { width, height } from '../../util/scale';

const PhoneNumberInput = (props) => {
    return (
        <View style={styles.container}>
            <TextInput />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {}
});

export default PhoneNumberInput;