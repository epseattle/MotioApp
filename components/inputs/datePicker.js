import React, { useState } from 'react';
import {
    Modal,
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Color from '../../styles/color';
import { width, height } from '../../util/scale';

import { default as RNDatePicker } from 'react-native-date-picker'
import Font from '../../styles/font';

import Months from '../../constants/months';

const DatePicker = (props) => {
    const [date, setDate] = useState(new Date());
    const [visible, setVisible] = useState(false);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    return (
        <View>
            <Modal
                visible={visible}
                animationType={'fade'}
                presentationStyle={'overFullScreen'}
                transparent={true}>
                <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ flex: 1 }}>
                    </View>
                    <View style={[styles.modalCotainer, styles.inputContainer]}>
                        <View>
                            <RNDatePicker
                                date={date}
                                minimumDate={tomorrow}
                                onDateChange={(date) => {
                                    setDate(date);
                                    props.setDate(date);
                                }}
                                mode={'date'}
                            />
                        </View>
                    </View>
                    <View style={[styles.modalCotainer, styles.modalButtonContainer]}>
                        <View style={[styles.buttonContainer]}>
                            <TouchableWithoutFeedback
                                onPress={() => { setVisible(false) }}>
                                <Text style={[styles.buttonLabel]}>Submit</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style={[styles.modalCotainer, styles.modalButtonContainer]}>
                        <View style={[styles.buttonContainer]}>
                            <TouchableWithoutFeedback
                                onPress={() => { setVisible(false) }}>
                                <Text style={[styles.buttonLabel]}>Cancel</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
            <TouchableWithoutFeedback
                onPress={() => { setVisible(true) }}>
                <View style={[styles.container]}>
                    <Text>{Months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: Color.LightGrey,
        borderWidth: width(1),
        height: height(40),
        paddingHorizontal: width(16),
        borderRadius: height(3),
        justifyContent: 'center'
    },
    modalCotainer: {
        marginHorizontal: width(16),
        backgroundColor: Color.White,
        paddingHorizontal: width(8),
        paddingVertical: height(8),
        borderRadius: width(5)
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    modalButtonContainer: {
        marginTop: height(8),
        height: height(48),
        justifyContent: 'center'
    },
    buttonContainer: {
        alignItems: 'center'
    },
    buttonLabel: {
        ...Font.B3,
        color: Color.LightBlack
    }
});

export default DatePicker;