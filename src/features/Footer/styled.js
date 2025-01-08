import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 120px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        margin: 48px 0;
    };
`;