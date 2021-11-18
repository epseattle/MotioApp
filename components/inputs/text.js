import React from 'react';
import {
    View,
    Text,
    TextInput as RNTextInput,
    StyleSheet,
} from 'react-native';

import { width, height } from '../../util/scale';
import Color from '../../styles/color';

const TextInput = (props) => {
    return (
        <View>
            <RNTextInput
                multiline={props.multiline}
                style={[styles.container, props.style]}
            />
            {
                props.helper && props.enableHelper
                    ?
                    <View style={styles.helperLabelContainer}>
                        <Text style={styles.helperText}>Helper Text</Text>
                    </View>
                    :
                    null
            }
            {
                props.warning && props.enableWarning
                    ?
                    <View style={styles.helperLabelContainer}>
                        <Text style={styles.helperTextWarning}>Helper Text</Text>
                    </View>
                    :
                    null
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: Color.LightGrey,
        borderWidth: width(1),
        height: height(40),
        paddingHorizontal: width(16),
        borderRadius: height(3),
    },
    input: {
        flex: 1,
        height: height(48),
        fontSize: height(16)
    },
    helperLabelContainer: {
        marginTop: height(4)
    },
    helperText: {
        color: Color.LightGrey,
        fontSize: height(12)
    },
    helperTextWarning: {
        color: Color.Primary,
        fontSize: height(12)
    }
});

export default TextInput;