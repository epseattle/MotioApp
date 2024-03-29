import React from 'react';
import { useSelector } from 'react-redux';
import {
    View,
    Text,
    Modal,
    StyleSheet,
    SafeAreaView,
    TouchableWithoutFeedback,
    Share
} from 'react-native';

import { width, height } from '../../util/scale';
import Color from '../../styles/color';
import Font from '../../styles/font';
import { shareChallenge } from '../../clients/challengeClient';

const DetailsContextMenuModal = (props) => {
    const challenge = useSelector(state => state.challenge.selectedChallenge);

    return (
        <Modal
            visible={props.visible}
            animationType={'fade'}
            presentationStyle={'overFullScreen'}
            transparent={true}>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <TouchableWithoutFeedback onPress={() => {
                    props.setVisible(false);
                }}>
                    <View style={{ flex: 1 }}>
                    </View>
                </TouchableWithoutFeedback>
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
                        onPress={() => { props.setVisible(false) }}>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: (48)
                        }}>
                            <Text style={[styles.buttonLabel]}>Quit</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => { props.setVisible(false) }}>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: (48)
                        }}>
                            <Text style={[styles.buttonLabel]}>Turn Off Notification</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={async () => {
                            shareChallenge(challenge.id)
                                .then((res) => {
                                    return res.json();
                                })
                                .then(async (json) => {
                                    console.log(JSON.stringify(json));
                                    var code = json.code;
                                    await Share.share({
                                        message: `Use Code:${code} to Join This Challenge`,
                                    })
                                })
                        }}>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: (48)
                        }}>
                            <Text style={[styles.buttonLabel]}>Share</Text>
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

export default DetailsContextMenuModal;