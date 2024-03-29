import { StyleSheet } from 'react-native';

import { width, height } from '../util/scale';

const FontWeight = {
    Thin: '100',
    UltraThin: '200',
    Light: '300',
    Regular: '400',
    Medium: '500',
    SemiBold: '600',
    Bold: '700',
    Heavy: '800',
    Black: '900',
}

const Font = StyleSheet.create({
    H1: {
        fontFamily: 'Roboto-Bold',
        fontSize: height(28),
        fontWeight: FontWeight.Bold
    },
    H2: {
        fontFamily: 'Roboto-Bold',
        fontSize: height(24),
        fontWeight: FontWeight.Bold
    },
    H3: {
        fontFamily: 'Roboto-Black',
        fontSize: height(22),
        fontWeight: FontWeight.Regular
    },
    H4: {
        fontFamily: 'Roboto-Black',
        fontSize: height(20),
        fontWeight: FontWeight.Bold
    },
    B1: {
        fontFamily: 'Roboto-Black',
        fontSize: height(20),
        fontWeight: FontWeight.Regular
    },
    B2: {
        fontFamily: 'Roboto-Black',
        fontSize: height(18),
        fontWeight: FontWeight.Regular
    },
    B3: {
        fontFamily: 'Roboto-Black',
        fontSize: height(16),
        fontWeight: FontWeight.Regular
    },
    B4: {
        fontFamily: 'Roboto-Bold',
        fontSize: height(16),
        fontWeight: FontWeight.Bold
    },
    B5: {
        fontFamily: 'Roboto-Thin',
        fontSize: height(12),
        fontWeight: FontWeight.Light
    },
});

export default Font;