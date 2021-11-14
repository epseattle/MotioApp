import React from 'react';
import {
    View,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

import { height, width } from '../../util/scale';

import You from '../../assets/icons/custom/you.svg'
import Color from '../../styles/color';

const ProfileButton = (props) => {
    return (
        <TouchableWithoutFeedback onPress={() => { props.onPress() }}>
            <View style={styles.container}>
                <You color={Color.LightBlack} height={height(72)} width={width(72)} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: Color.LightBlack,
        borderRadius: width(36),
        width: width(72),
        height: height(72)
    }
});

export default ProfileButton;