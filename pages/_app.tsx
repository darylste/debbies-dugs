import { Cabin, Nunito_Sans } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';

import '../styles/globals.scss';

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
      <Analytics />
    </>
  );
}
