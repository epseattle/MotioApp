import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

const ChallengeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Text>Hello, Challenge</Text>
            <Button title='DetailsScreen' onPress={() => { navigation.navigate('DetailsScreen') }} />
            <Button title='CreateChallengeScreen' onPress={() => { navigation.navigate('CreateChallengeScreen') }} />
            <Button title='SubmissionScreen' onPress={() => { navigation.navigate('SubmissionScreen') }} />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ChallengeScreen;