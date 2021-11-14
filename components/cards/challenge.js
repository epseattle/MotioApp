import React from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

import Creativity from '../../assets/icons/categories/creativity.svg'
import Health from '../../assets/icons/categories/health.svg'
import { height, width } from '../../util/scale';
import Color from '../../styles/color';
import Font from '../../styles/font';
import CameraButton from '../buttons/camera';
import { useNavigation } from '@react-navigation/core';

const ChallengeCard = (props) => {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback onPress={() => props.onPress()}>
            <View style={{
                flexDirection: 'row',
                height: height(120),
                width: width(330),
                alignItems: 'center',
                marginTop: height(16),
                paddingVertical: height(20),
                paddingHorizontal: width(20),
                backgroundColor: Color.White,
                shadowColor: "black",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3,
                paddingVertical: 10
            }}>
                <View style={{
                    flexDirection: 'row',
                    flex: 1
                }}>
                    <View style={{
                        justifyContent: 'center',
                        width: width(75),
                        height: height(75),
                        backgroundColor: "#F4F4F4"
                    }}>
                        <Health width={width(65)} height={height(65)} />
                    </View>
                    <View style={{
                        marginLeft: width(15),
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            ...Font.H3
                        }}>Meditating</Text>
                        <Text style={{
                            ...Font.B2,
                            marginTop: height(15)
                        }}>45%</Text>
                    </View>
                </View>
                <View>
                    <CameraButton onPress={() => { navigation.navigate('SubmissionScreen') }} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
    }
});

export default ChallengeCard;