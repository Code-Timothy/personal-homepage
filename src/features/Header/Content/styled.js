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
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.mineShaft};
    font-weight: 900px;
    font-size: 38px;
    margin: 12px 0 35px 0;
`;

export const AboutMe = styled.p`
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 32px;
`;

export const ContactLink = styled.a`
    text-decoration: none;
`;

export const HireMeButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    font-size: 20px;
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.scienceBlue};
    border: none;
    border-radius: 4px;
    padding: 12px 16px;
    transition: 0.5s;

    &:hover{
        cursor: pointer;
        box-shadow: 
        -2px -2px 0px 0px ${({ theme }) => theme.color.anakiwa},
        2px 2px 0px 0px ${({ theme }) => theme.color.anakiwa},
        -2px 2px 0px 0px ${({ theme }) => theme.color.anakiwa},
        2px -2px 0px 0px ${({ theme }) => theme.color.anakiwa};
    }
`;