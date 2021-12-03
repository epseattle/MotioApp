import React from "react";
import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';
import { width, height } from "../../util/scale";
import Color from '../../styles/color';
import Font from "../../styles/font";
import RectangleButton from "../buttons/rectangle";
import ProfileButton from "../buttons/profile";

const SubmissionRejection = () => {
    return (
        <View>
            <View style={[styles.itemContainer]}>
                <TouchableWithoutFeedback>
                    <View style={[styles.icon]}>
                    </View>
                </TouchableWithoutFeedback>
                <View style={[styles.textContainer]}>
                    <Text style={[styles.text]}>Your submission got denied</Text>
                    <Text style={[styles.text]}>Please re-submit.</Text>
                </View>
            </View>
            <View style={[styles.buttonContainer]}>
                <RectangleButton containerStyle={{ width: width(108) }} negative label={'View Details'} />
                <RectangleButton containerStyle={{ width: width(53), marginLeft: width(10) }} label={'Ok'} />
            </View>
        </View>
    );
};

const SubmissionApproval = () => {
    return (
        <View>
            <View style={[styles.itemContainer]}>
                <TouchableWithoutFeedback>
                    <View style={[styles.icon]}>
                    </View>
                </TouchableWithoutFeedback>
                <View style={[styles.textContainer]}>
                    <Text style={[styles.text]}>Your submission was approved</Text>
                </View>
            </View>
            <View style={[styles.buttonContainer]}>
                <RectangleButton containerStyle={{ width: width(108) }} negative label={'View Details'} />
                <RectangleButton containerStyle={{ width: width(53), marginLeft: width(10) }} label={'Ok'} />
            </View>
        </View>
    );
};

const JoinRequest = () => {
    return (
        <View>
            <View style={[styles.itemContainer]}>
                <ProfileButton style={{ width: width(75), height: height(75) }} />
                <View style={[styles.textContainer]}>
                    <Text style={[styles.text]}>Steve Nash wants to join your</Text>
                    <Text style={[styles.text]}>Drink Water challenge.</Text>
                </View>
            </View>
            <View style={[styles.buttonContainer]}>
                <RectangleButton containerStyle={{ width: width(115), marginLeft: width(10) }} label={'View Profile'} />
            </View>
        </View>
    );
}

const SubmissionRequest = () => {
    return (
        <View>
            <View style={[styles.itemContainer]}>
                <TouchableWithoutFeedback>
                    <View style={[styles.icon]}>
                    </View>
                </TouchableWithoutFeedback>
                <View style={[styles.textContainer]}>
                    <Text style={[styles.text]}>Please review Submission</Text>
                    <Text style={[styles.text]}>from Steve Nash</Text>
                    <Text style={[styles.text]}>for Drink Water challenge.</Text>
                </View>
            </View>
            <View style={[styles.buttonContainer]}>
                <RectangleButton containerStyle={{ width: width(180), marginLeft: width(10) }} label={'View Submission'} />
            </View>
        </View>);
}

const NotificationCard = (props) => {
    return (
        <TouchableWithoutFeedback>
            <View style={[styles.container, props.containerStyle]}>
                {
                    {
                        'SubmissionApproval': <SubmissionApproval />,
                        'SubmissionRejection': <SubmissionRejection />,
                        'JoinRequest': <JoinRequest />,
                        'SubmissionRequest': <SubmissionRequest />
                    }[props.type]
                }
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: Color.LightGrey,
        paddingBottom: height(20),
        paddingTop: height(28)
    },
    icon: {
        width: width(75),
        height: height(75),
        backgroundColor: Color.LightGrey,
        borderRadius: width(75)
    },
    text: {
        ...Font.B3
    },
    textContainer: {
        paddingLeft: width(15)
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: height(7)
    }
});

export default NotificationCard;