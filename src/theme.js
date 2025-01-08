const colorNames = {
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    silver: "#CCCCCC",
    anakiwa: "#8CC2FF",
    lightMist: "#D1D5DA4D",
    slateGray: "#6E7E91",
    softBlue: "#0366D633",
    scienceBlue: "#0366D6",
    mineShaft: "#252525",
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
    divider: colorNames.silver,
};