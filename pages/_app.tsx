import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis';
import { CoinMarketProvider } from '../context/Context';

function MyApp({ Component, pageProps }: AppProps) {
  console.log("process.env.NEXT_PUBLIC_SERVER", process.env.NEXT_PUBLIC_SERVER);
  console.log("process.env.NEXT_BACKEND_CMC_API_KEY1234", process.env.NEXT_BACKEND_CMC_API_KEY);
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_SERVER}
      appId={process.env.NEXT_PUBLIC_APP_ID}>
      <CoinMarketProvider>
        <Component {...pageProps} />
      </CoinMarketProvider>
    </MoralisProvider>
  )
}

export default MyApp
