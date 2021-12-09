import React from 'react';
import {
    View,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

import { height, width } from '../../util/scale';

import You from '../../assets/icons/custom/you.svg'
import Color from '../../styles/color';
import { useNavigation } from '@react-navigation/core';
import ProfileIcon from '../../assets/icons/profile/profileIcon';
import PencilCreate from '../../assets/icons/evericons/pencil-create.svg';

const ProfileButton = (props) => {
    const navigation = useNavigation();
    const src = props.url;
    const icon = props.icon;
    const edit = props.edit;

    return (
        <TouchableWithoutFeedback onPress={() => {
            if (!props.disabled) {
                navigation.navigate("ProfileScreen", { user: props.user })
            }
        }}>
            <View style={[styles.container, props.style, props.highlight ? styles.highlight : null]}>
                {
                    icon
                        ?
                        <ProfileIcon profile={icon} />
                        :
                        <ProfileIcon random />
                }
                {
                    src
                        ?
                        <ProfileIcon source={src} />
                        :
                        null
                }
                {
                    edit
                        ?
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: Color.Primary,
                            width: width(30),
                            height: height(30),
                            borderRadius: width(30),
                            marginTop: height(-29),
                            marginRight: width(-56)
                        }}>
                            <PencilCreate color={Color.White} width={width(16)} height={height(16)} />
                        </View>
                        :
                        null
                }
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: width(36),
        width: width(50),
        height: height(50)
    },
    highlight: {
        borderWidth: width(2),
        borderColor: Color.Primary
    }
});

export default ProfileButton;