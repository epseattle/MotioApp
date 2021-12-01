import React from 'react';
import {
    View
} from 'react-native';

import TopNavigationLayout from '../../components/layouts/TopNavigation';
import ProfileIcon from '../../assets/icons/profile/profileIcon';
import { height, width } from '../../util/scale';

const ProfileScreen = () => {
    return (
        <TopNavigationLayout>
            <ProfileIcon profile={'blue1'} width={width(60)} height={height(60)}/>
            <ProfileIcon profile={'blue2'} width={width(60)} height={height(60)}/>
            <ProfileIcon profile={'blue3'} width={width(60)} height={height(60)}/>
            <ProfileIcon profile={'pink1'} width={width(60)} height={height(60)}/>
            <ProfileIcon profile={'pink2'} width={width(60)} height={height(60)}/>
            <ProfileIcon profile={'pink3'} width={width(60)} height={height(60)}/>
            <ProfileIcon profile={'pink4'} width={width(60)} height={height(60)}/>
        </TopNavigationLayout>
    );
}

export default ProfileScreen;