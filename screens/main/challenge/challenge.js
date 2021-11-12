import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    ScrollView
} from 'react-native';
import BottomTabNavigationLayout from "../../../components/layouts/BottomTabNavigation";
import SleepingMoti from '../../../assets/images/dashboard/sleeping_moti.svg';

const ChallengeScreen = ({ navigation }) => {
    return (
        <BottomTabNavigationLayout>
            <ScrollView>
                <View>
                    <View>
                        <Text>Good Afternoon!</Text>
                    </View>
                    <View>
                        <Text>August 5, Wednesday</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <View>
                            <Text>Ongoing Challenges</Text>
                        </View>
                    </View>
                    <View>
                        <Text>You don't have any challenges yet.</Text>
                        <View style={{ height: 200 }}>
                            <SleepingMoti />
                        </View>
                    </View>
                </View>
                <Button title='DetailsScreen' onPress={() => { navigation.navigate('DetailsScreen') }} />
                <Button title='CreateChallengeScreen' onPress={() => { navigation.navigate('CreateChallengeScreen') }} />
                <Button title='SubmissionScreen' onPress={() => { navigation.navigate('SubmissionScreen') }} />
            </ScrollView>
        </BottomTabNavigationLayout>
    );
};

const styles = StyleSheet.create({

});

export default ChallengeScreen;