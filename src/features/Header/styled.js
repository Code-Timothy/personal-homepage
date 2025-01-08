import styled from "styled-components";
import { ReactComponent as EnvelopeIcon } from "../../assets/images/envelope.svg";

export const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 72px;
    margin-top: 120px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        grid-template-columns: 1fr;
        gap: 0;
        margin-top: 0;
    };
`;

export const MyPhoto = styled.img`
    width: 384px;
    height: 384px;
    border-radius: 50%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        width: 200px;
        height: 200px;
    };
`;

export const ContactLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 16px;
    text-decoration: none;
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
    };

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        gap: 12px;
        font-size: 18px;
    };
`;

export const Envelope = styled(EnvelopeIcon)`
    width: 24px;
    height: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        width: 20px;
        height: 20px;
    };
`;