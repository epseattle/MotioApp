import React from 'react';
import {
    StyleSheet
} from 'react-native';

import { useDispatch } from 'react-redux';
import { selectChallenge } from '../../../../../redux/challengeSlice';

import { useNavigation } from '@react-navigation/core';

import ChallengeBodySectionHeader from './header';
import ChallengeCard from '../../../../../components/cards/challenge';

const ChallengeBodyOngoingChallengeList = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const title = props.title;
    const challenges = props.challenges

    return (
        <>
            {
                Object.values(challenges).length > 0
                    ?
                    <>
                        <ChallengeBodySectionHeader title={'Ongoing'} />
                        {Object.values(challenges).map((item) => {
                            return (
                                <ChallengeCard
                                    ongoing
                                    key={item.id}
                                    challenge={item}
                                    state={item.state}
                                    onPress={() => {
                                        console.log(item);
                                        dispatch(selectChallenge(item))
                                        navigation.navigate('DetailsScreen', { challenge: item })
                                    }} />
                            );
                        })}
                    </>
                    :
                    null
            }
        </>
    );
}

const styles = StyleSheet.create({

});

export default ChallengeBodyOngoingChallengeList;