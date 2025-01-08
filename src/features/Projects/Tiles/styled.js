import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    margin-top: 24px;
    color: ${({ theme }) => theme.color.slateGray};

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        grid-template-columns: 1fr;
        gap: 16px;
    };
`;

export const StyledTile = styled.div`
    background: ${({ theme }) => theme.color.white};
    border: 6px solid rgb(209, 213, 218, 0.3);
    min-height: 322px;
    padding: 50px;
    font-size: 18px;
    border-radius: 4px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        padding: 24px;
        font-size: 14px;
        min-height: 230px;
    };
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.color.scienceBlue};
    font-size: 24px;
    margin: 0 0 24px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        font-size: 16px;
    };
`;

export const Description = styled.p`
    line-height: 1.4;
`;

export const LinksContainer = styled.div`
    display: grid;
    grid-template-columns: 60px auto;
    gap: 8px;
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.color.scienceBlue};
    border-bottom: 1px solid rgb(3, 102, 214, 0.2);

    &:hover{
        opacity: 85%;
    };

    &:active{
        opacity: 65%;
    };
`;