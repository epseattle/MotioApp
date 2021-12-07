import React from 'react';
import {
    View,
    Text,
    Modal,
    StyleSheet,
    SafeAreaView,
    TouchableWithoutFeedback,
} from 'react-native';

import { width, height } from '../../util/scale';
import Color from '../../styles/color';
import Font from '../../styles/font';

const JoinConfirmationModal = (props) => {
    return (
        <Modal
            visible={props.visible}
            animationType={'fade'}
            presentationStyle={'overFullScreen'}
            transparent={true}>
            <SafeAreaView style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}>
                <View
                    style={{
                        backgroundColor: Color.White,
                        width: width(300),
                        height: height(500),
                        borderRadius: width(3),
                        padding: width(24)
                    }}>
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            ...Font.B2
                        }}>Request has been sent!</Text>
                    </View>
                    <View style={{
                        flex: 1
                    }}>
                    </View>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            props.setVisible(false);
                            props.setJoinRequestSent(true);
                        }}>
                        <View style={{
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                ...Font.B2
                            }}>Close</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </SafeAreaView>
        </Modal>
    );
}

const styles = StyleSheet.create({

});

export default JoinConfirmationModal;