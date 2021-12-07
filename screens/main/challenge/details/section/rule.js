import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { useSelector } from 'react-redux'

import { width, height} from '../../../../../util/scale';
import Color from '../../../../../styles/color';
import Font from '../../../../../styles/font';

import DetailsBodySectionBase from './sectionBase';

const DetailsBodyRuleSection = () => {
    const challenge = useSelector(state => state.challenge.selectedChallenge);

    return (
        <DetailsBodySectionBase style={[styles.ruleContainer]}>
            <View style={[styles.section]}>
                <Text style={[styles.sectionTitle]}>Rule</Text>
            </View>
            <View style={[styles.sectionContent]}>
                <View style={[styles.topQuotationMark]}>
                    <Text style={{ ...Font.B3 }}>"</Text>
                </View>
                <View style={[styles.ruleBody]}>
                    <Text
                        style={{ textAlign: 'center', ...Font.B3 }}>{challenge.rules[0]}</Text>
                </View>
                <View style={[styles.bottomQuotationMark]}>
                    <Text style={{ ...Font.B3 }}>"</Text>
                </View>
            </View>
        </DetailsBodySectionBase>
    );
}

const styles = StyleSheet.create({
    ruleContainer: {
        height: 'auto'
    },
    section: {
        flex: 1
    },
    sectionTitle: {
        ...Font.B4,
        color: Color.LightGrey,
        marginBottom: height(8)
    },
    sectionContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    topQuotationMark: {
        minWidth: width(50),
        minHeight: height(60),
        alignItems: 'flex-end',
        alignSelf: 'flex-start'
    },
    ruleBody: {
        flex: 1,
        alignItems: 'center',
    },
    bottomQuotationMark: {
        minWidth: width(50),
        alignSelf: 'flex-end'
    }
});

export default DetailsBodyRuleSection;