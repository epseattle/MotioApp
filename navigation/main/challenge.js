import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import ChallengeScreen from '../../screens/main/challenge/challenge';
import DetailsPendingScreen from "../../screens/main/challenge/details_pending";
// import SubmissionScreen from '../../screens/main/challenge/submission'
import DetailsOngoingScreen from "../../screens/main/challenge/details_ongoing";

const ChallengeStack = createStackNavigator();

const ChallengeNavigator = () => {
    return (
        <ChallengeStack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <ChallengeStack.Screen name="ChallengeScreen" component={ChallengeScreen} />
            <ChallengeStack.Screen name="DetailsPendingScreen" component={DetailsPendingScreen} />
            <ChallengeStack.Screen name="DetailsOngoingScreen" component={DetailsOngoingScreen} />
            {/* <ChallengeStack.Screen name="SubmissionScreen" component={SubmissionScreen} /> */}
        </ChallengeStack.Navigator>
    );
}

export default ChallengeNavigator;