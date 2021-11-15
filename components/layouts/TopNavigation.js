import React from "react";

import { useNavigation } from "@react-navigation/core";

import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet,
    Keyboard,
    KeyboardAvoidingView,
    Touchable
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Arrow from '../../assets/icons/evericons/arrow-left.svg'
import { height, width } from "../../util/scale";
import Font from '../../styles/font';
import Color from '../../styles/color';

const TopNavigationLayout = (props) => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, minHeight: '100%', backgroundColor: Color.White }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <KeyboardAvoidingView
                    behavior={'padding'}
                    style={styles.container}>
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
                    <View style={styles.body}>
                        {props.children}
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: width(16)
    },
    navigation: {
        marginTop: height(16)
    },
    header: {
        marginVertical: height(16),
    },
    title: {
        ...Font.H2,
        textAlign: 'center'
    },
    body: {
        flex: 1,
        marginTop: height(34)
    }
});

export default TopNavigationLayout;