import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image
} from 'react-native';
import Swiper from 'react-native-swiper';

import OvalButton from '../../components/buttons/oval';

const WelcomeScreen = ({ navigation }) => {
    const isSignedIn = useSelector((state) => { state.user.isSignedIn });
    return (
        <View style={{ flex: 1 }}>
            <Swiper
                paginationStyle={{
                    position: 'absolute',
                    bottom: 130
                }}
                dotColor='#C7C7CD'
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginLeft: 9,
                }}
                activeDotColor='white'
                activeDotStyle={{
                    width: 16,
                    height: 16,
                    borderRadius: 8,
                    marginLeft: 9,
                    marginRgiht: 9
                }}
                showsButtons={false}
                loop={false}>
                <View>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/welcome/1.png')} />
                </View>
                <View>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/welcome/2.png')} />
                </View>
                <View>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/welcome/3.png')} />
                </View>
                <View>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/welcome/4.png')} />
                </View>
                <View>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/welcome/5.png')} />
                </View>
            </Swiper>
            <View style={{
                position: 'absolute',
                bottom: 60,
                alignSelf: 'center'
            }}>
                <OvalButton title='Get Started' onPress={() => { navigation.navigate('SignUpNavigator') }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        alignSelf: 'center',
        height: '100%',
        width: '100%',
    }
});

export default WelcomeScreen;