import { css } from "@emotion/react";
import { createGlobalStyle } from "styled-components";

import { reset } from "./reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        margin: 0;
        background-color: #e8eaee;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;}
`;
