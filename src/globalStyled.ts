import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
  body, button, input , textarea {
    font-family: 'Poppins', sans-serif, 'Roboto', 'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI',
    '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'sans-serif';
    font-size: 14px;
  }
  html, body {   
    line-height: 1.2;
  }

 html, body { 
  background: ${(props) => props.theme.palette.backgroundLight};
  color: ${(props) => props.theme.palette.text};
  margin: 0;
  padding: 0; 

 }
 
hr {
  height: 1px;
  background: ${(props) => props.theme.palette.backgroundDark};
  width: 100%;
  border: 0px;
}

@media (max-width: 710px) {
 html, body {
    background: ${(props) => props.theme.palette.background};
  }
}


&::-webkit-scrollbar-track {
    background: transparent;
}

&::-webkit-scrollbar {
   width: 14px;
   background: transparent;
}

&::-webkit-scrollbar-thumb {
  background:  ${(props) => props.theme.palette.backgroundLight};
  border: 3px solid transparent;
  border-radius: 50px;
  background-clip: padding-box;  

  &:hover { 
    background:  ${(props) => props.theme.palette.backgroundDark};
    border: 3px solid transparent;
    border-radius: 50px;
    background-clip: padding-box; 
  }
}
`;

export default GlobalStyle;
