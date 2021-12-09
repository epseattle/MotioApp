import React from 'react';
import BottomTabNavigationLayout from '../../../../components/layouts/BottomTabNavigation';
import ChallengeHeader from './header';
import ChallengeBody from './body';

const ChallengeScreen = ({ navigation }) => {

    return (
        <BottomTabNavigationLayout style={{ marginHorizontal: 0 }}>
            <ChallengeHeader />
            <ChallengeBody />
        </BottomTabNavigationLayout>
    );
};

export default ChallengeScreen;