import React from 'react';
import {
    View,
    Button,
    StyleSheet
} from 'react-native';

import { width, height } from '../../util/scale';
import Color from '../../styles/color';

const OvalButton = (props) => {
    return (
        <View style={styles.container}>
            <Button color={Color.White} title={props.title} onPress={props.onPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: height(48),
        width: width(343),
        backgroundColor: Color.Primary,
        borderRadius: height(24),
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default OvalButton;