import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

import { height, width } from '../../util/scale';

const ModalLayout = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: width(20),
        marginTop: height(20)
    }
});

export default ModalLayout;