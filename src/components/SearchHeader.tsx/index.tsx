import React from "react";
import { SearchHeaderContainer } from "./styled";
import { Button, Flex } from "../_controls";
import { useAppSettingsContext } from "../../AppSettings";
import { Images } from "../../assets";
import { useIntl } from "react-intl";
import messages from "./messages";

interface SearchHeaderProps {
    searchInput?: React.ReactNode;
}

export default function SearchHeader(props: SearchHeaderProps) {
    const { appSettingsState, setAppSettingsState } = useAppSettingsContext();
    const intl = useIntl();
    const changeTheme = () => {
        setAppSettingsState({ ...appSettingsState, theme: appSettingsState.theme === "Dark" ? "Light" : "Dark" });
    };

    const changeLanguage = () => {
        setAppSettingsState({ ...appSettingsState, language: appSettingsState.language === "es" ? "en" : "es" });
    };

    return (
        <SearchHeaderContainer>
            <Flex w100 gap={10} alignCenter>
                <img width={30} src={Images.bingLogo} alt="" />
                {props.searchInput}
            </Flex>
            <Flex gap={10} alignCenter>
                <Button title={intl.formatMessage(messages.changeTheme)} onClick={changeTheme}>
                    <img width={20} src={appSettingsState.theme !== "Dark" ? Images.night : Images.day} alt="" />
                </Button>

                <Button title={intl.formatMessage(messages.changeLang)} onClick={changeLanguage}>
                    <img width={18} src={appSettingsState.language === "es" ? Images.spain : Images.usa} alt="" />
                    {appSettingsState.language}
                </Button>
            </Flex>
        </SearchHeaderContainer>
    );
}
