import styled from "styled-components";

export const StyledSection = styled.section`
    background: ${({ theme }) => theme.color.white};
    padding: 32px;
    margin-top: 72px;
`;

export const StyledHeader = styled.header`
    border-bottom: 1px solid ${({ theme }) => theme.color.whiteLilac};
    padding-bottom: 14px;
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.color.mineShaft};
    font-size: 30px;
    font-weight: 900;
    margin: 0;
    letter-spacing: 1px;
`;

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
