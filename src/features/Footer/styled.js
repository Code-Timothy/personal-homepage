import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 120px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        margin: 48px 0;
    };
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.text.header};
    text-decoration: none;
    transition: color 0.5s;

    &:hover{
        color: ${({ theme }) => theme.tile.link};
    };
`;