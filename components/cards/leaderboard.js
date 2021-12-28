import React, { useEffect, useState } from "react";
import {
    View,
    TouchableWithoutFeedback,
    StyleSheet,
    Text
} from 'react-native';
import auth from '@react-native-firebase/auth';

import { useSelector } from "react-redux";

import { getChallengeMembersRequest } from "../../clients/challengeClient";

import { height, width } from "../../util/scale";
import ProfileButton from "../buttons/profile";
import CalendarChecked from '../../assets/icons/evericons/calendar-checked.svg'
import ChevronBottom from '../../assets/icons/evericons/chevron-bottom.svg'
import ChevronTop from '../../assets/icons/evericons/chevron-top.svg'
import Color from "../../styles/color";
import Font from "../../styles/font";
import OvalButton from "../buttons/oval";

const LeaderBoard = (props) => {
    const challenge = useSelector(state => state.challenge.selectedChallenge);
    const [expanded, setExpanded] = useState(false);
    const [members, setMembers] = useState(challenge.memberships);
    const maxMemberCount = challenge.maxMemberCount;
    const memberCount = members.filter(member => member.membershipState != 'Pending' && member.membershipState != 'Rejected').length;
    const isOwner = challenge.owner.id == auth().currentUser.uid;
    console.log(members);

    // useEffect(() => {
    //     getChallengeMembersRequest(challenge.id)
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((json) => {
    //             var members = JSON.parse(json);
    //             setMembers(members)
    //             return members;
    //         });
    // }, [])

    const ExpandedLeaderboard = () => {
        return (
            <View>
                <View style={[styles.row]}>
                    <View style={[styles.leftColumn]}>
                    </View>
                    <View style={[styles.rightColumn, {
                        height: height(50),
                        width: width(50),
                        justifyContent: 'center'
                    }]}>
                        <CalendarChecked color={Color.LightGrey} />
                    </View>
                </View>
                {
                    members.map((item) => {
                        if (item.membershipState == 'Owner') {
                            return (
                                <View key={item.id} style={[styles.row]}>
                                    <View style={[styles.leftColumn, {
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        height: height(50),
                                        marginVertical: height(8)
                                    }]}>
                                        <ProfileButton highlight icon={item.user.photoUrl} key={item.id} style={{ width: width(50), height: height(50), marginRight: width(8) }} />
                                        <Text>{item.user.displayName}</Text>
                                    </View>
                                    <View style={[styles.rightColumn, {
                                        height: height(50),
                                        width: width(40),
                                        justifyContent: 'center'
                                    }]}>
                                        <Text>-</Text>
                                    </View>
                                </View>
                            );
                        }
                    })
                }
                {
                    members.map((item) => {
                        if (item.membershipState == 'Approved') {
                            return (
                                <View key={item.id} style={[styles.row]}>
                                    <View style={[styles.leftColumn, {
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        height: height(50),
                                        marginVertical: height(8)
                                    }]}>
                                        <ProfileButton icon={item.user.photoUrl} key={item.id} style={{ width: width(50), height: height(50), marginRight: width(8) }} />
                                        <Text>{item.user.displayName}</Text>
                                    </View>
                                    <View style={[styles.rightColumn, {
                                        height: height(50),
                                        width: width(40),
                                        justifyContent: 'center'
                                    }]}>
                                        <Text>-</Text>
                                    </View>
                                </View>
                            );
                        }
                    })
                }
                {
                    isOwner
                        ?
                        <>
                            <View style={{
                                borderWidth: 1,
                                borderColor: Color.Fog,
                                marginVertical: height(8)
                            }}>
                            </View>
                            {
                                members.map((item) => {
                                    if (item.membershipState == 'Pending') {
                                        return (
                                            <View key={item.id} style={[styles.row]}>
                                                <View style={[styles.leftColumn, {
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    height: height(50),
                                                    marginVertical: height(8)
                                                }]}>
                                                    <ProfileButton icon={item.user.photoUrl} key={item.id} style={{ width: width(50), height: height(50), marginRight: width(8) }} />
                                                    <Text>{item.user.displayName}</Text>
                                                </View>
                                                <View style={[styles.rightColumn, {
                                                    height: height(50),
                                                    width: 'auto',
                                                    justifyContent: 'space-between',
                                                    alignContent: 'center',
                                                    alignItems: 'flex-end',
                                                    flexDirection: 'row'
                                                }]}>
                                                    <OvalButton
                                                        negative
                                                        onPress={() => {
                                                            alert('Approved')
                                                        }}
                                                        title='Approve'
                                                        textStyle={{
                                                            ...Font.B5
                                                        }}
                                                        containerStyle={{
                                                            width: width(60),
                                                            height: height(30),
                                                            marginRight: width(8),
                                                            borderWidth: width(1)
                                                        }} />
                                                    <OvalButton
                                                        negative
                                                        onPress={() => {
                                                            alert('Rejected')
                                                        }}
                                                        title='Reject'
                                                        textStyle={{
                                                            ...Font.B5
                                                        }}
                                                        containerStyle={{
                                                            width: width(60),
                                                            height: height(30),
                                                            borderWidth: width(1)
                                                        }} />
                                                </View>
                                            </View>
                                        );
                                    }
                                })
                            }
                        </>
                        :
                        null
                }
            </View>
        );
    }

    const CollapsedLeaderBoard = () => {
        return (
            <View style={[styles.row, { justifyContent: 'center' }]}>
                <View style={{ flexDirection: 'row' }}>
                    {
                        members.filter(member => member.membershipState == 'Approved' || member.membershipState == 'Owner').slice(0, 5).map((item) => {
                            if (item.membershipState == 'Owner') {
                                return (
                                    <ProfileButton highlight icon={item.user.photoUrl} key={item.id} disabled style={{ width: width(50), height: height(50), marginLeft: width(-10) }} />
                                );
                            }
                            else {
                                return (
                                    <ProfileButton icon={item.user.photoUrl} key={item.id} disabled style={{ width: width(50), height: height(50), marginLeft: width(-10) }} />
                                );
                            }
                        })
                    }
                    {
                        members.length > 5
                            ?
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{
                                    ...Font.H3,
                                    color: Color.LightGrey
                                }}>+{members.length - 5}</Text>
                            </View>
                            :
                            null
                    }
                </View>
            </View>);
    }

    return (
        <View style={[styles.container]}>
            <View style={[styles.row]}>
                <View style={[styles.leftColumn, { flexDirection: 'row', alignItems: 'center' }]}>
                    <Text style={[styles.sectionTitle]}>Players</Text>
                </View>
                <TouchableWithoutFeedback
                    onPress={() => {
                        setExpanded(!expanded)
                    }}>
                    <View style={[styles.rightColumn, { flexDirection: 'row', alignItems: 'flex-start' }]}>
                        <Text style={[styles.sectionTitle, Font.B4, { color: Color.LightBlack }]}>{memberCount}</Text>
                        <Text style={[styles.sectionTitle, Font.B4]}> / {maxMemberCount}</Text>
                        <View style={{ marginLeft: width(5) }}>
                            {
                                expanded
                                    ?
                                    <ChevronTop color={Color.LightBlack} width={20} height={20} />
                                    :
                                    <ChevronBottom color={Color.LightBlack} width={20} height={20} />
                            }
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            {
                expanded
                    ?
                    <ExpandedLeaderboard />
                    :
                    <CollapsedLeaderBoard />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    sectionTitle: {
        ...Font.B4,
        color: Color.LightGrey,
        marginBottom: height(8)
    },
    row: {
        flexDirection: 'row'
    },
    leftColumn: {
        flex: 1
    },
    rightColumn: {

    }
});

export default LeaderBoard;