import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

body {
    background: black; 
    font-family: sans-serif;
    margin: 0;
}

ul, ol, li{
    margin: 0;
    padding: 0;
    list-style:none;
}
    `;
