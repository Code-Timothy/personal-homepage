import styled from "styled-components";

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 115px;
    grid-row-gap: 10px;
    margin: 0;
    padding: 32px 0 0 0;
    list-style-position: inside;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        grid-template-columns: 1fr 1fr;
        padding: 20px 0 0 0;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        grid-template-columns: 1fr;
    };
`;

export const Item = styled.li`
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 18px;

    &::marker{
        color: ${({ theme }) => theme.color.scienceBlue};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        font-size: 14px;
    };
`;
