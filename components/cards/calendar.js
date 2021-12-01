import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';

import Days from '../../constants/days'
import Months from '../../constants/months';
import Font from '../../styles/font';
import { height, width } from '../../util/scale';
import Color from '../../styles/color'

import CalendarDates from '../../assets/icons/evericons/calendar-dates.svg';
import ChevronLeft from '../../assets/icons/evericons/chevron-left.svg';
import ChevronRight from '../../assets/icons/evericons/chevron-right.svg';

const dates = [];
const today = new Date();
const startDate = new Date(new Date() - 3 * 24 * 3600 * 1000);
for (let i = 0; i < 5; i++) {
    startDate.setDate(startDate.getDate() + 1);
    dates.push(new Date(startDate));
}

const CollapsedCalendar = () => {
    return (
        <>
            <View style={{
                marginBottom: height(16)
            }}>
                <Text
                    style={{
                        ...Font.H2,
                        color: Color.LightBlack
                    }}>{Days[today.getDay()].slice(0, 3)}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                {
                    dates.map((item, index) => {
                        return (
                            <View
                                key={index}
                                style={[
                                    styles.buttonContainer,
                                    item.getDate() == today.getDate() ? styles.buttonLarge : styles.buttonSmall]}>
                                <Text style={{
                                    ...Font.B2,
                                    color: Color.LightBlack
                                }}>{item.getDate()}</Text>
                            </View>
                        );
                    })
                }
            </View>
            <View style={{
                marginTop: height(32)
            }}>
                <Text style={{
                    ...Font.B3,
                    color: Color.LightBlack
                }}>* Click the date to upload & see photos</Text>
            </View>
        </>
    );
}

const ExpandedCalendar = (props) => {
    var date = new Date();
    var currentMonth = date.getMonth();
    while (date.getMonth() != currentMonth - 1) {
        date = new Date(date - 24 * 3600 * 1000);
    }
    while (date.getDay() != 0) {
        date = new Date(date - 24 * 3600 * 1000);
    }

    var month = [];
    for (let i = 0; i < 5; i++) {
        var week = []
        for (let i = 0; i < 7; i++) {
            week.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        month.push(week)
    }

    return (
        <>
            <View>
                {month.map((item, index) => {
                    return (
                        <View key={index}
                            style={{
                                flexDirection: 'row'
                            }}>
                            {
                                month[index].map((item, index) => {
                                    return (
                                        <View key={'week' + index}
                                            style={[
                                                styles.buttonContainer,
                                                styles.buttonSmall,
                                                today.getMonth() == item.getMonth()
                                                    ?
                                                    {
                                                        borderColor: Color.Primary
                                                    }
                                                    :
                                                    {
                                                        borderColor: Color.LightGrey
                                                    }
                                                ,
                                                today.getDate() == item.getDate()
                                                    ?
                                                    {
                                                        borderColor: Color.Secondary,
                                                        borderWidth: width(2)
                                                    }
                                                    :
                                                    null
                                                ,
                                                {
                                                    marginHorizontal: width(4),
                                                    marginVertical: height(4)
                                                }
                                            ]}>
                                            <Text>{item.getDate()}</Text>
                                        </View>
                                    );
                                })
                            }
                        </View>
                    );
                })}
            </View>

        </>
    );
}

const CalendarCard = () => {
    const [expanded, setExpanded] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

    return (
        <View style={{
            alignItems: 'center',
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                marginBottom: height(16)
            }}>
                <TouchableWithoutFeedback>
                    <View style={{ marginHorizontal: width(8) }}>
                        <ChevronLeft color={Color.LightGrey} />
                    </View>
                </TouchableWithoutFeedback>
                {
                    expanded
                        ?
                        <Text
                            style={{
                                ...Font.B3,
                                color: Color.LightBlack
                            }}>
                            {Months[currentMonth]}
                        </Text>
                        :
                        <Text
                            style={{
                                ...Font.B3,
                                color: Color.LightBlack
                            }}>
                            {Months[dates[0].getMonth()].slice(0, 3)} {dates[0].getDate()} - {Months[dates[4].getMonth()].slice(0, 3)} {dates[4].getDate()}
                        </Text>
                }
                <TouchableWithoutFeedback>
                    <View style={{ marginHorizontal: width(8) }}>
                        <ChevronRight color={Color.LightGrey} />
                    </View>
                </TouchableWithoutFeedback>
                <View style={{
                    position: 'absolute',
                    right: 0
                }}>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            setExpanded(!expanded)
                        }}>
                        <View style={{
                            alignItems: 'flex-end',
                            width: width(50)
                        }}>
                            <CalendarDates color={Color.LightBlack} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <>
                {
                    expanded
                        ?
                        <ExpandedCalendar />
                        :
                        <CollapsedCalendar />
                }
            </>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    buttonContainer: {
        borderWidth: width(1),
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: width(8)
    },
    buttonSmall: {
        width: width(40),
        height: height(40),
        borderRadius: width(20),
    },
    buttonLarge: {
        width: width(60),
        height: height(60),
        borderRadius: width(30),
    }
});

export default CalendarCard;