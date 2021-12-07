import React, { useEffect, useState, useCallback } from 'react';
import {
    View,
    Text,
    ScrollView,
    RefreshControl,
    Pressable,
    StyleSheet
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { initializeChallenges, selectChallenge } from '../../../../redux/challengeSlice';

import auth from '@react-native-firebase/auth';

import { getUserChallenges } from '../../../../clients/challengeClient';

import { height, width } from '../../../../util/scale';
import Font from '../../../../styles/font';
import Color from '../../../../styles/color';

import ChallengeBodySectionHeader from './section/header';
import ChallengeBodyEmpty from './section/empty';
import ChallengeBodyOngoingChallengeList from './section/ongoingChallengeList';
import ChallengeBodyUpcomingChallengeList from './section/upcomingChallengeList';

const ChallengeBody = () => {
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

    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setRefreshing(false);
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.contentContainer]}>
                <Pressable>
                    <ChallengeBodySectionHeader
                        title={'Challenges'}
                        sublabel={
                            <Text style={{
                                ...Font.B3,
                                color: Color.LightGrey,
                                marginLeft: width(8)
                            }}>
                                ({challengeCount} / 5)
                            </Text>}
                        buttonLabel={challengeCount > 5 ? null : 'Add' }
                        buttonDisabled={challengeCount > 5} />
                    {
                        challengeCount > 0
                            ?
                            <>
                                <ChallengeBodyOngoingChallengeList challenges={UPCOMING_CHALLENGES}/>
                                <ChallengeBodyUpcomingChallengeList challenges={UPCOMING_CHALLENGES} />
                            </>
                            :
                            <ChallengeBodyEmpty />
                    }
                </Pressable>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        alignItems: 'center',
        paddingVertical: height(8)
    }
});

export default ChallengeBody;