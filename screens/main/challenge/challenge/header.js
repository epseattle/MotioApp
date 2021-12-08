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
        return 'Good Morning';
    } else if (currentHour < 18) {
        return 'Good Afternoon';
    } else {
        return 'Good Evening';
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
                        ...Font.H2,
                        color: Color.LightBlack
                    }}>{getGreeting()}!</Text>
                </View>
                <View>
                    <Text style={{
                        ...Font.B3,
                        color: Color.LightBlack
                    }}>{getDate()}</Text>
                </View>
            </View>
            <View>
                <ProfileButton
                    style={{
                        width: width(70),
                        height: height(70)
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
        justifyContent: 'space-between'
    }
});

export default ChallengeHeader;