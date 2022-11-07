import { Cabin, Nunito_Sans } from '@next/font/google';

import '../styles/globals.scss';
import type { AppProps } from 'next/app';

const cabin = Cabin({ subsets: ['latin'] });
const nunitoSans = Nunito_Sans({
  weight: '400',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-heading: ${cabin.style.fontFamily};
          --font-body: ${nunitoSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
