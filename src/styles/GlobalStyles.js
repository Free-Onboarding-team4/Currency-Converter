import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { COLOR } from 'constants';

const globalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing : border-box;
    }
    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
        color: ${COLOR.FONT};
        font-family: 'Noto Sans KR', sans-serif;
        @media screen and (max-width : 1400px){
        font-size : 14px;
    }
        @media screen and (max-width : 1200px){
        font-size : 13px;
    }
    }

    body {
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
    color: ${COLOR.FONT};
    }

    main {
    display: block;
    }

    h1 {
    font-size: 2em;
    margin: 0.67em 0;
    }

    hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    }

    pre {
    font-family: monospace, monospace;
    font-size: 1em;
    }

    a {
    background-color: transparent;
    text-decoration : none;
    color : #444444;
    }

    abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
    }

    b,
    strong {
    font-weight: bolder;
    }

    code,
    kbd,
    samp {
    font-family: monospace, monospace;
    font-size: 1em;
    }

    small {
    font-size: 80%;
    }

    sub,
    sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
    }

    sub {
    bottom: -0.25em;
    }

    sup {
    top: -0.5em;
    }

    img {
    border-style: none;
    }
    
    input:focus {
        outline : none;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
    }

    button,
    input {
    overflow: visible;
    }

    button,
    select {
    text-transform: none;
    }

    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
    -webkit-appearance: button;
    }

    button::-moz-focus-inner,
    [type='button']::-moz-focus-inner,
    [type='reset']::-moz-focus-inner,
    [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
    }

    button:-moz-focusring,
    [type='button']:-moz-focusring,
    [type='reset']:-moz-focusring,
    [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
    }

    button,
input,
select,
textarea {
  background-color: transparent;
  border: 0;
}
button,
input,
select,
textarea:focus {
  outline: none;
  box-shadow: none;
}
input::placeholder {
  color: ${COLOR.FONT}
}
a,
button {
  cursor: pointer;
}
ul,
ol {
  padding-left: 0;
  list-style: none;
}

    fieldset {
    padding: 0.35em 0.75em 0.625em;
    }

    legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
    }

    progress {
    vertical-align: baseline;
    }

    textarea {
    overflow: auto;
    }

    [type='checkbox'],
    [type='radio'] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
    }

    [type='number']::-webkit-inner-spin-button,
    [type='number']::-webkit-outer-spin-button {
    height: auto;
    }

    [type='search'] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
    }

    [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
    }

    details {
    display: block;
    }

    summary {
    display: list-item;
    }

    template {
    display: none;
    }

    [hidden] {
    display: none;
    }
`;

export default globalStyles;
