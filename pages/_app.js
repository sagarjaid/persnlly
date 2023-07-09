import '@/styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {

  return <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=G-QM1CTD5J2Y`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-QM1CTD5J2Y');
      `}
    </Script>
    <Component {...pageProps} />
  </>
}
