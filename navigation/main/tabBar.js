import Color from '../../styles/color';
import React from 'react';
import { View, Text, TouchableOpacity, ColorPropType } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Challenge from '../../assets/icons/custom/flame.svg';
import Notification from '../../assets/icons/custom/notification.svg';
import Settings from '../../assets/icons/custom/nav_setting.svg';
import { height, width } from '../../util/scale';

function TabBar({ state, descriptors, navigation }) {
    return (
        <View style={{
            flexDirection: 'row',
            backgroundColor: Color.White,
            shadowColor: "black",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.5,
            shadowRadius: 3.84,
            paddingVertical: 10
        }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const icons = {
                    "Challenge": <Challenge color={isFocused ? Color.Primary : Color.LightGrey} width={width(30)} height={height(30)} />,
                    "Notification": <Notification color={isFocused ? Color.Primary : Color.LightGrey} width={width(30)} height={height(30)} />,
                    "Settings": <Settings color={isFocused ? Color.Primary : Color.LightGrey} width={width(30)} height={height(30)} />
                }

                const icon = icons[label]

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        onPress={onPress}
                        style={{
                            flex: 1
                        }}
                    >
                        <View style={{
                            alignItems: 'center',
                            marginBottom: height(4.5)
                        }}>
                            {icon}
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                            <View style={{
                                alignSelf: 'flex-start',
                                borderBottomColor: isFocused ? Color.Primary : 'transparent',
                                borderBottomWidth: 3,
                            }}>
                                <Text style={{
                                    color: isFocused ? Color.Primary : Color.LightGrey,
                                    textAlign: 'center',
                                }}>
                                    {label}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
            })}
            <SafeAreaView />
        </View>
    );
}

export default TabBar;