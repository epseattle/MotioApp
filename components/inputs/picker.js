import React, { useState } from 'react';
import {
    Modal,
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Picker as RNPicker } from '@react-native-picker/picker';
import Color from '../../styles/color';
import { width, height } from '../../util/scale';
import Font from '../../styles/font';
import ChevronBottom from '../../assets/icons/evericons/chevron-bottom.svg'

const MPicker = (props) => {
    const [item, setItem] = useState(props.data ? props.data[0] : '');
    const [visible, setVisible] = useState(false);

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
                        <RNPicker
                            mode={'dialog'}
                            selectedValue={item}
                            onValueChange={(itemValue, itemIndex) =>
                                setItem(itemValue)
                            }
                            style={styles.picker}>
                            {props.data.map((item) => {
                                return (
                                    <RNPicker.Item
                                        label={item}
                                        value={item} />
                                );
                            })}
                        </RNPicker>
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
                    <Text style={{
                    }}>{item}</Text>
                    <View style={{ marginLeft: width(8) }}>
                        <ChevronBottom color={Color.LightGrey} width={width(20)} height={height(20)} />
                    </View>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
    },
    picker: {
        width: '100%'
    }
});

export default MPicker;