import styled from "styled-components";

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    margin: 0;
    padding: 32px 32px 0 32px;
`;

export const Item = styled.li`
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 18px;

    &::marker{
        color: ${({ theme }) => theme.color.scienceBlue};
    }
`;
