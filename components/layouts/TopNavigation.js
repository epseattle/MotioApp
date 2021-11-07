import React from "react";

import { useNavigation } from "@react-navigation/core";

import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Arrow from '../../assets/icons/evericons/arrow-left.svg'
import { height, width } from "../../util/scale";
import Font from '../../styles/font';
import Color from '../../styles/color';

const TopNavigationLayout = (props) => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.navigation}>
                <TouchableWithoutFeedback onPress={() => { navigation.goBack() }} >
                    <View>
                        <Arrow width={width(25)} height={height(25)} color="black" />
                    </View>
                </TouchableWithoutFeedback>
            </View>
            {
                props.header
                    ?
                    <View style={styles.header}>
                        <Text style={styles.title}>{props.header}</Text>
                    </View>
                    :
                    null
            }
            <View>
                {props.children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: width(20)
    },
    navigation: {

    },
    header: {
        justifyContent: 'center',
        textAlign: 'center',
        alignContent: 'center'
    },
    title: {
        ...Font.H2
    }
});

export default TopNavigationLayout;