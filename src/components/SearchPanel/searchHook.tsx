import React, { useState } from "react";
import { BING_SEARCH_URL, BING_SUBSCRIPTION_KEY } from "../../apis/apiUrls";
import { BingResponse } from "../../apis/models/bing";

export default function searchHook() {
    return <div>searchHook</div>;
}

export const useBingSearch = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = (searchValue: string, onResult: (result: BingResponse) => void) => {
        if (!searchValue) return;
        const url = `${new URL(BING_SEARCH_URL).href}v7.0/search?q=${encodeURIComponent(searchValue)}`;

        setIsLoading(true);
        fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Ocp-Apim-Subscription-Key": BING_SUBSCRIPTION_KEY,
            },
        })
            .then((response) => response.json())
            .then((data: BingResponse) => {
                onResult(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error al obtener usuarios:", error);
                setIsLoading(false);
            });
    };

    return { handleSearch, isLoading };
};
