import React from "react";
import { BingImages, BingResponse, BingVideos, BingRelatedSearches } from "../../apis/models/bing";
import { Flex, FlexPanel } from "../_controls";
import { ImagesGrid, SquareImage } from "./styled";
import { useIntl } from "react-intl";
import messages from "./messages";

export default function SearchSidebar({ response }: { response: BingResponse }) {
    return (
        <Flex column gap={20} className="search-sidebar">
            {response.relatedSearches && <RelatedSearches relatedSearches={response.relatedSearches} />}
            {response.images && <Images images={response.images} />}
            {response.videos && <Videos videos={response.videos} />}
        </Flex>
    );
}

const RelatedSearches = ({ relatedSearches }: { relatedSearches: BingRelatedSearches }) => {
    const intl = useIntl();
    return (
        <Flex column gap={10}>
            <span>{intl.formatMessage(messages.relatedSearches)}</span>
            <FlexPanel>
                <Flex column gap={20}>
                    {relatedSearches.value.map((item) => {
                        return <span>{item.text}</span>;
                    })}
                </Flex>
            </FlexPanel>
        </Flex>
    );
};

export const Images = ({ images }: { images: BingImages }) => {
    const intl = useIntl();
    return (
        <Flex column gap={10}>
            <span>{intl.formatMessage(messages.images)}</span>
            <FlexPanel>
                <ImagesGrid>
                    {images.value.map((item) => {
                        return (
                            <a href={item.contentUrl} target="_blank" rel="noreferrer">
                                <SquareImage title={item.name}>
                                    <img src={item.thumbnailUrl} alt="" />
                                </SquareImage>
                            </a>
                        );
                    })}
                </ImagesGrid>
            </FlexPanel>
        </Flex>
    );
};

export const Videos = ({ videos }: { videos: BingVideos }) => {
    const intl = useIntl();
    return (
        <Flex column gap={10}>
            <span>{intl.formatMessage(messages.videos)}</span>
            <FlexPanel>
                <ImagesGrid>
                    {videos.value.map((item) => {
                        return (
                            <a href={item.contentUrl} target="_blank" rel="noreferrer">
                                <SquareImage title={item.name}>
                                    <img src={item.thumbnailUrl} alt="" />
                                </SquareImage>
                            </a>
                        );
                    })}
                </ImagesGrid>
            </FlexPanel>
        </Flex>
    );
};
