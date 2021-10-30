import { Dimensions } from 'react-native';

const StandardWidth = 375;
const StandardHeight = 812;

export const width = (width) => {
    const screenWidth = Dimensions.get('window').width;
    const widthPercentage = width / StandardWidth;
    return Math.round(screenWidth * widthPercentage)
};

export const height = (height) => {
    const screenHeight = Dimensions.get('window').height;
    const heightPercentage = height / StandardHeight;
    return Math.round(screenHeight * heightPercentage);
};