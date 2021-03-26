import {Dimensions} from 'react-native';

const {width, height} =Dimensions.get('window');

export const COLORS = {

    background:"#f7f9fb",

    reddish:"#cf0015",
    black: "#1E1F20",
    white: "#FFFFFF",
    lightRed:'#F9f5f5',

    lightGray: "#FCFBFC",
    bgcolor:'#f7f9fb',
    gray: "#C1C3C5",
    darkgray: "#C3C6C7",

    transparent: "transparent",
}

export const SIZES = {
    //global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    //font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    width,
    height
}


export const FONTS = {
    largeTitle: { fontFamily: "Roboto-regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h0: { fontFamily: "Roboto-Black", fontSize: SIZES.h1*1.5, lineHeight: 48 },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = {COLORS, FONTS, SIZES}

export default appTheme;