import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { default as RNDatePicker } from 'react-native-date-picker';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { height, width } from '../../util/scale';
import Color from '../../styles/color';
import Font from '../../styles/font';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const DatePicker = (props) => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    return (
        <View>
            <TouchableWithoutFeedback onPress={
                () => {
                    setOpen(true);
                }
            }>
                <View style={[styles.container]}>
                    <Text style={[styles.date]}>
                        {`${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <RNDatePicker
                modal
                mode="date"
                open={open}
                date={date}
                minimumDate={new Date()}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: height(40),
        borderWidth: width(1),
        borderColor: Color.LightGrey,
        borderRadius: width(5),
        justifyContent: 'center',
        paddingHorizontal: width(16)
    },
    date: {
        color: Color.LightBlack,
        ...Font.B3
    }
});

export default DatePicker;