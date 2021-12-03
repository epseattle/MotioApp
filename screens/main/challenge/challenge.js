import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import { useSelector } from "react-redux";
import BottomTabNavigationLayout from "../../../components/layouts/BottomTabNavigation";
import SleepingMoti from '../../../assets/images/dashboard/sleeping_moti.svg';
import OvalButton from "../../../components/buttons/oval";
import { height, width } from "../../../util/scale";
import Font from "../../../styles/font";
import Color from "../../../styles/color";
import ProfileButton from "../../../components/buttons/profile";
import ChallengeCard from "../../../components/cards/challenge";
import { useNavigation } from "@react-navigation/core";
import Months from '../../../constants/months';
import Days from '../../../constants/days';

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

const getDate = () => {
    const date = new Date();
    return `${Months[date.getMonth()]} ${date.getDate()}, ${Days[date.getDay()]}`;
}

const ONGOING_CHALLENGES = [
    {
        id: 0,
        state: 'Approved'
    },
    {
        id: 1,
        state: 'Pending'
    },
    {
        id: 2,
        state: 'Incomplete'
    }
];

const SectionHeader = (props) => {
    const navigation = useNavigation();

    return (
        <View style={{
            flexDirection: 'row',
            marginVertical: height(8),
            marginLeft: width(8)
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
                    {props.title}
                </Text>
            </View>
            <View style={{ flex: 1 }}>
                {
                    props.buttonLabel
                        ?
                        <OvalButton
                            title={props.buttonLabel}
                            negative
                            containerStyle={{ width: width(104) }}
                            textStyle={{
                                ...Font.B3
                            }}
                            onPress={() => {
                                navigation.navigate('CreateChallengeScreen')
                            }}
                        />
                        : null
                }
            </View>
        </View>
    );
}

const ChallengeScreen = ({ navigation }) => {
    const UPCOMING_CHALLENGES = useSelector(state => state.challenge.upcomingChallenges);
    const challengeCount = ONGOING_CHALLENGES.length + Object.keys(UPCOMING_CHALLENGES).length;

    return (
        <BottomTabNavigationLayout>
            <View style={{
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
                    <ProfileButton style={{ width: width(72), height: height(72) }} onPress={() => { navigation.navigate('ProfileScreen') }} />
                </View>
            </View>
            <View style={{ flex: 1 }}>
                {
                    (challengeCount > 0) > 0
                        ?
                        <ScrollView
                            scrollEnabled={challengeCount > 3}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                alignItems: 'center',
                                paddingVertical: height(12)
                            }}
                            style={{
                                flex: 1,
                            }}>
                            <SectionHeader title={'Ongoing Challenges'} buttonLabel={'Start New'} />
                            {ONGOING_CHALLENGES.map((item) => {
                                return (
                                    <ChallengeCard
                                        key={item.id}
                                        ongoing
                                        state={item.state}
                                        onPress={() => { navigation.navigate('DetailsOngoingScreen') }} />
                                );
                            })}
                            <SectionHeader title={'Upcoming Challenges'} buttonLabel={'Join'} />
                            {Object.values(UPCOMING_CHALLENGES).map((item) => {
                                return (
                                    <ChallengeCard
                                        upcoming
                                        challenge={item}
                                        key={item.id}
                                        onPress={() => { navigation.navigate('DetailsPendingScreen') }} />
                                );
                            })}
                        </ScrollView>
                        :
                        <View>
                            <View style={{
                                alignItems: 'center',
                                marginTop: height(38),
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
                }
            </View>
        </BottomTabNavigationLayout>
    );
};

const styles = StyleSheet.create({

});

export default ChallengeScreen;