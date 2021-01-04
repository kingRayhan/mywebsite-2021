import { createGlobalStyle } from "styled-components";
import "normalize.css";

export const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap');

    :root{
        --color-primary: #28C7C1;
        --color-secondary: #FDF9F3;
        --color-white: #FFF;
        --color-dark: #2F3432;
        --color-light-dark: #707070;
        --radius: 10px;

        --font-primary: 'Playfair Display', serif;
        --font-secondary: 'Operator Mono';

        --size-tab: 800px;
        --size-mobile: 600px;
    }

    *:focus{
        outline: none;
    }

    body{
        background-color: var(--color-secondary);
    }

    img{
        max-width: 100%;
    }

    a{
        color: var(--color-primary);
        font-weight: bold;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }

    button{
        cursor: pointer;
    }
`;
