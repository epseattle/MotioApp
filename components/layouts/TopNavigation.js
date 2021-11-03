import React from "react";

import { useNavigation } from "@react-navigation/core";

import {
    View,
    Button,
    StyleSheet
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Arrow from '../../assets/icons/evericons/arrow-left.svg'

const TopNavigationLayout = (props) => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Arrow width="50" height="50" color="black" />
                <Button title='back' onPress={() => { navigation.goBack() }} />
            </View>
            <View>
                {props.children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default TopNavigationLayout;