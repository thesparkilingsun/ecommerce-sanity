import {ThemeProvider} from "styled-components"



const theme = {
    colors:{
      red:'#E5002B',
      purple:'#a51890',
      blue:'#0050a0',
      lightBlue:'#12A8E0',
      base:'#Fdfcfa',
      baseTint:'#f1ebe3',
      hoverColor:'#eee2e2cc'
    },
    shape:{
      radius:'2rem',
      height:'100%',
      width:'100%',
      reduceWidth:'80vh',
      padding:'0px',
      margin:'0px',
      padding1rem:'1rem'
    },
    iconSize:{
      size:'1.60rem'
    }
  };

  const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
  
  export default Theme;