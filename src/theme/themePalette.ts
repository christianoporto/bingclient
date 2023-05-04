export interface IThemePalette {
    shadowColor: string;
    primary: string;
    background: string;
    backgroundDark: string;
    backgroundLight: string;
    text: string;
    textLight: string;
    shadow: string;
    linkColor: string;
    green: string;
}

export const lightTheme: IThemePalette = {
    shadowColor: "rgb(175 175 175 / 38%)",
    primary: "#242424",
    background: "#ffffff",
    backgroundDark: "#e6e6e6",
    backgroundLight: "#f2f2f2",
    text: "#353535",
    textLight: "#808080",
    shadow: "1px 1px 7px #8c8c8c4a",
    linkColor: "#4007a2",
    green: "#16971b",
};

export const darkTheme: IThemePalette = {
    shadowColor: "rgb(0 0 0 / 52%)",
    primary: "#0091ff",
    background: "#1d1d1d",
    backgroundDark: "#313131",
    backgroundLight: "#2a2a2a",
    text: "#ffffff",
    textLight: "#808080",
    shadow: "1px 1px 7px #000000a8",
    linkColor: "#ae7eff",
    green: "#4CAF50",
};
