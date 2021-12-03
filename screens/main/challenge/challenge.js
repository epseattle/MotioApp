import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { initializeChallenges } from '../../../redux/challengeSlice';

import { useNavigation } from "@react-navigation/core";

import auth from '@react-native-firebase/auth';

import { getUserChallenges } from "../../../clients/challengeClient";

import { height, width } from "../../../util/scale";
import Font from "../../../styles/font";
import Color from "../../../styles/color";

import BottomTabNavigationLayout from "../../../components/layouts/BottomTabNavigation";
import SleepingMoti from '../../../assets/images/dashboard/sleeping_moti.svg';
import OvalButton from "../../../components/buttons/oval";
import ProfileButton from "../../../components/buttons/profile";
import ChallengeCard from "../../../components/cards/challenge";

import Months from '../../../constants/months';
import Days from '../../../constants/days';

import StartNewContextMenu from "../../../components/modals/startNewContextMenu";

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
            <View style={{ flex: 1, flexDirection: 'row' }}>
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
                                props.setModalVisible(true)
                                // navigation.navigate('CreateChallengeScreen')
                            }}
                        />
                        : null
                }
            </View>
        </View>
    );
}

const ChallengeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        getUserChallenges(auth().currentUser.uid)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                dispatch(initializeChallenges(json));
            });
    }, []);

    const UPCOMING_CHALLENGES = useSelector(state => state.challenge.upcomingChallenges);
    const ONGOING_CHALLENGES = useSelector(state => state.challenge.ongoingChallenges);
    const challengeCount = Object.keys(ONGOING_CHALLENGES).length + Object.keys(UPCOMING_CHALLENGES).length;
    const [modalVisible, setModalVisible] = useState(false);

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
                        }}>{getGreeting()}, {auth().currentUser.displayName}!</Text>
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
                <ScrollView
                    scrollEnabled={challengeCount > 3}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        alignItems: 'center',
                        paddingVertical: height(8)
                    }}
                    style={{
                        flex: 1,
                    }}>
                    <SectionHeader title={'Ongoing Challenges'} buttonLabel={'+ Add New'} setModalVisible={setModalVisible} />
                    {
                        challengeCount > 0
                            ?
                            <>
                                {
                                    Object.values(ONGOING_CHALLENGES).length > 0
                                        ?
                                        <>
                                            {Object.values(ONGOING_CHALLENGES).map((item) => {
                                                return (
                                                    <ChallengeCard
                                                        key={item.id}
                                                        ongoing
                                                        state={item.state}
                                                        onPress={() => { navigation.navigate('DetailsOngoingScreen', { challenge: item }) }} />
                                                );
                                            })}
                                        </>
                                        :
                                        null
                                }
                                {
                                    Object.values(UPCOMING_CHALLENGES).length > 0
                                        ?
                                        <>
                                            <SectionHeader title={'Upcoming Challenges'} />
                                            {Object.values(UPCOMING_CHALLENGES).map((item) => {
                                                return (
                                                    <ChallengeCard
                                                        upcoming
                                                        challenge={item}
                                                        key={item.id}
                                                        onPress={() => { navigation.navigate('DetailsPendingScreen', { challenge: item }) }} />
                                                );
                                            })}
                                        </>
                                        :
                                        null
                                }
                            </>
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
                </ScrollView>
            </View>
            <StartNewContextMenu visible={modalVisible} setVisible={setModalVisible} />
        </BottomTabNavigationLayout>
    );
};

const styles = StyleSheet.create({

});

export default ChallengeScreen;