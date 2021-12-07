import React from 'react';
import {
    StyleSheet
} from 'react-native';

import { useDispatch } from 'react-redux';
import selectChallenge from '../../../../../redux/challengeSlice';

import { useNavigation } from '@react-navigation/core';

import ChallengeBodySectionHeader from './header';
import ChallengeCard from '../../../../../components/cards/challenge';

const ChallengeBodyChallengeList = (props) => {
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
                        <ChallengeBodySectionHeader title={title} />
                        {Object.values(challenges).map((item) => {
                            return (
                                <ChallengeCard
                                    upcoming
                                    key={item.id}
                                    challenge={item}
                                    onPress={() => {
                                        dispatch(selectChallenge(item))
                                            .then(() => {
                                                navigation.navigate('DetailsScreen', { challenge: item })
                                            });
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

export default ChallengeBodyChallengeList;