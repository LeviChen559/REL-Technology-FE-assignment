import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ReactGA from 'react-ga';
ReactGA.initialize('GA_MEASUREMENT_ID');

export default function App({ Component, pageProps }: AppProps) {
  function Analytics() {
    return (
      <>
        <Head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id='${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}'`}></script>
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
            `
          }}>
          </script>
        </Head>
      </>
    );
  }

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ReactGA.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Remove listener after unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);




  return <> <Analytics /><Component {...pageProps} /></>
}
