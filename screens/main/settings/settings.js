import React from "react";
import { useDispatch } from 'react-redux';
import { signOut } from '../../../redux/userSlice';
import auth from '@react-native-firebase/auth';

import {
    View,
    Text,
    Button,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

import BottomTabNavigationLayout from '../../../components/layouts/BottomTabNavigation';
import TextInput from '../../../components/inputs/text';
import Color from "../../../styles/color";
import Font from "../../../styles/font";
import { height, width } from "../../../util/scale";

const SettingsScreen = () => {
    const dispatch = useDispatch();
    return (
        <BottomTabNavigationLayout>
            <View style={{
                alignSelf: 'center',
                marginVertical: height(20)
            }}>
                <Text style={{ ...Font.H2 }}>Settings</Text>
            </View>
            {/* <View style={{ marginBottom: height(16) }}>
                <TextInput style={{ backgroundColor: Color.Concrete, borderWidth: 0 }} />
            </View> */}
            <View style={[styles.listContainer]}>
                <TouchableWithoutFeedback>
                    <View style={[styles.itemContainer]}>
                        <View style={[styles.itemIcon]}>
                        </View>
                        <View style={[styles.itemLabel]}>
                            <Text style={[styles.label]}>Account</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={[styles.itemContainer]}>
                        <View style={[styles.itemIcon]}>
                        </View>
                        <View style={[styles.itemLabel]}>
                            <Text style={[styles.label]}>Notification</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={[styles.itemContainer]}>
                        <View style={[styles.itemIcon]}>
                        </View>
                        <View style={[styles.itemLabel]}>
                            <Text style={[styles.label]}>Help & Support</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={[styles.itemContainer]}>
                        <View style={[styles.itemIcon]}>
                        </View>
                        <View style={[styles.itemLabel]}>
                            <Text style={[styles.label]}>Legal</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => {
                    auth()
                        .signOut()
                        .then(() => {
                            dispatch(signOut())
                            console.log('user has been signed out.')
                        });
                }} >
                    <View style={[styles.logoutContainer]}>
                        <View style={[styles.itemIcon]}>
                        </View>
                        <View style={[styles.itemLabel, styles.logout]}>
                            <Text style={[styles.label]}>Log Out</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </BottomTabNavigationLayout>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: Color.Concrete,
        borderRadius: width(3),
        flex: 1,
        marginBottom: height(10)
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: height(60),
        marginBottom: height(16),
        marginHorizontal: width(16)
    },
    itemIcon: {
        height: height(32),
        width: width(32),
        backgroundColor: Color.Secondary
    },
    itemLabel: {
        marginLeft: width(16),
        height: height(60),
        flex: 1,
        justifyContent: 'center',
        width: '100%'
    },
    label: {
        ...Font.B3
    },
    logout: {
        borderTopColor: Color.LightGrey,
        borderBottomColor: Color.LightGrey,
    },
    logoutContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: height(60),
        marginVertical: height(16),
        marginHorizontal: width(16),
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }
});

export default SettingsScreen;