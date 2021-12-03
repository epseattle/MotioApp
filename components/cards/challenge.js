import React, { useEffect } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

import { height, width } from '../../util/scale';
import Color from '../../styles/color';
import Font from '../../styles/font';
import { useNavigation } from '@react-navigation/core';

import CameraButton from '../buttons/camera';
import PendingButton from '../buttons/pending';
import ApprovedButton from '../buttons/approved';
import CategoriesIcon from '../../assets/icons/categories/categoriesIcon';

const ChallengeCard = (props) => {
    const navigation = useNavigation();
    const title = props.challenge?.title;
    const category = props.challenge?.category;

    return (
        <TouchableWithoutFeedback onPress={() => props.onPress()}>
            <View style={{
                flexDirection: 'row',
                height: height(120),
                width: width(330),
                alignItems: 'center',
                marginVertical: height(8),
                paddingVertical: height(20),
                paddingHorizontal: width(20),
                backgroundColor: Color.White,
                shadowColor: "black",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3,
                paddingVertical: 10,
                borderRadius: width(8)
            }}>
                <View style={{
                    flexDirection: 'row',
                    flex: 1
                }}>
                    <View style={{
                        justifyContent: 'center',
                        width: width(75),
                        height: height(75),
                        borderRadius: width(8),
                        backgroundColor: Color.Concrete
                    }}>
                        <CategoriesIcon category={category ? category : ''} />
                    </View>
                    <View style={{
                        marginLeft: width(15),
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            ...Font.H3
                        }}>
                            {title}
                        </Text>
                        {
                            props.ongoing || !props.upcoming
                                ?
                                <Text style={{
                                    ...Font.B2,
                                    marginTop: height(15)
                                }}>45%</Text>
                                :
                                <Text style={{
                                    ...Font.B2,
                                    marginTop: height(15)
                                }}>Starting in 5 days</Text>
                        }
                    </View>
                </View>
                {
                    props.ongoing || !props.upcoming
                        ?
                        {
                            'Pending': <PendingButton />,
                            'Approved': <ApprovedButton />,
                            'Incomplete': <CameraButton />,
                        }[props.state]
                        :
                        null
                }
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
    }
});

export default ChallengeCard;