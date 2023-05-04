import React, { useState } from "react";
import { SearchInputContainer } from "./styled";
import { Images } from "../../assets";
import LoadingDualRing from "../LoadingDualRing";
import { useIntl } from "react-intl";
import messages from "./messages";

interface SearchInputProps {
    isLoading?: boolean;
    searchValue?: string;
    onSearch: (value: string) => void;
}

export default function SearchInput(props: SearchInputProps) {
    const [searchValue, setSearchValue] = useState(props.searchValue ?? "");
    const intl = useIntl();

    const handleSearch = () => {
        props.onSearch(searchValue);
    };

    const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <SearchInputContainer>
            <img onClick={() => handleSearch()} src={Images.search} alt="" />
            <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                type="search"
                autoComplete="off"
                onKeyUp={onKeyUp}
                placeholder={intl.formatMessage(messages.askMeAnything)}
            />
            {props.isLoading && <LoadingDualRing className="loading" small />}
        </SearchInputContainer>
    );
}
