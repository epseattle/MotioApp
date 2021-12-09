import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { useSelector } from 'react-redux';

import auth from '@react-native-firebase/auth';

import { height, width } from '../../../../util/scale';
import Font from '../../../../styles/font';
import Color from '../../../../styles/color';

import Months from '../../../../constants/months';
import Days from '../../../../constants/days';

import ProfileButton from '../../../../components/buttons/profile';

const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
        return 'Good morning';
    } else if (currentHour < 18) {
        return 'Good afternoon';
    } else {
        return 'Good evening';
    }
}

const getDate = () => {
    const date = new Date();
    return `${Months[date.getMonth()]} ${date.getDate()}, ${Days[date.getDay()]}`;
}

const ChallengeHeader = () => {
    const user = auth().currentUser;

    return (
        <View style={[styles.headerContainer]}>
            <View>
                <View>
                    <Text style={{
                        ...Font.H4,
                        color: Color.LightBlack,
                        marginBottom: height(8)
                    }}>{getGreeting()},</Text>
                    <Text style={{
                        ...Font.H4,
                        color: Color.LightBlack,
                        marginBottom: height(16)
                    }}>
                        {user.displayName}
                    </Text>
                </View>
                <View>
                    <Text style={{
                        ...Font.B3,
                        color: Color.LightGrey
                    }}>{getDate()}</Text>
                </View>
            </View>
            <View>
                <ProfileButton
                    style={{
                        width: width(84),
                        height: height(84)
                    }}
                    onPress={() => {
                        navigation.navigate('ProfileScreen')
                    }}
                    icon={user.photoURL}
                    user={user} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: height(24),
        marginHorizontal: width(16)
    }
});

export default ChallengeHeader;