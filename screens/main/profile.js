import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/userSlice';

import auth from '@react-native-firebase/auth';

import TopNavigationLayout from '../../components/layouts/TopNavigation';
import ProfileIcon from '../../assets/icons/profile/profileIcon';
import { height, width } from '../../util/scale';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const ProfileScreen = () => {
    const dispatch = useDispatch();
    const user = auth().currentUser;

    return (
        <TopNavigationLayout>
            <Text>
                {user.displayName}
            </Text>
            <TouchableWithoutFeedback
                onPress={() => {
                    auth()
                        .signOut()
                        .then(() => {
                            dispatch(signOut())
                            alert('user has been signed out.')
                        });
                }}>
                <Text>
                    Sign out
                </Text>
            </TouchableWithoutFeedback>
            {/* <View style={[styles.profile]}>
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
                <ProfileIcon profile={'pink3'} />
            </View>
            <View style={{ ...styles.profile }}>
                <ProfileIcon profile={'pink4'} />
            </View> */}
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