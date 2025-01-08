import { ReactComponent as SunIcon } from "../../../assets/images/sun.svg";
import styled, { keyframes, css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const ThemeText = styled.span`
    color: ${({ theme }) => theme.text.paragraph};
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    margin-right: 12px;
`;

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    width: 48px;
    height: 26px;
    padding: 2px;
    background: ${({ theme }) => theme.themeButton.background};
    border: 1px solid ${({ theme }) => theme.themeButton.border};
    border-radius: 20px;
`;

export const StyledSunIcon = styled(SunIcon)`
    background: ${({ theme }) => theme.themeButton.iconBackground};
    color: ${({ theme }) => theme.themeButton.text};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: 0.5s;
 
    ${({ $move }) => $move && css`
        transform: translateX(22px) rotate(180deg);
    `}
`;