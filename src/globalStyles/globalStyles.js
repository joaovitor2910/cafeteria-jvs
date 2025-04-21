import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: "Roboto", sans-serif;
        text-decoration: none;
    }

    section {
        max-width: 1200px;
        padding: 3rem 2rem;
        margin: 0 auto;
    }

    :root {
        font-size: 10px;
        --main-color: #d3ad7f;
        --black: #131313;
        --bg: #010103;
        --border: 0.1rem solid rgba(255, 255, 255, 0.3);
    }
    
`
