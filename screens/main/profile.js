import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Pressable
} from 'react-native';

import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/userSlice';

import auth from '@react-native-firebase/auth';

import { height, width } from '../../util/scale';
import Font from '../../styles/font';
import Color from '../../styles/color';

import TopNavigationLayout from '../../components/layouts/TopNavigation';
import ProfileButton from '../../components/buttons/profile';
import RectangleButton from '../../components/buttons/rectangle';
import TextInput from '../../components/inputs/text';
import PencilCreate from '../../assets/icons/evericons/pencil-create.svg';

const ProfileScreen = ({ route }) => {
    const dispatch = useDispatch();
    const [enabledEdit, setEnableEdit] = useState(false);
    const user = auth().currentUser;

    return (
        <TopNavigationLayout
            secondary={
                <Pressable>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            setEnableEdit(!enabledEdit);
                        }}>
                        <View>
                            <PencilCreate color={Color.LightBlack} />
                        </View>
                    </TouchableWithoutFeedback>
                </Pressable>
            }>
            <View style={{
                alignItems: 'center'
            }}>
                <View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <ProfileButton
                        edit={enabledEdit ? true : false}
                        style={{
                            width: width(84),
                            height: height(84),
                            marginBottom: height(16)
                        }}
                        onPress={() => {
                            navigation.navigate('ProfileScreen')
                        }}
                        icon={user.photoURL}
                        user={user} />
                    {
                        enabledEdit
                            ?
                            <View>
                                <TextInput
                                    style={{
                                        marginVertical: height(8),
                                        marginLeft: width(8)
                                    }}
                                    setValue={(text) => {
                                        console.log(text)
                                    }}
                                    defaultValue={user.displayName} />
                                <TextInput
                                    style={{
                                        marginVertical: height(8),
                                        marginLeft: width(8)
                                    }}
                                    setValue={(text) => {
                                        console.log(text)
                                    }}
                                    defaultValue={user.email} />
                                <RectangleButton
                                    negative
                                    containerStyle={{
                                        width: width(150),
                                        marginVertical: height(8)
                                    }}
                                    onPress={() => {
                                        alert('Set Email')
                                    }}
                                    label={'Save Changes'} />
                            </View>
                            :
                            <View style={{
                                marginLeft: width(8)
                            }}>
                                <Text style={{
                                    ...Font.H3
                                }}>
                                    {user.displayName}
                                </Text>
                                <Text style={{
                                    ...Font.H3
                                }}>
                                    {user.email}
                                </Text>
                            </View>
                    }
                </View>
                <RectangleButton
                    negative
                    containerStyle={{
                        width: width(100),
                        marginVertical: height(8)
                    }}
                    onPress={() => {
                        auth()
                            .signOut()
                            .then(() => {
                                dispatch(signOut())
                                alert('user has been signed out.')
                            });
                    }}
                    label={'Sign out'} />
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