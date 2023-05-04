import AppSettingsContextProvider from "./AppSettings";
import SearchPanel from "./components/SearchPanel";
import GlobalStyled from "./globalStyled";
import { I18nProvider } from "./i18n";
import StyledThemeProvider from "./theme/themeProvider";

const ContextProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppSettingsContextProvider>
            <I18nProvider>
                <StyledThemeProvider>{children}</StyledThemeProvider>
            </I18nProvider>
        </AppSettingsContextProvider>
    );
};

function App() {
    return (
        <ContextProviders>
            <GlobalStyled />
            <SearchPanel />
        </ContextProviders>
    );
}

export default App;
