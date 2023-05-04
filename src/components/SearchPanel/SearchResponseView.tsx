import { useIntl } from "react-intl";
import { BingResponse, ResponseValue } from "../../apis/models/bing";
import { Flex } from "../_controls";
import SearchSidebar from "./SearchSidebar";
import { DeepLinksGrid, SearchResponseCardStyle, SearchResultListBody } from "./styled";
import messages from "./messages";

interface SearchResponseViewProps {
    response: BingResponse;
}

export default function SearchResponseView(props: SearchResponseViewProps) {
    const { response } = props;
    const intl = useIntl();

    return (
        <SearchResultListBody>
            <Flex column gap={20} className="search-list-body">
                <span>
                    {intl.formatMessage(messages.results)}: {props.response.webPages.totalEstimatedMatches.toLocaleString("en")}
                </span>
                {response.webPages.value.map((value) => {
                    return <ResponseValueCard value={value} />;
                })}
            </Flex>
            <SearchSidebar response={response} />
        </SearchResultListBody>
    );
}

const ResponseValueCard = ({ value }: { value: ResponseValue }) => {
    return (
        <SearchResponseCardStyle>
            <Flex column gap={4} className="overflow-hidden">
                <a href={value.url} target="_blank" rel="noreferrer" className="value-text value-title">
                    {value.name}
                </a>
                <span className="value-text value-url">{value.url}</span>
                <span className="value-text value-snippet">{value.snippet}</span>

                {value.deepLinks && (
                    <DeepLinksGrid>
                        {value.deepLinks.map((item) => {
                            return (
                                <Flex column className="deep-link-card">
                                    <a href={item.url} target="_blank" rel="noreferrer" className="value-text value-title">
                                        {item.name}
                                    </a>
                                    <span className="value-text value-snippet">{item.snippet}</span>
                                </Flex>
                            );
                        })}
                    </DeepLinksGrid>
                )}
            </Flex>
            {value.thumbnailUrl && (
                <div className="thumbnail">
                    <img src={value.thumbnailUrl} alt="" />
                </div>
            )}
        </SearchResponseCardStyle>
    );
};
