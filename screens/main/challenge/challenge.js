import React, { useEffect, useState, useCallback } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    RefreshControl
} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { initializeChallenges, selectChallenge } from '../../../redux/challengeSlice';

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
import Plus from '../../../assets/icons/evericons/plus.svg'

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
            marginVertical: height(8)
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: width(16)
            }}>
                <Text
                    style={{
                        ...Font.B1,
                        color: Color.LightBlack
                    }}>
                    {props.title}
                </Text>
                {props.sublabel}
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {
                    props.buttonLabel
                        ?
                        <OvalButton
                            icon={
                                <Plus color={Color.Primary} />
                            }
                            title={props.buttonLabel}
                            negative
                            disabled={props.buttonDisabled}
                            containerStyle={{ width: width(124), height: height(45) }}
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
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const UPCOMING_CHALLENGES = useSelector(state => state.challenge.upcomingChallenges);
    const ONGOING_CHALLENGES = useSelector(state => state.challenge.ongoingChallenges);
    const challengeCount = Object.keys(ONGOING_CHALLENGES).length + Object.keys(UPCOMING_CHALLENGES).length;
    const [modalVisible, setModalVisible] = useState(false);

    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setRefreshing(false);
    }, []);

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
                        }}>{getGreeting()}!</Text>
                    </View>
                    <View>
                        <Text style={{
                            ...Font.B3,
                            color: Color.LightBlack
                        }}>{getDate()}</Text>
                    </View>
                </View>
                <View>
                    <ProfileButton style={{ width: width(70), height: height(70) }} onPress={() => { navigation.navigate('ProfileScreen') }} />
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                    scrollEnabled={challengeCount > 0}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        alignItems: 'center',
                        paddingVertical: height(8)
                    }}
                    style={{
                        flex: 1,
                    }}>
                    <SectionHeader
                        title={'Ongoing'}
                        sublabel={
                            <Text style={{
                                ...Font.B3,
                                color: Color.LightGrey,
                                marginLeft: width(8)
                            }}>
                                ({challengeCount} / 5)
                            </Text>}
                        buttonLabel={'Add'}
                        buttonDisabled={challengeCount > 5}
                        setModalVisible={setModalVisible} />
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
                                                        ongoing
                                                        key={item.id}
                                                        challenge={item}
                                                        state={item.state}
                                                        onPress={() => {
                                                            dispatch(selectChallenge(item));
                                                            navigation.navigate('DetailsOngoingScreen', { challenge: item })
                                                        }} />
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
                                            <SectionHeader title={'Upcoming'} />
                                            {Object.values(UPCOMING_CHALLENGES).map((item) => {
                                                return (
                                                    <ChallengeCard
                                                        upcoming
                                                        key={item.id}
                                                        challenge={item}
                                                        onPress={() => {
                                                            dispatch(selectChallenge(item));
                                                            navigation.navigate('DetailsPendingScreen', { challenge: item })
                                                        }} />
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
                                    marginTop: height(80),
                                    marginBottom: height(50)
                                }}>
                                    <Text style={{
                                        ...Font.B5,
                                        color: Color.LightGrey
                                    }}>We couldn’t find any challenges that you are a part of.</Text>
                                    <Text style={{
                                        ...Font.B5,
                                        color: Color.LightGrey,
                                        marginTop: height(8)
                                    }}>Create or join a new challenge.</Text>
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