import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Hero from '../components/Hero';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';
export default function Home() {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <title>CryptoWise</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {!session && (
        <>
          <div className='relative pt-6 px-4 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
            <nav
              className='relative flex items-center justify-between sm:h-10 lg:justify-start'
              aria-label='Global'
            >
              <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
                <div className='flex items-center justify-between w-full md:w-auto'>
                  <a href='/'>
                    <span className='sr-only'>Workflow</span>
                    <img
                      className='h-8 w-auto sm:h-10'
                      src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                    />
                  </a>
                  <div className='-mr-2 flex items-center md:hidden'>
                    <button
                      type='button'
                      className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                      aria-expanded='false'
                    >
                      <span className='sr-only'>Open main menu</span>
                      <svg
                        className='h-6 w-6'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M4 6h16M4 12h16M4 18h16'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class='hidden md:block md:ml-10 md:pr-4 md:space-x-8'>
                <a
                  href='/'
                  className='font-medium text-gray-500 hover:text-gray-900'
                >
                  Home
                </a>

                <a
                  href='/about'
                  className='font-medium text-gray-500 hover:text-gray-900'
                >
                  About Us
                </a>
                <Link href='/dashboard'>
                  <a className='font-medium text-gray-500 hover:text-gray-900'>
                    Dashboard
                  </a>
                </Link>
                <a
                  href='https://github.com/Shivppatel/crypto-wise-bitcamp-2021'
                  className='font-medium text-gray-500 hover:text-gray-900'
                >
                  Source Code
                </a>

                <button
                  className='font-medium text-indigo-600 hover:text-indigo-500'
                  onClick={signIn}
                >
                  Log in
                </button>
              </div>
            </nav>
          </div>
          <Hero />
          <CTA />
          <FAQ />
        </>
      )}
      {session && (
        <>
          <div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
            <nav
              className='relative flex items-center justify-between sm:h-10 lg:justify-start'
              aria-label='Global'
            >
              <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
                <div className='flex items-center justify-between w-full md:w-auto'>
                  <a href='/'>
                    <span className='sr-only'>Workflow</span>
                    <img
                      className='h-8 w-auto sm:h-10'
                      src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                    />
                  </a>
                  <div className='-mr-2 flex items-center md:hidden'>
                    <button
                      type='button'
                      className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                      aria-expanded='false'
                    >
                      <span className='sr-only'>Open main menu</span>
                      <svg
                        className='h-6 w-6'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M4 6h16M4 12h16M4 18h16'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class='hidden md:block md:ml-10 md:pr-4 md:space-x-8'>
                <a
                  href='/'
                  className='font-medium text-gray-500 hover:text-gray-900'
                >
                  Home
                </a>

                <a
                  href='/about'
                  className='font-medium text-gray-500 hover:text-gray-900'
                >
                  About Us
                </a>
                <Link href='/dashboard'>
                  <a className='font-medium text-gray-500 hover:text-gray-900'>
                    Dashboard
                  </a>
                </Link>
                <a
                  href='https://github.com/Shivppatel/crypto-wise-bitcamp-2021'
                  className='font-medium text-gray-500 hover:text-gray-900'
                >
                  Source Code
                </a>

                <button
                  className='font-medium text-indigo-600 hover:text-indigo-500'
                  onClick={signOut}
                >
                  Sign Out
                </button>
              </div>
            </nav>
          </div>
          <div className='mx-auto container pt-20 lg:pt-72 flex flex-col items-center justify-center min-h-screen'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900  sm:text-5xl md:text-6xl mx-auto'>
              Welcome Shiv Patel!
            </h1>
            <Link href='/dashboard'>
              <div className='cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 my-8'>
                View your Dashboard
              </div>
            </Link>
            <Link href='/settings'>
              <div className='cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'>
                Set Notification Preferences
              </div>
            </Link>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}
