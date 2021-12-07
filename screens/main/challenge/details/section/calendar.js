import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import { useSelector } from 'react-redux'

import DetailsBodySectionBase from './sectionBase';
import CalendarCard from '../../../../../components/cards/calendar';

const DetailsBodyCalendarSection = () => {
    const challenge = useSelector(state => state.challenge.selectedChallenge);

    return (
        <DetailsBodySectionBase style={{ height: 'auto' }}>
            <View style={[styles.row]}>
                <View style={[styles.section]}>
                    <CalendarCard />
                </View>
            </View>
        </DetailsBodySectionBase>
    );
}

const styles = StyleSheet.create({
    section: {
        flex: 1
    },
    row: {
        flexDirection: 'row'
    },
});

export default DetailsBodyCalendarSection;