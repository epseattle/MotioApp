import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Modal,
    TouchableWithoutFeedback
} from 'react-native';

import { useSelector } from "react-redux";

import { getChallengeMembersRequest } from "../../../clients/challengeClient";

import { width, height } from "../../../util/scale";
import Color from "../../../styles/color";
import Font from "../../../styles/font";

import BottomTabNavigationLayout from "../../../components/layouts/BottomTabNavigation";
import OvalButton from '../../../components/buttons/oval';
import ProfileButton from '../../../components/buttons/profile';
import LeaderBoard from "../../../components/cards/leaderboard";

import CategoriesIcon from "../../../assets/icons/categories/categoriesIcon";
import Arrow from '../../../assets/icons/evericons/arrow-left.svg';
import MoreHorizontal from '../../../assets/icons/evericons/more-horizontal.svg';
import CircleChecked from '../../../assets/icons/evericons/circle-checked.svg'
import { SafeAreaView } from "react-native-safe-area-context";
import JoinConfirmationModal from "../../../components/modals/joinConfirmation";
import DetailsContextMenuModal from "../../../components/modals/detailsContextMenu";

const DetailsPendingScreen = ({ route, navigation }) => {
    const challenge = useSelector(state => state.challenge.selectedChallenge);
    const [enableScroll, setEnableScroll] = useState(false);
    const [JoinRequestSent, setJoinRequestSent] = useState(false);
    const [menuModalvisible, setMenuModalvisible] = useState(false);
    const [joinModalVisible, setJoinModalVisible] = useState(false);
    const [members, setMembers] = useState([]);
    const [ownerDisplayName, setOwnerDisplayName] = useState();

    const modals = (
        <>
            <JoinConfirmationModal visible={joinModalVisible} setVisible={setJoinModalVisible} setJoinRequestSent={setJoinRequestSent} />
            <DetailsContextMenuModal visible={menuModalvisible} setVisible={setMenuModalvisible} />
        </>
    );

    useEffect(() => {
        getChallengeMembersRequest(challenge.id)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                var members = JSON.parse(json);
                setMembers(members)
                return members;
            })
            .then((members) => {
                var index = members.findIndex(member => member.id === challenge.ownerId);
                console.log(members);
                console.log(index);
                setOwnerDisplayName(members[index].displayName);
            });
    }, [])

    return (
        <BottomTabNavigationLayout modal={modals}>
            <View style={styles.navigation}>
                <TouchableWithoutFeedback onPress={() => { navigation.goBack() }} >
                    <View>
                        <Arrow width={width(25)} height={height(25)} color="black" />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => { setMenuModalvisible(true) }} >
                    <View>
                        <MoreHorizontal width={width(25)} height={height(25)} color="black" />
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={[styles.headerContainer]}>
                <View style={{
                    width: width(75),
                    height: height(75),
                    backgroundColor: Color.Concrete,
                    borderRadius: width(8),
                }}>
                    <CategoriesIcon category={challenge.category} />
                </View>
                <View>
                    <Text style={{
                        ...Font.B3,
                        color: Color.LightGrey
                    }}>
                        {challenge.schedule.frequency.count} / {challenge.schedule.frequency.unit}
                    </Text>
                    <Text style={{
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
                    JoinRequestSent
                        ?
                        <OvalButton containerStyle={{ width: width(92) }}>
                            <CircleChecked color={Color.White} width={width(24)} height={height(24)} />
                        </OvalButton>
                        :
                        <OvalButton
                            onPress={() => {
                                if (!JoinRequestSent) {
                                    setJoinModalVisible(true);
                                }
                            }}
                            title='Join'
                            containerStyle={{ width: width(92) }} />
                }
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEnabled={enableScroll}>
                <View onStartShouldSetResponder={() => true}>
                    <View style={[styles.card]}>
                        <View style={[styles.row]}>
                            <View style={[styles.section]}>
                                <Text style={[styles.sectionTitle]}>Host</Text>
                                <View style={[styles.sectionContent]}>
                                    <ProfileButton
                                        highlight
                                        style={{
                                            width: width(50),
                                            height: height(50),
                                            marginRight: width(8)
                                        }} />
                                    <Text style={[Font.B4]}>{ownerDisplayName}</Text>
                                </View>
                            </View>
                            <View style={[styles.section]}>
                                <Text style={[styles.sectionTitle]}>Requirement</Text>
                                <View style={[]}>
                                    <View style={[styles.sectionContent, { alignItems: 'baseline' }]}>
                                        <Text style={{
                                            ...Font.H2,
                                            color: Color.LightBlack,
                                        }}>{challenge.schedule.frequency.count}</Text>
                                        <Text> time{challenge.schedule.frequency.count > 1 ? 's' : null}</Text>
                                    </View>
                                    <View style={[styles.sectionContent]}>
                                        <Text>per {challenge.schedule.frequency.unit}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.card, { height: 'auto' }]}>
                        <View style={[styles.section]}>
                            <Text style={[styles.sectionTitle]}>Rule</Text>
                        </View>
                        <View style={[styles.sectionContent]}>
                            <View style={{
                                minWidth: width(50),
                                minHeight: height(60),
                                alignItems: 'flex-end',
                                alignSelf: 'flex-start'
                            }}>
                                <Text style={{ ...Font.B3 }}>"</Text>
                            </View>
                            <View style={{
                                flex: 1,
                                alignItems: 'center',
                            }}>
                                <Text
                                    style={{ textAlign: 'center', ...Font.B3 }}>{challenge.rules[0]}</Text>
                            </View>
                            <View style={{
                                minWidth: width(50),
                                alignSelf: 'flex-end'
                            }}>
                                <Text style={{ ...Font.B3 }}>"</Text>
                            </View>
                        </View>
                    </View>
                    {/* To be enabled once payment goes live */}
                    {/* <View style={[styles.card]}>
                        <View style={[styles.section]}>
                            <Text>Entry fee</Text>
                        </View>
                        <View style={[styles.section]}>
                            <Text>Prize</Text>
                        </View>
                    </View> */}
                    <View style={[styles.card, { height: 'auto' }]}>
                        <LeaderBoard setEnableScroll={setEnableScroll} challenge={challenge} members={members} />
                    </View>
                </View>
            </ScrollView>
        </BottomTabNavigationLayout>
    );
};

const styles = StyleSheet.create({
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height(16)
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: height(34),
        marginBottom: height(8)
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        height: height(112),
        backgroundColor: Color.Concrete,
        marginVertical: height(8),
        borderRadius: width(8),
        paddingHorizontal: width(16),
        paddingVertical: height(16)
    },
    section: {
        flex: 1
    },
    sectionTitle: {
        ...Font.B4,
        color: Color.LightGrey,
        marginBottom: height(8)
    },
    sectionContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
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

export default DetailsPendingScreen;