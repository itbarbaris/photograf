import { AppProps } from 'next/dist/next-server/lib/router/router';
import Header from '../components/Header';
import GlobalStyle from './GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
