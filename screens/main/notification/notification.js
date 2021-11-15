import React, { useState } from "react";
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';

import BottomTabNavigationLayout from '../../../components/layouts/BottomTabNavigation';
import NotificationCard from "../../../components/cards/notification";
import Color from '../../../styles/color';
import Font from "../../../styles/font";
import { height, width } from "../../../util/scale";
import { FlatList } from "react-native-gesture-handler";

const DATA = [
    {
        id: 0,
        type: 'SubmissionRejection'
    },
    {
        id: 1,
        type: 'SubmissionApproval'
    },
    {
        id: 2,
        type: 'JoinRequest'
    },
    {
        id: 3,
        type: 'SubmissionRequest'
    }
]

const NotificationScreen = () => {
    const [selected, setSelected] = useState('All');
    return (
        <BottomTabNavigationLayout>
            <View style={[styles.filterButtonsContainer]}>
                <TouchableWithoutFeedback
                    onPress={() => {
                        setSelected('All')
                    }}>
                    <View style={[
                        styles.filterButton,
                        selected === 'All' ? styles.selected : null,
                        selected === 'All' ? styles.selectedLeft : null]}>
                        <Text style={[styles.filterButtonLabel, selected === 'All' ? styles.selected : null]}>All</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => {
                        setSelected('Challenge')
                    }}>
                    <View style={[styles.filterButton, styles.middleButton, selected === 'Challenge' ? styles.selected : null]}>
                        <Text style={[styles.filterButtonLabel, selected === 'Challenge' ? styles.selected : null]}>Challenge</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => {
                        setSelected('Host')
                    }}>
                    <View style={[
                        styles.filterButton,
                        selected === 'Host' ? styles.selected : null,
                        selected === 'Host' ? styles.selectedRight : null]}>
                        <Text style={[styles.filterButtonLabel, selected === 'Host' ? styles.selected : null]}>Host</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    contentContainerStyle={{
                        paddingVertical: height(12)
                    }}
                    data={DATA}
                    renderItem={({ item }) => {
                        return (
                            <NotificationCard type={item.type} />
                        );
                    }}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </BottomTabNavigationLayout>
    );
};

const styles = StyleSheet.create({
    filterButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: height(40),
        borderColor: Color.Primary,
        borderWidth: width(1),
        borderRadius: height(20),
        marginTop: height(8)
    },
    filterButton: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    filterButtonLabel: {
        ...Font.B3,
        color: Color.Primary
    },
    middleButton: {
        borderLeftColor: Color.Primary,
        borderRightColor: Color.Primary,
        borderLeftWidth: 1,
        borderRightWidth: 1
    },
    selected: {
        backgroundColor: Color.Primary,
        color: Color.White
    },
    selectedLeft: {
        borderTopLeftRadius: height(20),
        borderBottomLeftRadius: height(20)
    },
    selectedRight: {
        borderTopRightRadius: height(20),
        borderBottomRightRadius: height(20)
    }
});

export default NotificationScreen;