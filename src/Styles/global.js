import { createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle `
    body,html{
        padding: 0;
        margin: 0;
        overflow: hidden;
    }
    *, *::after, *::before {
        box-sizing: border-box;
      }
      body {
        align-items: center;
        background: ${({ theme }) => theme.primaryDark};
        color: ${({ theme }) => theme.primaryLight}
        display: flex;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        height: 100vh;
        justify-content: center;
        text-rendering: optimizeLegibility;
      }


`
export default GlobalStyles