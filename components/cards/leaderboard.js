import React, { useEffect, useState } from "react";
import {
    View,
    TouchableWithoutFeedback,
    StyleSheet,
    Text
} from 'react-native';

import { useSelector } from "react-redux";

import { getChallengeMembersRequest } from "../../clients/challengeClient";

import { height, width } from "../../util/scale";
import ProfileButton from "../buttons/profile";
import CalendarChecked from '../../assets/icons/evericons/calendar-checked.svg'
import ChevronBottom from '../../assets/icons/evericons/chevron-bottom.svg'
import ChevronTop from '../../assets/icons/evericons/chevron-top.svg'
import Color from "../../styles/color";
import Font from "../../styles/font";

const LeaderBoard = (props) => {
    const challenge = useSelector(state => state.challenge.selectedChallenge);
    const [expanded, setExpanded] = useState(false);
    const [members, setMembers] = useState([]);
    const maxMemberCount = challenge.maxMemberCount;
    
    useEffect(() => {
        getChallengeMembersRequest(challenge.id)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                var members = JSON.parse(json);
                setMembers(members)
                return members;
            });
    }, [])

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
                        return (
                            <View key={item.id} style={[styles.row]}>
                                <View style={[styles.leftColumn, {
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    height: height(50),
                                    marginVertical: height(8)
                                }]}>
                                    <ProfileButton key={item.id} style={{ width: width(50), height: height(50), marginRight: width(8) }} />
                                    <Text>{item.displayName}</Text>
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
                    })
                }
            </View>
        );
    }

    const CollapsedLeaderBoard = () => {
        return (
            <View style={[styles.row, { justifyContent: 'center' }]}>
                <View style={{ flexDirection: 'row' }}>
                    {
                        members.slice(0, 5).map((item) => {
                            return (
                                <ProfileButton key={item.id} disabled style={{ width: width(50), height: height(50), marginLeft: width(-10) }} />
                            );
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
                        <Text style={[styles.sectionTitle, Font.B4, { color: Color.LightBlack }]}>{members.length}</Text>
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