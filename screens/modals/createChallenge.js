import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';
import ModalLayout from "../../components/layouts/Modal";

const CreateChallengeScreen = () => {
    return (
        <ModalLayout>
            <View>
                <View>
                    <Text>Start New Challenge</Text>
                </View>
                <TouchableWithoutFeedback>
                    <Text>Cancel</Text>
                </TouchableWithoutFeedback>
            </View>
            <ScrollView>
                <View>

                </View>
                <View>

                </View>
            </ScrollView>
        </ModalLayout>
    );
};

const styles = StyleSheet.create({

});

export default CreateChallengeScreen;