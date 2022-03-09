/* eslint-disable indent */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*,body,main,head {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family:Arial, Helvetica, sans-serif;
}
*img{
    width:100%;
    height: auto;
}

body{
    width:100%;
    height:100%;
}

`

const theme = {
    colors: {
        primary: '',
        primaryTint: '',
        secondary: '',
        secondaryTint: '',
    },
    images: {
        bgcolor: 'red',
    },
}

function MyApp ({ Component, pageProps }: AppProps) {
    return (<>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
        <Component {...pageProps} />
    </ThemeProvider>
    </>)
}

export default MyApp
