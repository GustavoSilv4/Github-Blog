import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    :focus{
        outline: 0;
        box-shadow: 0 0 0 1px ${(props) => props.theme.blue};
    }

    body{
        background-color: ${(props) => props.theme['base-background']};
    }

    body, textarea, button, input {
        font-size: 1rem;
        font-weight: 400;
        font-family: 'Nunito', sans-serif;
        
    }
`
