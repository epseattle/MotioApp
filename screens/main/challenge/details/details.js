// React
import React, { useEffect, useState } from 'react';
import {
    View,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

// Styles
import { width, height } from '../../../../util/scale';

// Icons
import Arrow from '../../../../assets/icons/evericons/arrow-left.svg';
import MoreHorizontal from '../../../../assets/icons/evericons/more-horizontal.svg';

// Components
import BottomTabNavigationLayout from '../../../../components/layouts/BottomTabNavigation';
import DetailsBody from './body';
import DetailsHeader from './header';
import DetailsContextMenuModal from '../../../../components/modals/detailsContextMenu';

const DetailsScreen = ({ route, navigation }) => {
    const [menuModalvisible, setMenuModalvisible] = useState(false);

    const TopNavigation = () => {
        return (
            <View style={styles.navigationContainer}>
                <TouchableWithoutFeedback onPress={() => { navigation.goBack() }} >
                    <View>
                        <Arrow width={width(25)} height={height(25)} color="black" />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => { setMenuModalvisible(true) }} >
                    <View>
                        <MoreHorizontal width={width(25)} height={height(25)} color="black" />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }

    return (
        <BottomTabNavigationLayout>
            <TopNavigation />
            <DetailsHeader />
            <DetailsBody />
            <DetailsContextMenuModal visible={menuModalvisible} setVisible={setMenuModalvisible} />
        </BottomTabNavigationLayout>
    );
}

const styles = StyleSheet.create({
    navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height(16)
    }
})

export default DetailsScreen;