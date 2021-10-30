import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import ChallengeScreen from '../../screens/main/challenge/challenge';
import DetailsScreen from "../../screens/main/challenge/details";
import SubmissionScreen from '../../screens/main/challenge/submission'

const ChallengeStack = createStackNavigator();

const ChallengeNavigator = () => {
    return (
        <ChallengeStack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <ChallengeStack.Screen name="ChallengeScreen" component={ChallengeScreen} />
            <ChallengeStack.Screen name="DetailsScreen" component={DetailsScreen} />
            <ChallengeStack.Screen name="SubmissionScreen" component={SubmissionScreen} />
        </ChallengeStack.Navigator>
    );
}

export default ChallengeNavigator;