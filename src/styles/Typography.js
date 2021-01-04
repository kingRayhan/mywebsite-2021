import { createGlobalStyle } from "styled-components";
// Fonts
import OperatorMonoWoff from "../assets/fonts/OperatorMono-Light.woff";
import OperatorMonoWoff2 from "../assets/fonts/OperatorMono-Light.woff2";

import OperatorMonoBoldWoff from "../assets/fonts/OperatorMono-Bold.woff";
import OperatorMonoBoldWoff2 from "../assets/fonts/OperatorMono-Light.woff2";

export const TypographyStyles = createGlobalStyle`
    @font-face {
        font-family: 'Operator Mono';
        src: url(${OperatorMonoWoff}) format('woff2'),
            url(${OperatorMonoWoff2}) format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Operator Mono';
        src: url(${OperatorMonoBoldWoff}) format('woff2'),
            url(${OperatorMonoBoldWoff2}) format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }
    html{
        font-size: 10px;
        color: var(--color-dark);
    }

    body, p{
        font-family: var(--font-secondary);
        font-size: 1.8rem;
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6{
        font-family: var(--font-primary);
        font-weight: 400;
    }
`;
