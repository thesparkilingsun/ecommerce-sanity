import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
import Theme from '../theme/theme';
import { GlobalStyle } from '../styles/globalStyles';

function MyApp({ Component, pageProps }) {
    return (
        <RecoilRoot>
            <Theme>
                <GlobalStyle />
                <Component {...pageProps} />
            </Theme>
        </RecoilRoot>
    );
}

export default MyApp;
