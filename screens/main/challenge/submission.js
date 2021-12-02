import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from 'react-native';
import { AppRegistry, TouchableOpacity } from 'react-native';

import TopNavigationLayout from "../../../components/layouts/TopNavigation";
import { RNCamera } from 'react-native-camera';
import { useNavigation } from "@react-navigation/core";
import { height, width } from "../../../util/scale";
import Font from "../../../styles/font";
import CameraFlipIOS from '../../../assets/icons/evericons/flip-camera-ios.svg'
import Color from '../../../styles/color';

const SubmissionScreen = () => {
    const navigation = useNavigation();
    const [backCamera, setBackCamera] = useState(true);

    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
        }
    };

    return (
        <SafeAreaView style={{
            backgroundColor: 'white'
        }}>
            <View style={{
                backgroundColor: 'white',
                paddingHorizontal: width(16)
            }}>
                <View style={{
                    marginVertical: height(30),
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{ ...Font.B4 }}>Submit Challenge</Text>
                </View>
                <View style={{
                    width: width(345),
                    height: height(560)
                }}>
                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={styles.preview}
                        type={backCamera ? RNCamera.Constants.Type.back : RNCamera.Constants.Type.front}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'We need your permission to use your camera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        androidRecordAudioPermissionOptions={{
                            title: 'Permission to use audio recording',
                            message: 'We need your permission to use your audio',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        onGoogleVisionBarcodesDetected={({ barcodes }) => {
                            console.log(barcodes);
                        }}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: height(94)
                }}>
                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack();
                            }}
                            style={styles.capture}>
                            <Text style={{ fontSize: 14 }}> Back </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                            <Text style={{ fontSize: 14 }}> SNAP </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity
                            onPress={() => {
                                setBackCamera(!backCamera);
                            }} style={styles.capture}>
                            <CameraFlipIOS color={Color.LightGrey} height={'100%'} width={'100%'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    preview: {
        flex: 1
    },
    capture: {
        alignSelf: 'center',
        height: height(60),
        width: width(60),
        padding: height(16)
    },
});

export default SubmissionScreen;