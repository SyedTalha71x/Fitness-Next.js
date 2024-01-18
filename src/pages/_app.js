
import Navbar from '@/Components/Navbar'
import '@/styles/globals.css'
import Head from 'next/head'
import { Router, useRouter } from 'next/router';
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {
  const [user, setuser] = useState({ value: null });
  const [key, setkey] = useState(0);
  const router = useRouter();



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
