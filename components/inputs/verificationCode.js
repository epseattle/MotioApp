import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import TextInput from './text';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell
} from 'react-native-confirmation-code-field';
import Color from '../../styles/color';

const CELL_COUNT = 6;

const VerificationCodeInput = (props) => {
    const [value, setValue] = useState('');
    const updateValue = (code) => {
        setValue(code);
        props.setCode(code);
    }

    return (
        <View style={styles.container}>
            <CodeField
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={value}
                onChangeText={updateValue}
                cellCount={6}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}>
                        {symbol}
                    </Text>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: Color.LightGrey,
        textAlign: 'center',
    },
    focusCell: {
        borderColor: Color.LightBlack,
        borderWidth: 1,
    },
});

export default VerificationCodeInput;