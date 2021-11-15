import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

import TopNavigationLayout from "../../../components/layouts/TopNavigation";
import { width, height } from "../../../util/scale";
import Health from '../../../assets/icons/categories/health.svg'
import OvalButton from '../../../components/buttons/oval';
import ProfileButton from '../../../components/buttons/profile';
import Color from "../../../styles/color";
import Font from "../../../styles/font";
import LeaderBoard from "../../../components/cards/leaderboard";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const DetailsScreen = ({ navigation }) => {
    return (
        <TopNavigationLayout>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: height(75),
                marginBottom: height(20),
            }}>
                <View style={{
                    justifyContent: 'center',
                    width: width(75),
                    height: height(75),
                    backgroundColor: "#F4F4F4"
                }}>
                    <Health width={width(65)} height={height(65)} />
                </View>
                <View style={{ flex: 1, marginLeft: width(16) }}>
                    <Text>5 / Week</Text>
                    <Text>Meditation</Text>
                    <Text>Starts Tomorrow</Text>
                </View>
                <OvalButton title='Join' containerStyle={{ width: width(92) }} />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={[styles.cardRow, { flexDirection: 'row' }]}>
                    <View style={[styles.section]}>
                        <Text style={[styles.sectionHeader]}>Host</Text>
                        <View style={[styles.sectionContent, { flexDirection: 'row' }]}>
                            <ProfileButton style={{ width: width(50), height: height(50) }} />
                            <Text style={{ marginLeft: width(8) }}>John Terry</Text>
                        </View>
                    </View>
                    <View style={[styles.section]}>
                        <Text style={[styles.sectionHeader]}>Requirement</Text>
                        <View style={[styles.sectionContent]}>
                            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                                <Text style={{ ...Font.H2 }}>5</Text>
                                <Text style={{ ...Font.B3 }}> times</Text>
                            </View>
                            <Text style={{ ...Font.B3 }}>per week</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.cardRow, { flexDirection: 'row' }]}>
                    <View style={[styles.section]}>
                        <Text style={[styles.sectionHeader]}>Rule</Text>
                        <View style={[styles.sectionContent]}>
                        </View>
                    </View>
                </View>
                <View style={[styles.cardRow, { flexDirection: 'row' }]}>
                    <View style={[styles.section]}>
                        <Text style={[styles.sectionHeader]}>Entry fee</Text>
                        <View style={[styles.sectionContent, { flexDirection: 'row' }]}>
                            <ProfileButton style={{ width: width(50), height: height(50) }} />
                            <Text style={{ marginLeft: width(8) }}>John Terry</Text>
                        </View>
                    </View>
                    <View style={[styles.section]}>
                        <Text style={[styles.sectionHeader]}>Prize</Text>
                        <View style={[styles.sectionContent]}>
                            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                                <Text style={{ ...Font.H2 }}>5</Text>
                                <Text style={{ ...Font.B3 }}> times</Text>
                            </View>
                            <Text style={{ ...Font.B3 }}>per week</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <LeaderBoard />
                </View>
            </ScrollView>
        </TopNavigationLayout>
    );
};

const styles = StyleSheet.create({
    cardRow: {
        backgroundColor: Color.Concrete,
        height: height(112),
        borderRadius: width(5),
        paddingVertical: height(16),
        paddingHorizontal: width(19),
        marginBottom: height(8)
    },
    section: {
        flex: 1
    },
    sectionHeader: {
        color: Color.LightGrey,
        ...Font.B4,
        marginBottom: height(8)
    },
    sectionContent: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default DetailsScreen;