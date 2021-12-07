import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { useSelector } from 'react-redux';

import { height, width } from '../../../../util/scale';
import Font from '../../../../styles/font';
import Color from '../../../../styles/color';

import CircleChecked from '../../../../assets/icons/evericons/circle-checked.svg'
import MoreHorizontal from '../../../../assets/icons/evericons/more-horizontal.svg';

import CategoriesIcon from '../../../../assets/icons/categories/categoriesIcon';
import OvalButton from '../../../../components/buttons/oval';
import JoinConfirmationModal from '../../../../components/modals/joinConfirmation';


const DetailsHeader = (props) => {
    const challenge = useSelector(state => state.challenge.selectedChallenge);
    const [joinRequestSent, setJoinRequestSent] = useState(false);
    const [joinModalVisible, setJoinModalVisible] = useState(false);

    const JoinButton = () => {
        return (
            <OvalButton
                onPress={() => {
                    setJoinModalVisible(true);
                }}
                title='Join'
                containerStyle={{ width: width(92) }} />
        );
    }
    const PendingButton = () => {
        return (
            <OvalButton containerStyle={{ width: width(92) }}>
                <MoreHorizontal color={Color.White} width={width(24)} height={height(24)} />
            </OvalButton>
        );
    }
    const CheckButton = () => {
        return (
            <OvalButton containerStyle={{ width: width(92) }}>
                <CircleChecked color={Color.White} width={width(24)} height={height(24)} />
            </OvalButton>
        );
    }

    return (
        <View style={[styles.headerContainer]}>
            <View style={{
                width: width(75),
                height: height(75),
                backgroundColor: Color.Concrete,
                borderRadius: width(8),
            }}>
                <CategoriesIcon category={challenge.category} />
            </View>
            <View>
                <Text style={{
                    ...Font.B3,
                    color: Color.LightGrey
                }}>
                    {challenge.schedule.frequency.count} / {challenge.schedule.frequency.unit}
                </Text>
                <Text style={{
                    ...Font.H2,
                    color: Color.LightBlack
                }}>
                    {challenge.title}
                </Text>
                <Text style={{
                    ...Font.B3,
                    color: Color.LightGrey
                }}>
                    Starts tomorrow
                </Text>
            </View>
            {
                !joinRequestSent
                    ?
                    <JoinButton />
                    :
                    <PendingButton />
            }
            <JoinConfirmationModal visible={joinModalVisible} setVisible={setJoinModalVisible} setJoinRequestSent={setJoinRequestSent} />
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: height(34),
        marginBottom: height(8)
    },
});

export default DetailsHeader;