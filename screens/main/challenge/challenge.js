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
import OvalButton from "../../../components/buttons/oval";
import { height, width } from "../../../util/scale";
import Font from "../../../styles/font";
import Color from "../../../styles/color";
import ProfileButton from "../../../components/buttons/profile";

const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
        return 'Good Morning';
    } else if (currentHour < 18) {
        return 'Good Afternoon';
    } else {
        return 'Good Evening';
    }
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const getDate = () => {
    const date = new Date();
    return `${months[date.getMonth()]} ${date.getDate()}, ${days[date.getDay()]}`;
}

const ChallengeScreen = ({ navigation }) => {
    return (
        <BottomTabNavigationLayout>
            <ScrollView>
                <View style={{
                    marginBottom: height(30),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View>
                        <View>
                            <Text style={{
                                ...Font.H2,
                                color: Color.LightBlack
                            }}>{getGreeting()}, {'rhsl'}!</Text>
                        </View>
                        <View>
                            <Text style={{
                                ...Font.B3,
                                color: Color.LightBlack
                            }}>{getDate()}</Text>
                        </View>
                    </View>
                    <View>
                        <ProfileButton />
                    </View>
                </View>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        marginBottom: height(34)
                    }}>
                        <View style={{
                            justifyContent: 'center',
                            paddingRight: width(16)
                        }}>
                            <Text
                                style={{
                                    ...Font.H3,
                                    color: Color.LightBlack
                                }}>
                                Ongoing Challenges
                            </Text>
                        </View>
                        <View>
                            <OvalButton
                                title='Start New'
                                negative
                                containerStyle={{ width: width(104) }}
                                textStyle={{
                                    ...Font.B3
                                }}
                                onPress={() => {
                                    navigation.navigate('CreateChallengeScreen')
                                }}
                            />
                        </View>
                    </View>
                    <View>
                        <View style={{
                            alignItems: 'center',
                            marginBottom: height(50)
                        }}>
                            <Text style={{
                                ...Font.B4,
                                color: Color.LightGrey
                            }}>You don't have any challenges yet.</Text>
                        </View>
                        <View style={{ width: width(343), height: height(148) }}>
                            <SleepingMoti />
                        </View>
                    </View>
                </View>
                <Button title='DetailsScreen' onPress={() => { navigation.navigate('DetailsScreen') }} />
                <Button title='SubmissionScreen' onPress={() => { navigation.navigate('SubmissionScreen') }} />
            </ScrollView>
        </BottomTabNavigationLayout>
    );
};

const styles = StyleSheet.create({

});

export default ChallengeScreen;