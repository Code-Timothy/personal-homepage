import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 600px;
`;

export const Subtitle = styled.h2`
    color: ${({ theme }) => theme.color.slateGray};
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    margin-top: 64px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        margin-top: 16px;
    };
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.mineShaft};
    font-weight: 900;
    font-size: 38px;
    margin: 12px 0 35px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        font-size: 22px;
        margin: 8px 0 16px 0;
    };
`;

export const AboutMe = styled.p`
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        font-size: 17px;
        margin-bottom: 24px;
    };
`;