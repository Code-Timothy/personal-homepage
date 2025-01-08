import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.p`
    font-size: 20px;
    margin: 48px 0;
`;

const spin = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
    width: 160px;
    height: 160px;
    border: 12px solid ${({ theme }) => theme.spinner.border};
    border-top: 12px solid ${({ theme }) => theme.spinner.borderTop};
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`;
