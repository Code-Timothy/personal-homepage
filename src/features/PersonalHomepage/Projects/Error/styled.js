import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.text.header};
    margin-top: 48px;
`;

export const Icon = styled.span`
    font-size: 37px;
`;

export const Title = styled.h3`
    font-size: 24px;
    margin: 16px 0 32px 0;
`;

export const Text = styled.p`
    font-size: 20px;
    color: ${({ theme }) => theme.text.error};
    text-align: center;
    line-height: 1.4;
    margin: 0 0 32px 0;
`;

export const Link = styled.a`
    background: ${({ theme }) => theme.button.background};
    text-decoration: none;
    color: ${({ theme }) => theme.button.text};
    font-size: 20px;
    font-weight: 600;
    padding: 12px 16px;
    border-radius: 4px;
    letter-spacing: 1px;
    transition: opacity 0.5s, transform 0.5s;

    &:hover{
        opacity: 85%;
        transform: scale(1.05);
        cursor: pointer;
    }
`;