import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: black;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 20px;
    border: none;
  }

  body {
    position: relative;
    background-color: white;
    font-family: 'Nunito Sans', sans-serif;
  }
  
  body::before,
  body::after {
    content: "";
    position: fixed;
    top: 0;
    width: 0;
    height: 0;
  }
  
`
