import React from "react";
import {
    Text,
    StyleSheet
} from 'react-native';

import TopNavigationLayout from "../../../components/layouts/TopNavigation";

const DetailsScreen = ({ navigation }) => {
    return (
        <TopNavigationLayout>
            <Text>Hello, Details</Text>
        </TopNavigationLayout>
    );
};

const styles = StyleSheet.create({

});

export default DetailsScreen;