import flatten from "flat";
import moment from "moment";
import "moment/locale/es";
import React, { Fragment, useEffect } from "react";
import { IntlProvider } from "react-intl";
import messages from "./messages";
import { useAppSettingsContext } from "../AppSettings";

interface IProviderProps {
    children: React.ReactNode;
}

const Provider = ({ children }: IProviderProps) => {
    const { appSettingsState } = useAppSettingsContext();
    const locale = appSettingsState.language ? appSettingsState.language : "en";

    useEffect(() => {
        moment.locale(locale);
    }, [locale]);

    return (
        <IntlProvider locale={locale} textComponent={Fragment} messages={flatten(messages[locale])}>
            {children}
        </IntlProvider>
    );
};

export default Provider;
