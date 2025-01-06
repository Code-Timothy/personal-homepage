import styled from "styled-components";

export const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 72px;
    margin-top: 120px;
`;

export const MyPhoto = styled.img`
    width: 384px;
    height: 384px;
    border-radius: 50%;
`;

export const ContactLink = styled.a`
    text-decoration: none;
`;

export const HireMeButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    font-size: 20px;
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.scienceBlue};
    border: none;
    border-radius: 4px;
    padding: 12px 16px;
    transition: 0.5s;

    &:hover{
        cursor: pointer;
        box-shadow: 
        -2px -2px 0px 0px ${({ theme }) => theme.color.anakiwa},
        2px 2px 0px 0px ${({ theme }) => theme.color.anakiwa},
        -2px 2px 0px 0px ${({ theme }) => theme.color.anakiwa},
        2px -2px 0px 0px ${({ theme }) => theme.color.anakiwa};
    }
`;