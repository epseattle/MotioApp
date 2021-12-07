import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import { width, height } from '../../../../../util/scale';
import Color from '../../../../../styles/color'

const DetailsBodySectionBase = (props) => {
    return (
        <View style={[styles.cardContainer, props.style]}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        justifyContent: 'center',
        height: height(112),
        backgroundColor: Color.Concrete,
        marginVertical: height(8),
        borderRadius: width(8),
        paddingHorizontal: width(16),
        paddingVertical: height(16)
    }
})

export default DetailsBodySectionBase;