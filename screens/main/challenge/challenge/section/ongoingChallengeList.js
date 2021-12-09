import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import { useDispatch } from 'react-redux';
import { selectChallenge } from '../../../../../redux/challengeSlice';

import { useNavigation } from '@react-navigation/core';

import { width } from '../../../../../util/scale';

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
                        <View style={[styles.challengeListContainer]}>
                            {Object.values(challenges).map((item) => {
                                return (
                                    <ChallengeCard
                                        ongoing
                                        key={item.id}
                                        challenge={item}
                                        state={item.state}
                                        onPress={() => {
                                            // console.log(item);
                                            dispatch(selectChallenge(item))
                                            navigation.navigate('DetailsScreen', { challenge: item })
                                        }} />
                                );
                            })}
                        </View>
                    </>
                    :
                    null
            }
        </>
    );
}

const styles = StyleSheet.create({
    challengeListContainer: {
        alignItems: 'center'
    }
});

export default ChallengeBodyOngoingChallengeList;