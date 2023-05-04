import styled from "styled-components";

export const SearchResultContainer = styled.div``;

export const CenteredContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 120px;
    padding: 20px;
`;

export const SearchInputContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 500px;
    img {
        width: 20px;
        position: absolute;
        left: 10px;
    }
    .loading {
        position: absolute;
        right: 10px;
    }
    input {
        width: 100%;
        border: 0;
        outline-style: none;
        padding: 10px 10px;
        padding-left: 40px;
        border-radius: 50px;
        border: 1px solid ${(props) => props.theme.palette.backgroundDark};
        background: ${(props) => props.theme.palette.background};
        color: ${(props) => props.theme.palette.text};

        &:focus {
            box-shadow: 1px 1px 6px ${(props) => props.theme.palette.shadowColor};
        }
    }
`;

export const SearchResultListBody = styled.div`
    box-sizing: border-box;
    width: 100%;
    max-width: 1000px;
    padding: 0px 15px;
    margin: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .search-list-body {
        width: 100%;
        max-width: 620px;
    }
    .search-sidebar {
    }

    @media (min-width: 1000px) {
        flex-direction: row;
    }
`;

export const SearchResponseCardStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
    background: ${(props) => props.theme.palette.background};
    border-radius: 15px;

    .overflow-hidden {
        overflow: hidden;
    }

    .value-text {
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .value-title {
        font-size: 17px;
        color: ${(props) => props.theme.palette.linkColor};
        text-decoration: none;
    }
    .value-url {
        color: ${(props) => props.theme.palette.green};
    }
    .value-snippet {
        color: ${(props) => props.theme.palette.textLight};
    }
    .thumbnail {
        width: 100px;
        min-width: 100px;
        height: 100px;
        border-radius: 15px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    @media (min-width: 600px) {
        flex-direction: row;
    }
`;

export const DeepLinksGrid = styled.div`
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    margin-top: 20px;

    .deep-link-card {
        overflow: hidden;
        .value-text {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }
`;

export const ImagesGrid = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(85px, 1fr));
`;

export const SquareImage = styled.div`
    display: flex;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 10px;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
