import { useState, useEffect } from 'react';
import { signOut, useSession } from 'next-auth/client';
import Link from 'next/link';
import Footer from '../components/Footer';
import Holding from '../components/Holding';
import HoldingETC from '../components/HoldingETC';
import HoldingDOGE from '../components/HoldingDOGE';
import HoldingFILE from '../components/HoldingFILE';

function dashboard() {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/secret');
      const json = await res.json();

      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  if (typeof window !== 'undefined' && loading) return null;

  if (!session) {
    return (
      <main>
        <div>
          <h1>You aren't signed in, please sign in first</h1>
        </div>
      </main>
    );
  }
  return (
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
      <div className='mx-auto container pt-20 lg:pt-72 flex flex-col'>
        <h1 className='text-4xl tracking-tight font-extrabold text-gray-900  sm:text-5xl md:text-6xl mx-auto'>
          Portfolio Summary
        </h1>
        <div className='flex bg-gray-100 mt-16 rounded-lg p-14'>
          <div className='flex flex-col  justify-center mr-5'>
            <div className='text-gray-900 flex justify-between pb-2'>
              <h2 className=''>Balance:</h2>
              <p className='text-green-500'>Change: 4.65%</p>
            </div>
            <div className='max-w-screen-lg'>
              <img src='/images/graph.png' className='rounded-md' />
            </div>
          </div>
        </div>
        <h1 className='text-2xl tracking-tight font-extrabold text-gray-900  sm:text-3xl md:text-4xl mx-auto mt-8'>
          Your Holdings
        </h1>
        <div className='mt-10'>
          <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
            <Holding />
            <HoldingETC />
            <HoldingDOGE />
            <HoldingFILE />
          </dl>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default dashboard;
