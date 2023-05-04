import { useState } from "react";

const PREFIX = "YUXI_APP_";
export const getLocalStorageKey = (key: string) => {
    return PREFIX + key;
};

export function useLocalStorage<T>(key: string, initialValue: T) {
    const getValue = (key: string) => {
        try {
            const item = window.localStorage.getItem(getLocalStorageKey(key));
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    };

    const [value, setStoredValue] = useState<T>(() => {
        return getValue(key);
    });

    const setValue = (value: T) => {
        try {
            const valueToStore = value instanceof Function ? value(value) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(getLocalStorageKey(key), JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };

    const reLoad = (key: string) => {
        setValue(getValue(key));
    };

    return { value, setValue, reLoad };
}
