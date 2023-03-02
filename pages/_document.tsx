import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
          {/* Add your Google Analytics tracking code here */}
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          ></Script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
            }}
          ></script>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
