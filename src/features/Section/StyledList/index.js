import styled from "styled-components";

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 115px;
    grid-row-gap: 10px;
    margin: 0;
    padding: 32px 0 0 0;
    list-style-position: inside;
`;

export const Item = styled.li`
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 18px;

    &::marker{
        color: ${({ theme }) => theme.color.scienceBlue};
    }
`;
