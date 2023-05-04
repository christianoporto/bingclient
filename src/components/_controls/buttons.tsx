import styled from "styled-components";

export const Button = styled.button`
    background: ${(props) => props.theme.palette.background};
    outline: transparent;
    padding: 6px 14px;
    border: 1px solid ${(props) => props.theme.palette.backgroundDark};
    color: ${(props) => props.theme.palette.text};
    font-weight: 500;
    cursor: pointer;
    display: flex;
    white-space: nowrap;
    gap: 10px;
    position: relative;
    border-radius: 10px;
`;
