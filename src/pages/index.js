"use client";

import Body from '@/components/Body';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Newsletter | Xplorica</title>
        <meta name="description" content="Stay updated with the latest news and insights from Xplorica. Your go-to source for content writing, tech, and innovation." />
        <meta name="keywords" content="Xplorica, newsletter, travel, tech, innovation, updates, insights" />
        <meta name="author" content="Xplorica" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://newsletter.xplorica.in/" />
        <link rel="icon" href="/favicon.png" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Data */}
        <meta property="og:title" content="Newsletter | Xplorica" />
        <meta property="og:description" content="Stay updated with the latest news and insights from Xplorica." />
        <meta property="og:image" content="https://newsletter.xplorica.in/xplorica-logo-with-text.png" />
        <meta property="og:url" content="https://newsletter.xplorica.in" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Newsletter |Xplorica" />

        {/* Twitter Card Meta Data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Newsletter | Xplorica" />
        <meta name="twitter:description" content="Stay updated with the latest news and insights from Xplorica." />
        <meta name="twitter:image" content="https://newsletter.xplorica.in/xplorica-logo-with-text.png" />
        

        {/* Prefetch the Xplorica logo */}
        <link rel="preload" href="/xplorica-logo.png" as="image" />
        <link rel="prefetch" href="/xplorica-logo.png" as="image" />
      </Head>

      <Body />
    </>
  )
}

export default Home