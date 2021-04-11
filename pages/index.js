import Head from 'next/head';
import React from 'react';
import { useSession } from 'next-auth/client';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import NavBarLogOut from '../components/NavBarLogOut';

export default function Home() {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <title>CryptoWise</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        {!session && (
          <>
            <NavBar />
            <Hero />
            <CTA />
            <FAQ />
          </>
        )}
        {session && (
          <>
            <NavBarLogOut />
            <h1 className='text-5xl'>
              Welcome to <a href='https://nextjs.org'>CryptoWise!</a>
            </h1>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
