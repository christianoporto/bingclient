const getEnvValue = (name: string) => {
    const value = process.env[name];
    if (!value) {
        throw new Error(`environment variable '${name}' not found`);
    }
    return value;
};

export const BING_SEARCH_URL = getEnvValue("REACT_APP_BING_SEARCH_URL");
export const BING_SUBSCRIPTION_KEY = getEnvValue("REACT_APP_SUBSCRIPTION_KEY");
