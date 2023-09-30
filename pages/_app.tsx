import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import {Lora} from 'next/font/google'

const lora = Lora({
  subsets: ["latin"],  
  weight: "400"
 })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={lora.className}>
    <Head>
      <title>Vidrioku</title>
      <link rel="icon" href="/logos/6.png" />
      
    </Head>
    <Component {...pageProps} />
  </div>)
}
