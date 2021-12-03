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
import { useNavigation } from '@react-navigation/core';

const StartNewContextMenu = (props) => {
    const navigation = useNavigation();
    
    return(
        <Modal
                visible={props.visible}
                animationType={'fade'}
                presentationStyle={'overFullScreen'}
                transparent={true}>
                <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ flex: 1 }}>
                    </View>
                    <View style={{
                        marginHorizontal: width(16),
                        backgroundColor: Color.White,
                        paddingHorizontal: width(8),
                        paddingVertical: height(8),
                        borderRadius: width(5),
                        marginTop: height(8),
                        justifyContent: 'center'
                    }}>
                        <TouchableWithoutFeedback
                            onPress={() => { 
                                navigation.navigate('CreateChallengeScreen')
                                props.setVisible(false);
                             }}>
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: (48)
                            }}>
                                <Text style={[styles.buttonLabel]}>Start New</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            onPress={() => { props.setVisible(false) }}>
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: (48)
                            }}>
                                <Text style={[styles.buttonLabel]}>Join</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{
                        marginHorizontal: width(16),
                        backgroundColor: Color.White,
                        paddingHorizontal: width(8),
                        paddingVertical: height(8),
                        borderRadius: width(5),
                        marginTop: height(8),
                        height: height(48),
                        justifyContent: 'center'
                    }}>
                        <TouchableWithoutFeedback
                            onPress={() => { props.setVisible(false) }}>
                            <View style={{
                                alignItems: 'center'
                            }}>
                                <Text style={[styles.buttonLabel]}>Cancel</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </SafeAreaView>
            </Modal>
    );
}

const styles = StyleSheet.create({

});

export default StartNewContextMenu;