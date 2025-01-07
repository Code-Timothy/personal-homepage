import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    margin-top: 56px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        gap: 16px;
        margin-top: 40px;
    };
`;

export const SocialIcon = styled.svg`
    width: 48px;
    height: 48px;
    color: ${({ theme }) => theme.color.mineShaft};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        width: 32px;
        height: 32px;
    };
`;