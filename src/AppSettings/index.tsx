import { createContext, useContext } from "react";
import { useLocalStorage } from "../utils/hooks";

export type ThemeType = "Light" | "Dark";

export interface AppSettingsState {
    theme: ThemeType;
    language: string;
}

const defaultValue = () => {
    let data: AppSettingsState = {
        theme: "Light",
        language: "en",
    };
    return data;
};

interface IContextProps {
    appSettingsState: AppSettingsState;
    setAppSettingsState: (value: AppSettingsState) => void;
}

const AppSettingsContext = createContext({} as IContextProps);

const AppSettingsContextProvider = (props: any) => {
    const { value: appSettingsState, setValue: setAppSettingsState } = useLocalStorage<AppSettingsState>("appSettings", defaultValue());

    return <AppSettingsContext.Provider value={{ appSettingsState, setAppSettingsState }}>{props.children}</AppSettingsContext.Provider>;
};

export const useAppSettingsContext = () => {
    return useContext(AppSettingsContext);
};

export default AppSettingsContextProvider;
