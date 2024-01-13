
import Navbar from '@/Components/Navbar'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
    <Navbar />
    <Head>
      <title>Fitness - Health Portal | o2 Gyms</title>
      <meta
        name='description'
        content='The best Fitness and Health Portal for Everyone'
      />
    </Head>
    <Component {...pageProps} /> </>
}
