"use client";

import Body from '@/components/Body';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Newsletter | Xplorica</title>
        <meta name="description" content="Stay updated with the latest news and insights from Xplorica." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        {/* Prefetch the Xplorica logo */}
        <link rel="preload" href="/xplorica-logo.png" as="image" />
        <link rel="prefetch" href="/xplorica-logo.png" as="image" />
      </Head>

      <Body />
    </>
  )
}

export default Home