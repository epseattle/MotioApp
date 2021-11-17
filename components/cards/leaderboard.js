import React, { useState } from "react";
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
import ChevronTop from '../../assets/icons/evericons/chevron-top.svg'
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
    },
    {
        id: 5,
        user: {
            userName: "John Terry"
        }
    },
    {
        id: 6,
        user: {
            userName: "John Terry"
        }
    }
]

const LeaderBoard = (props) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <View style={[styles.container]}>
            <View style={[styles.row]}>
                <View style={[styles.leftColumn, { flexDirection: 'row', alignItems: 'center' }]}>
                    <Text style={[styles.sectionTitle]}>Players</Text>
                </View>
                <TouchableWithoutFeedback
                    onPress={() => {
                        setExpanded(!expanded)
                        props.setEnableScroll(!expanded)
                    }}>
                    <View style={[styles.rightColumn, { flexDirection: 'row', alignItems: 'flex-start' }]}>
                        <Text style={[styles.sectionTitle, Font.B4, { color: Color.LightBlack }]}>{DATA.length}</Text>
                        <Text style={[styles.sectionTitle, Font.B4]}> / 10</Text>
                        <View style={{ marginLeft: width(5) }}>
                            {
                                expanded
                                    ?
                                    <ChevronTop color={Color.LightBlack} width={20} height={20} />
                                    :
                                    <ChevronBottom color={Color.LightBlack} width={20} height={20} />
                            }
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            {
                expanded
                    ?
                    <View>
                        <View style={[styles.row]}>
                            <View style={[styles.leftColumn]}>
                            </View>
                            <View style={[styles.rightColumn, {
                                height: height(50),
                                width: width(50),
                                justifyContent: 'center'
                            }]}>
                                <CalendarChecked color={Color.LightGrey} />
                            </View>
                        </View>
                        {
                            DATA.map((item) => {
                                return (
                                    <View id={item.id} style={[styles.row]}>
                                        <View style={[styles.leftColumn, {
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            height: height(50),
                                            marginVertical: height(8)
                                        }]}>
                                            <ProfileButton style={{ width: width(50), height: height(50), marginRight: width(8) }} />
                                            <Text>{item.user.userName}</Text>
                                        </View>
                                        <View style={[styles.rightColumn, {
                                            height: height(50),
                                            width: width(40),
                                            justifyContent: 'center'
                                        }]}>
                                            <Text>-</Text>
                                        </View>
                                    </View>
                                );
                            })
                        }
                    </View>
                    :
                    <View style={[styles.row, { justifyContent: 'center' }]}>
                        <View style={{ flexDirection: 'row' }}>
                            {
                                DATA.slice(0, 5).map((item) => {
                                    return (
                                        <ProfileButton style={{ width: width(50), height: height(50), marginLeft: width(-10) }} />
                                    );
                                })
                            }
                            {
                                DATA.length > 5
                                    ?
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{
                                            ...Font.H3,
                                            color: Color.LightGrey
                                        }}>+{DATA.length - 5}</Text>
                                    </View>
                                    :
                                    null
                            }
                        </View>
                    </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    sectionTitle: {
        ...Font.B4,
        color: Color.LightGrey,
        marginBottom: height(8)
    },
    row: {
        flexDirection: 'row'
    },
    leftColumn: {
        flex: 1
    },
    rightColumn: {

    }
});

export default LeaderBoard;