import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import TopNavigationLayout from '../../components/layouts/TopNavigation';
import ProfileIcon from '../../assets/icons/profile/profileIcon';
import { height, width } from '../../util/scale';

const ProfileScreen = () => {
    return (
        <TopNavigationLayout>
            <View style={[styles.profile]}>
                <ProfileIcon profile={'blue1'} />
            </View>
            <View style={[styles.profile]}>
                <ProfileIcon profile={'blue2'} />
            </View>
            <View style={[styles.profile]}>
                <ProfileIcon profile={'blue2'} />
            </View>
            <View style={{ ...styles.profile }}>
                <ProfileIcon profile={'blue3'} />
            </View>
            <View style={{ ...styles.profile }}>
                <ProfileIcon profile={'pink1'} />
            </View>
            <View style={{ ...styles.profile }}>
                <ProfileIcon profile={'pink2'} />
            </View>
            <View style={{ ...styles.profile }}>
                <ProfileIcon profile={'pink3'}/>
            </View>
            <View style={{ ...styles.profile }}>
                <ProfileIcon profile={'pink4'}/>
            </View>
        </TopNavigationLayout>
    );
}

const styles = StyleSheet.create({
    profile: {
        justifyContent: 'center',
        width: width(75),
        height: height(75),
        backgroundColor: 'black',
        margin: 2,
        padding: 8
    }
});

export default ProfileScreen;