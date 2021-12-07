import React from 'react';
import {
    StyleSheet
} from 'react-native';

import DetailsBodySectionBase from './sectionBase';
import LeaderBoard from '../../../../../components/cards/leaderboard';

const DetailsBodyLeaderboardSection = () => {
    return (
        <DetailsBodySectionBase style={[styles.leaderBoardContainer]}>
            <LeaderBoard />
        </DetailsBodySectionBase>
    );
}

const styles = StyleSheet.create({
    leaderBoardContainer: {
        height: 'auto'
    }
})

export default DetailsBodyLeaderboardSection;