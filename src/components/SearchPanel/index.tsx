import { useState } from "react";
import { useIntl } from "react-intl";
import { BingResponse } from "../../apis/models/bing";
import SearchHeader from "../SearchHeader.tsx";
import SearchInput from "./SearchInput";
import SearchResponseView from "./SearchResponseView";
import messages from "./messages";
import { useBingSearch } from "./searchHook";
import { CenteredContainer, SearchResultContainer } from "./styled";

export default function SearchPanel() {
    const [bingResponse, setBingResponse] = useState<BingResponse>();
    const intl = useIntl();

    const bingSearch = useBingSearch();

    const handleSearch = (searchValue: string) => {
        if (!searchValue) return;
        bingSearch.handleSearch(searchValue, setBingResponse);
    };

    if (!bingResponse) {
        return (
            <SearchResultContainer>
                <SearchHeader />
                <CenteredContainer>
                    <h3>{intl.formatMessage(messages.welcomeToBing)}</h3>
                    <SearchInput isLoading={bingSearch.isLoading} onSearch={handleSearch} />
                </CenteredContainer>
            </SearchResultContainer>
        );
    }

    return (
        <SearchResultContainer>
            <SearchHeader searchInput={<SearchInput isLoading={bingSearch.isLoading} onSearch={handleSearch} />} />           
            <SearchResponseView response={bingResponse} />
        </SearchResultContainer>
    );
}
