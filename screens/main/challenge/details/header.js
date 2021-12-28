import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import auth from '@react-native-firebase/auth';

import { useSelector, useDispatch } from 'react-redux';
import { joinChallenge } from '../../../../redux/challengeSlice';

import { height, width } from '../../../../util/scale';
import Font from '../../../../styles/font';
import Color from '../../../../styles/color';

import CircleChecked from '../../../../assets/icons/evericons/circle-checked.svg'
import MoreHorizontal from '../../../../assets/icons/evericons/more-horizontal.svg';

import CategoriesIcon from '../../../../assets/icons/categories/categoriesIcon';
import OvalButton from '../../../../components/buttons/oval';
import JoinConfirmationModal from '../../../../components/modals/joinConfirmation';

import { createMembership } from '../../../../clients/membershipClient';

const DetailsHeader = (props) => {
    const challenge = useSelector(state => state.challenge.selectedChallenge);
    const [joinRequestSent, setJoinRequestSent] = useState(false);
    const [joinModalVisible, setJoinModalVisible] = useState(false);
    const matchingMemberships = challenge.memberships.filter(membership => membership.userId == auth().currentUser.uid);
    const dispatch = useDispatch();

    var ActionButton;

    console.log(JSON.stringify(challenge));

    const JoinButton = () => {
        return (
            <OvalButton
                onPress={() => {
                    createMembership(challenge.id, auth().currentUser.uid)
                        .then((res) => {
                            return res.json();
                        })
                        .then((json) => {
                            // console.log(JSON.stringify(json));
                            dispatch(joinChallenge(json));
                            // setJoinModalVisible(true);
                        })
                }}
                title='Join'
                containerStyle={{ width: width(92) }} />
        );
    }

    const PendingButton = () => {
        return (
            <OvalButton containerStyle={{ width: width(92) }}>
                <MoreHorizontal color={Color.White} width={width(24)} height={height(24)} />
            </OvalButton>
        );
    }

    const CheckButton = () => {
        return (
            <OvalButton containerStyle={{ width: width(92) }}>
                <CircleChecked color={Color.White} width={width(24)} height={height(24)} />
            </OvalButton>
        );
    }

    if (matchingMemberships.length == 0) {
        ActionButton = JoinButton();
    }
    else {
        var currentUserMembership = matchingMemberships[0]
        if (currentUserMembership.membershipState == 'Owner') {
            ActionButton = CheckButton();
        }
        else if (currentUserMembership.membershipState == 'Pending') {
            ActionButton = PendingButton();
        }
        else if (currentUserMembership.membershipState == 'Approved') {
            ActionButton = CheckButton();
        }
        else {
            ActionButton = JoinButton();
        }
    }

    return (
        <View style={[styles.headerContainer]}>
            <View style={{
                width: width(75),
                height: height(75),
                backgroundColor: Color.Concrete,
                borderRadius: width(8),
            }}>
                <CategoriesIcon category={challenge.category} />
            </View>
            <View style={{
                width: width(150)
            }}>
                <Text style={{
                    ...Font.B3,
                    color: Color.LightGrey
                }}>
                    {challenge.schedule.frequency.count} / {challenge.schedule.frequency.unit}
                </Text>
                <Text
                    numberOfLines={1}
                    style={{
                        ...Font.H2,
                        color: Color.LightBlack
                    }}>
                    {challenge.title}
                </Text>
                <Text style={{
                    ...Font.B3,
                    color: Color.LightGrey
                }}>
                    Starts tomorrow
                </Text>
            </View>
            {
                ActionButton
            }
            <JoinConfirmationModal visible={joinModalVisible} setVisible={setJoinModalVisible} setJoinRequestSent={setJoinRequestSent} />
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: height(34),
        marginBottom: height(8),
    },
});

export default DetailsHeader;