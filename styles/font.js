import { StyleSheet } from 'react-native';

import { width, height } from '@util/scale'

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
        fontSize: height(28),
        fontWeight: FontWeight.Bold
    },
    H2: {
        fontSize: height(24),
        fontWeight: FontWeight.Bold
    },
    H3: {
        fontSize: height(22),
        fontWeight: FontWeight.Regular
    },
    B1: {
        fontSize: height(20),
        fontWeight: FontWeight.Regular
    },
    B2: {
        fontSize: height(18),
        fontWeight: FontWeight.Regular
    },
    B3: {
        fontSize: height(16),
        fontWeight: FontWeight.Regular
    },
    B4: {
        fontSize: height(16),
        fontWeight: FontWeight.Bold
    },
    B5: {
        fontSize: height(12),
        fontWeight: FontWeight.Light
    }
});

export default Font;