import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: "Inter", serif;
        background: ${({ theme }) => theme.background.main};
        transition: background 1s, color 1s;
    }
`;

export default GlobalStyles;