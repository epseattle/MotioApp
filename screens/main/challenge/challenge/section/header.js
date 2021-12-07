import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { width, height } from '../../../../../util/scale';
import Font from '../../../../../styles/font';
import Color from '../../../../../styles/color';

import { useNavigation } from '@react-navigation/core';

import OvalButton from '../../../../../components/buttons/oval';
import StartNewContextMenu from '../../../../../components/modals/startNewContextMenu';
import Plus from '../../../../../assets/icons/evericons/plus.svg'

const ChallengeBodySectionHeader = (props) => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={[styles.headerContainer]}>
            <View style={[styles.headerLabelContainer]}>
                <Text
                    style={{
                        ...Font.B1,
                        color: Color.LightBlack
                    }}>
                    {props.title}
                </Text>
                {props.sublabel}
            </View>
            <View style={styles.headerButtonContainer}>
                {
                    props.buttonLabel
                        ?
                        <OvalButton
                            icon={
                                <Plus color={Color.Primary} />
                            }
                            title={props.buttonLabel}
                            negative
                            disabled={props.buttonDisabled}
                            containerStyle={{ width: width(124), height: height(45) }}
                            textStyle={{
                                ...Font.B3
                            }}
                            onPress={() => {
                                setModalVisible(true)
                            }}
                        />
                        : null
                }
            </View>
            <StartNewContextMenu visible={modalVisible} setVisible={setModalVisible} />
        </View>
    );
}

const styles = new StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        marginTop: height(8),
        height: height(45),
    },
    headerLabelContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: width(16),
    },
    headerButtonContainer: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default ChallengeBodySectionHeader;