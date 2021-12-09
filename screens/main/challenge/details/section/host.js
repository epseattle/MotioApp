import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { useSelector } from 'react-redux'

import { width, height } from '../../../../../util/scale';
import Color from '../../../../../styles/color';
import Font from '../../../../../styles/font';

import DetailsBodySectionBase from './sectionBase';
import ProfileButton from '../../../../../components/buttons/profile';

const DetailsBodyHostSection = () => {
    const challenge = useSelector(state => state.challenge.selectedChallenge);

    return (
        <DetailsBodySectionBase>
            <View style={[styles.row]}>
                <View style={[styles.section]}>
                    <Text style={[styles.sectionTitle]}>Host</Text>
                    <View style={[styles.sectionContent]}>
                        <ProfileButton
                            disabled
                            highlight
                            icon={challenge.owner.photoUrl}
                            style={{
                                width: width(50),
                                height: height(50),
                                marginRight: width(8)
                            }} />
                        <Text style={[Font.B4]}>{challenge.owner.displayName}</Text>
                    </View>
                </View>
                <View style={[styles.section]}>
                    <Text style={[styles.sectionTitle]}>Requirement</Text>
                    <View>
                        <View style={[styles.sectionContent, { alignItems: 'baseline' }]}>
                            <Text style={{
                                ...Font.H2,
                                color: Color.LightBlack,
                            }}>{challenge.schedule.frequency.count}</Text>
                            <Text> time{challenge.schedule.frequency.count > 1 ? 's' : null}</Text>
                        </View>
                        <View style={[styles.sectionContent]}>
                            <Text>per {challenge.schedule.frequency.unit}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </DetailsBodySectionBase>
    );
}

const styles = StyleSheet.create({
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
    row: {
        flexDirection: 'row'
    }
});

export default DetailsBodyHostSection;