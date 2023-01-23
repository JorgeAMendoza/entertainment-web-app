import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --padding-sm: clamp(1rem,    3%, 1.5rem);
    --padding-md: clamp(1.5rem,  6%,   3rem);
    --padding-lg: clamp(3rem,   12%,   6rem);
    --block-flow-sm: min(2rem,  4vh);
    --block-flow-md: min(4rem,  8vh);
    --block-flow-lg: min(8rem, 20vh);
    --small-text: clamp(1rem, 1vw, 1.2rem);
    --medium-text: clamp(1.4rem, 10vw, 1.6rem);
    --large-text: clamp(1.8rem, 10vw, 2.2rem);

    /* CSS Variables */
    --red: #FC4747;
    --dark-blue: #10141E;
    --semi-dark-blue: #161D2F;
    --white: #FFF;
    --greyish-blue: #5A698F;
  }
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *,
  *::after,
  *::before {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    line-height: 1.4;
    z-index:1;
  }
  body{
    font-family: 'Outfit', sans-serif;
    font-size: 1.6rem;
    min-height: 100vh;
    position:relative;
    background-color: var(--dark-blue);
    color: var(--white);
  } 
  img,svg {
    max-width: 100%;
    display: block;
  }
  a{
    color:white;
  }
  input {
    font-family: inherit;
    border: none;
  }
  ul,ol{
    list-style: none;
  }
  p,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
  border: none;
  -webkit-text-fill-color: var(--white);
  -webkit-box-shadow: 0 0 0px 1000px var(--semi-dark-blue) inset;
  transition: background-color 5000s ease-in-out 0s;
  }
  
  #root, #__next {
  isolation: isolate;
}
`;

export default GlobalStyles;
