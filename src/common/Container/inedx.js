import styled from "styled-components";

export const Container = styled.div`
    max-width: 1216px;
    margin: 62px auto 0 auto;
    color: ${({ theme }) => theme.text.header};
    padding: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletLandscape}px){
        margin: auto;
    };
`;