import styled from "styled-components";

export const Container = styled.div`
    max-width: 1216px;
    margin: auto;
    color: ${({ theme }) => theme.text.header};
    padding: 16px;
`;