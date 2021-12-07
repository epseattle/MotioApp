import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { height, width } from '../../../../../util/scale';
import Font from '../../../../../styles/font';
import Color from '../../../../../styles/color';

import SleepingMoti from '../../../../../assets/images/dashboard/sleeping_moti.svg';

const ChallengeBodyEmpty = () => {
    return (
        <>
            <View style={[styles.messageContainer]}>
                <Text style={{
                    ...Font.B5,
                    color: Color.LightGrey
                }}>We couldn’t find any challenges that you are a part of.</Text>
                <Text style={{
                    ...Font.B5,
                    color: Color.LightGrey,
                    marginTop: height(8)
                }}>Create or join a new challenge.</Text>
            </View>
            <View style={[styles.imageContainer]}>
                <SleepingMoti />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    messageContainer: {
        alignItems: 'center',
        marginTop: height(80),
        marginBottom: height(50)
    },
    imageContainer: {
        width: width(343),
        height: height(148)
    }
});

export default ChallengeBodyEmpty;