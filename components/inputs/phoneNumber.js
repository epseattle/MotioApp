import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import TextInput from './text';
import PhoneInput, { getCallingCode, isValidNumber } from "react-native-phone-number-input";
import Color from '../../styles/color';
import { width, height } from '../../util/scale';

const PhoneNumberInput = (props) => {
    const [number, setNumber] = useState("");
    const [valid, setValid] = useState("");

    return (
        <View>
            <PhoneInput
                defaultValue=""
                defaultCode="US"
                layout="second"
                disableArrowIcon={true}
                containerStyle={styles.container}
                textContainerStyle={{
                    backgroundColor: Color.White,
                    alignItems: 'center'
                }}
                textInputProps={{ maxLength: 10 }}
                textInputStyle={{
                    color: Color.LightGrey,
                    height: height(40),
                    alignItems: 'center'
                }}
                codeTextStyle={{ color: Color.LightGrey }}
                countryPickerButtonStyle={{
                    width: 0
                }}
                onChangeText={(text) => {
                    setNumber(text);
                }}
                onChangeFormattedText={(text) => {
                    if (isValidNumber(text)) {
                        props.setPhoneNumber(text);
                        props.setValid(true);
                        setValid(true);
                    } else {
                        props.setValid(false);
                        setValid(false);
                    }
                }}
            />
            {
                !valid && number.length > 9
                    ?
                    <View style={styles.helperLabelContainer}>
                        <Text style={styles.helperTextWarning}>This phone number is invalid</Text>
                    </View>
                    :
                    null
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderColor: Color.LightGrey,
        borderWidth: width(1),
        height: height(48),
        paddingHorizontal: width(16),
        borderRadius: height(3),
    },
    helperLabelContainer: {
        marginTop: height(4)
    },
    helperText: {
        color: Color.LightGrey,
        fontSize: height(16)
    },
    helperTextWarning: {
        color: Color.Primary,
        fontSize: height(16)
    }
});

export default PhoneNumberInput;