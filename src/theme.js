const colorNames = {
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    lightMist: "#D1D5DA4D",
    lightGrayTransparent: "#D1D5DA1A",
    anakiwa: "#8CC2FF",
    softBlue: "#0366D633",
    scienceBlueTransparent: "#0366D680",
    scienceBlue: "#0366D6",
    dodgerBlue: "#2188FF",
    slateGray: "#6E7E91",
    deepOceanNavy: "#090A3305",
    mercury: "#E5E5E5",
    silver: "#CCCCCC",
    mineShaft: "#252525",
    darkGrayTransparent: "#363636B8",
    woodSmoke: "#18181B",
};
const breakpoints = {
    breakpoint: {
        mobile: 480,
        tablet: 768,
        tabletLandscape: 1188,
    },
};

export const lightTheme = {
    ...breakpoints,
    background: {
        main: colorNames.whiteLilac,
        section: colorNames.white,
    },
    text: {
        header: colorNames.mineShaft,
        paragraph: colorNames.slateGray,
        blue: colorNames.scienceBlue,
        error: colorNames.woodSmoke,
    },
    button: {
        background: colorNames.scienceBlue,
        text: colorNames.white,
        hover: colorNames.anakiwa,
    },
    spinner: {
        border: colorNames.lightMist,
        borderTop: colorNames.scienceBlue,
    },
    tile: {
        background: colorNames.white,
        border: colorNames.lightMist,
        hover: colorNames.softBlue,
        header: colorNames.scienceBlue,
        link: colorNames.scienceBlue,
        borderBottom: colorNames.softBlue,
    },
    themeButton: {
        background: colorNames.mercury,
        text: colorNames.white,
        border: colorNames.lightMist,
        iconBackground: colorNames.slateGray,
    },
    divider: colorNames.silver,
    listMarker: colorNames.scienceBlue,
    boxShadow: colorNames.deepOceanNavy,
};

export const darkTheme = {
    ...breakpoints,
    background: {
        main: colorNames.mineShaft,
        section: colorNames.darkGrayTransparent,
    },
    text: {
        header: colorNames.white,
        paragraph: colorNames.white,
        blue: colorNames.scienceBlue,
        error: colorNames.white,
    },
    button: {
        background: colorNames.dodgerBlue,
        text: colorNames.white,
        hover: colorNames.anakiwa,
    },
    spinner: {
        border: colorNames.darkGrayTransparent,
        borderTop: colorNames.dodgerBlue,
    },
    tile: {
        background: colorNames.darkGrayTransparent,
        border: colorNames.lightGrayTransparent,
        hover: colorNames.scienceBlueTransparent,
        header: colorNames.white,
        link: colorNames.dodgerBlue,
        borderBottom: colorNames.dodgerBlue,
    },
    themeButton: {
        background: colorNames.darkGrayTransparent,
        text: colorNames.mineShaft,
        border: colorNames.white,
        iconBackground: colorNames.white,
    },
    divider: colorNames.lightGrayTransparent,
    listMarker: colorNames.dodgerBlue,
    boxShadow: colorNames.deepOceanNavy,
};