import React from 'react';
import BottomTabNavigationLayout from '../../../../components/layouts/BottomTabNavigation';
import ChallengeHeader from './header';
import ChallengeBody from './body';

const ChallengeScreen = ({ navigation }) => {

    return (
        <BottomTabNavigationLayout>
            <ChallengeHeader />
            <ChallengeBody />
        </BottomTabNavigationLayout>
    );
};

export default ChallengeScreen;