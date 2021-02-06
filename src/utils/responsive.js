import React from 'react';
import { Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export { screenHeight, screenWidth };

export const heightPercentage = (percentage) => screenHeight * (percentage / 100);

export const widthPercentage = (percentage) => screenWidth * (percentage / 100);
