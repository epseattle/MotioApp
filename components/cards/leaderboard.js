import React from "react";
import {
    View,
    TouchableWithoutFeedback,
    StyleSheet,
    Text
} from 'react-native';
import { height, width } from "../../util/scale";
import ProfileButton from "../buttons/profile";
import CalendarChecked from '../../assets/icons/evericons/calendar-checked.svg'
import ChevronBottom from '../../assets/icons/evericons/chevron-bottom.svg'
import Color from "../../styles/color";
import Font from "../../styles/font";

const DATA = [
    {
        id: 0,
        user: {
            userName: "John Terry"
        }
    },
    {
        id: 1,
        user: {
            userName: "John Terry"
        }
    },
    {
        id: 2,
        user: {
            userName: "John Terry"
        }
    },
    {
        id: 3,
        user: {
            userName: "John Terry"
        }
    },
    {
        id: 4,
        user: {
            userName: "John Terry"
        }
    }
]

const LeaderBoard = () => {
    return (
        <View style={[styles.container]}>
            <TouchableWithoutFeedback>
                <View>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text>Player</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text>6 / 10</Text>
                                <ChevronBottom color={Color.LightBlack} width={width(15)} height={height(15)} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <View>
                                <CalendarChecked color={Color.LightGrey} width={width(24)} height={height(24)} />
                            </View>
                        </View>
                    </View>
                    {
                        DATA.map((item) => {
                            return (
                                <View key={item.id} style={[styles.row]}>
                                    <View style={[styles.name]}>
                                        <ProfileButton style={{ width: width(50), height: height(50) }} />
                                        <Text>{item.user.userName}</Text>
                                    </View>
                                    <View style={[styles.score]}>
                                        <Text>-</Text>
                                    </View>
                                </View>
                            );
                        })
                    }
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.Concrete,
        paddingVertical: height(16),
        paddingHorizontal: width(16),
        borderRadius: width(5)
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        flexDirection: 'row'
    },
    score: {

    }
});

export default LeaderBoard;