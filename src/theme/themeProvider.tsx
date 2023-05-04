import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themePalette";
import { useAppSettingsContext } from "../AppSettings";

export const breakpoints = {
    xs: 420,
    sm: 568,
    md: 768,
    modalSm: 900,
    lg: 991,
    lg2: 1100,
    xl: 1200,
    xl300: 1300,
    xxl: 1500,
    xxl2: 1700,
};

export const device = {
    xs: `(min-width: ${breakpoints.xs}px)`,
    sm: `(min-width: ${breakpoints.sm}px)`,
    md: `(min-width: ${breakpoints.md}px)`,
    modalSm: `(min-width: ${breakpoints.modalSm}px)`,
    lg: `(min-width: ${breakpoints.lg}px)`,
    lg2: `(min-width: ${breakpoints.lg2}px)`,
    xl: `(min-width: ${breakpoints.xl}px)`,
    xl300: `(min-width: ${breakpoints.xl300}px)`,
    xxl: `(min-width: ${breakpoints.xxl}px)`,
    xxl2: `(min-width: ${breakpoints.xxl2}px)`,
};

function StyledThemeProvider(props: any) {
    const { appSettingsState } = useAppSettingsContext();
    const { children } = props;

    return (
        <ThemeProvider
            theme={{
                breakpoints,
                palette: appSettingsState.theme === "Light" ? lightTheme : darkTheme,
            }}
        >
            {children}
        </ThemeProvider>
    );
}

export default StyledThemeProvider;
