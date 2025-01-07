import styled from "styled-components";

export const StyledSection = styled.section`
    background: ${({ theme }) => theme.color.white};
    padding: 32px;
    margin-top: 72px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        padding: 16px;
        margin-top: 48px;
    };
`;

export const StyledHeader = styled.header`
    border-bottom: 1px solid ${({ theme }) => theme.color.whiteLilac};
    padding-bottom: 14px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        padding-bottom: 0;
    };
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.color.mineShaft};
    font-size: 30px;
    font-weight: 900;
    margin: 0;
    letter-spacing: 1px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        font-size: 18px;
    };
`;