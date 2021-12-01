import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Modal,
    TouchableWithoutFeedback,
    TouchableWithoutFeedbackBase
} from 'react-native';
import { width, height } from "../../../util/scale";
import Color from "../../../styles/color";
import Font from "../../../styles/font";

import BottomTabNavigationLayout from "../../../components/layouts/BottomTabNavigation";
import OvalButton from '../../../components/buttons/oval';
import ProfileButton from '../../../components/buttons/profile';
import LeaderBoard from "../../../components/cards/leaderboard";

import Health from '../../../assets/icons/categories/health.svg'
import Arrow from '../../../assets/icons/evericons/arrow-left.svg';
import MoreHorizontal from '../../../assets/icons/evericons/more-horizontal.svg';
import CircleChecked from '../../../assets/icons/evericons/circle-checked.svg'
import { SafeAreaView } from "react-native-safe-area-context";
import JoinConfirmationModal from "../../../components/modals/joinConfirmation";
import DetailsContextMenuModal from "../../../components/modals/detailsContextMenu";

const DetailsPendingScreen = ({ navigation }) => {
    const [enableScroll, setEnableScroll] = useState(false);
    const [JoinRequestSent, setJoinRequestSent] = useState(false);
    const [menuModalvisible, setMenuModalvisible] = useState(false);
    const [joinModalVisible, setJoinModalVisible] = useState(false);

    const modals = (
        <>
            <JoinConfirmationModal visible={joinModalVisible} setVisible={setJoinModalVisible} setJoinRequestSent={setJoinRequestSent} />
            <DetailsContextMenuModal visible={menuModalvisible} setVisible={setMenuModalvisible} />
        </>
    );

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
                    paddingHorizontal: width(8),
                    paddingVertical: height(8)
                }}>
                    <Health />
                </View>
                <View>
                    <Text style={{
                        ...Font.B3,
                        color: Color.LightGrey
                    }}>
                        5 / Week
                    </Text>
                    <Text style={{
                        ...Font.H2,
                        color: Color.LightBlack
                    }}>
                        Meditation
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
                                    <Text style={[Font.B4]}>John Terry</Text>
                                </View>
                            </View>
                            <View style={[styles.section]}>
                                <Text style={[styles.sectionTitle]}>Requirement</Text>
                                <View style={[]}>
                                    <View style={[styles.sectionContent, { alignItems: 'baseline' }]}>
                                        <Text style={{
                                            ...Font.H2,
                                            color: Color.LightBlack,
                                        }}>5</Text>
                                        <Text> times</Text>
                                    </View>
                                    <View style={[styles.sectionContent]}>
                                        <Text>per week</Text>
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
                                    style={{ textAlign: 'center', ...Font.B3 }}>Post Screen Capture of the meditation app progress</Text>
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
                        <LeaderBoard setEnableScroll={setEnableScroll} />
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
        marginBottom: height(24)
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        height: height(112),
        backgroundColor: Color.Concrete,
        marginVertical: height(8),
        borderRadius: width(5),
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