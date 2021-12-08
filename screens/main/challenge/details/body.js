import React, { useState, useCallback } from 'react';
import {
    View,
    ScrollView,
    RefreshControl,
} from 'react-native';

import { useSelector } from 'react-redux';

import DetailsBodyHostSection from './section/host';
import DetailsBodyRuleSection from './section/rule';
import DetailsBodyLeaderboardSection from './section/leaderboard';
import DetailsBodyCalendarSection from './section/calendar';

const sections = {
    'Pending': [
        <DetailsBodyHostSection />,
        <DetailsBodyRuleSection />,
        <DetailsBodyLeaderboardSection />
    ],
    "Ongoing": [
        <DetailsBodyCalendarSection />,
        <DetailsBodyHostSection />,
        <DetailsBodyRuleSection />,
        <DetailsBodyLeaderboardSection />
    ],
    "Started": [
        <DetailsBodyCalendarSection />,
        <DetailsBodyHostSection />,
        <DetailsBodyRuleSection />,
        <DetailsBodyLeaderboardSection />
    ],
    "Completed": []
}

const DetailsBody = (props) => {
    const challenge = useSelector(state => state.challenge.selectedChallenge);
    // console.log(challenge);
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setRefreshing(false);
    }, []);

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}>
            <View
                onStartShouldSetResponder={() => true}>
                {sections[challenge.state]}
            </View>
        </ScrollView>
    );
}

export default DetailsBody;