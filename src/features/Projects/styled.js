import { ReactComponent as GithubIcon } from "../../assets/images/githubIcon.svg";
import styled from "styled-components";

export const StyledGithubIcon = styled(GithubIcon)`
    color: ${({ theme }) => theme.color.scienceBlue};
    width: 40px;
    height: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        width: 32px;
        height: 32px;
    };
`;

export const Wrapper = styled.section`
    margin-top: 72px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        margin-top: 48px;
    };
`;

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 900;
    margin: 10px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        font-size: 18px;
    };
`;

export const Subtitle = styled.p`
    font-size: 20px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        font-size: 16px;
    };
`;