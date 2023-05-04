import styled from "styled-components";

interface FlexProps {
    column?: boolean;
    alignCenter?: boolean;
    justifyStart?: boolean;
    justifyCenter?: boolean;
    justifyEnd?: boolean;
    spaceBetween?: boolean;
    gap?: number;
    flexWrap?: boolean;
    w100?: boolean;
    alignStart?: boolean;
}

export const Flex = styled.div`
    display: flex;

    ${(props: FlexProps) => (props.column ? "flex-direction: column;" : "")}
    ${(props: FlexProps) => (props.alignCenter ? "align-items: center;" : "")}
    ${(props: FlexProps) => (props.alignStart ? "align-items: flex-start;" : "")}
    ${(props: FlexProps) => (props.justifyCenter ? "justify-content: center;" : "")}
    ${(props: FlexProps) => (props.justifyEnd ? "justify-content: flex-end;" : "")}
    ${(props: FlexProps) => (props.justifyStart ? "justify-content: space-start" : "")}
    ${(props: FlexProps) => (props.spaceBetween ? "justify-content: space-between;" : "")}   
    ${(props: FlexProps) => (props.gap ? `gap: ${props.gap}px;` : "")}
    ${(props: FlexProps) => (props.flexWrap ? "flex-wrap: wrap;" : "")}
    ${(props: FlexProps) => (props.w100 ? "width:  100%;" : "")}
`;

export const FlexPanel = styled.div`
    padding: 20px;
    background: ${(props) => props.theme.palette.background};
    border-radius: 15px;
`;
