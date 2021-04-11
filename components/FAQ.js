import React, { useState } from 'react';
function FAQ() {
  const [question, setquestion] = useState(0);
  return (
    <div className='pt-16'>
      <div className='container mx-auto pt-16 bg-gray-100'>
        <div className='text-center pb-3 md:pb-10 xl:pb-20'>
          <p className='text-indigo-600 text-base lg:text-lg uppercase leading-tight mb-4'></p>
          <h1 className='px-2 xl:px-0 xl:text-5xl md:text-3xl text-2xl font-extrabold text-gray-800'>
            Frequently Asked Questions
          </h1>
        </div>
        <div className='w-10/12 mx-auto'>
          <ul>
            <li className='py-6 border-gray-200 border-solid border-b'>
              <div className='flex justify-between items-center'>
                <h3 className='text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12'>
                  Why should I use CryptoWise?
                </h3>
                <div
                  className='cursor-pointer'
                  onClick={() =>
                    question === 0 ? setquestion(null) : setquestion(0)
                  }
                >
                  {question === 0 ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={36}
                      height={36}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='#A0AEC0'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      aria-label='Close'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={36}
                      height={36}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='#A0AEC0'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      aria-label='Open'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                      <line x1={12} y1={9} x2={12} y2={15} />
                    </svg>
                  )}
                </div>
              </div>
              {question === 0 && (
                <p className='pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg'>
                  CryptoWise is an intuitive interface that allows the user to
                  easily manage their crypto investments. Our service makes
                  investing in cryptocurrencies less intimidating, and should
                  make it easier as an investor to manage and overview your
                  portfolio, with tailored push- notifications.{' '}
                </p>
              )}
            </li>
            <li className='py-6 border-gray-200 border-solid border-b'>
              <div className='flex justify-between items-center'>
                <h3 className='text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12'>
                  Do I need to have a Coinbase account in order to use
                  CryptoWise?
                </h3>
                <div
                  className='cursor-pointer'
                  onClick={() =>
                    question === 1 ? setquestion(null) : setquestion(1)
                  }
                >
                  {question === 1 ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={36}
                      height={36}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='#A0AEC0'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      aria-label='Close'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={36}
                      height={36}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='#A0AEC0'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      aria-label='Open'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                      <line x1={12} y1={9} x2={12} y2={15} />
                    </svg>
                  )}
                </div>
              </div>
              {question === 1 && (
                <p className='pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg'>
                  Yes, a Coinbase account is required. As of now we can only
                  interface with Coinbase wallets, but we are continusally
                  looking for ways to make our software more assisable{' '}
                </p>
              )}
            </li>
            <li className='py-6 border-gray-200 border-solid border-b'>
              <div className='flex justify-between items-center'>
                <h3 className='text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12'>
                  How do I get a cool Arduino crypto robot that shows me my
                  protfolio performace?
                </h3>
                <div
                  className='cursor-pointer'
                  onClick={() =>
                    question === 2 ? setquestion(null) : setquestion(2)
                  }
                >
                  {question === 2 ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={36}
                      height={36}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='#A0AEC0'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      aria-label='Close'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={36}
                      height={36}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='#A0AEC0'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      aria-label='Open'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                      <line x1={12} y1={9} x2={12} y2={15} />
                    </svg>
                  )}
                </div>
              </div>
              {question === 2 && (
                <p className='pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg'>
                  The Arduino “stock rocket” will be available for purchase at a
                  later date. Check our website for updates on this product.{' '}
                </p>
              )}
            </li>
            <li className='py-6 border-gray-200 border-solid border-b'>
              <div className='flex justify-between items-center'>
                <h3 className='text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12'>
                  What are cryptocurrencies ?
                </h3>
                <div
                  className='cursor-pointer'
                  onClick={() =>
                    question === 3 ? setquestion(null) : setquestion(3)
                  }
                >
                  {question === 3 ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={36}
                      height={36}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='#A0AEC0'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      aria-label='Close'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={36}
                      height={36}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='#A0AEC0'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      aria-label='Open'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                      <line x1={12} y1={9} x2={12} y2={15} />
                    </svg>
                  )}
                </div>
              </div>
              {question === 3 && (
                <p className='pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg'>
                  Crypto currencies are currencies like USD but are used as a
                  form of payment that can be exchanged online for goods and
                  services. Cryptocurrencies go up and down in value however
                  they generate real no cash flow, similar to real currencies.{' '}
                </p>
              )}
            </li>
            <li className='py-6 border-gray-200 border-solid border-b'>
              <div className='flex justify-between items-center'>
                <h3 className='text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12'>
                  Can cryptocurrencies fail ?
                </h3>
                <div
                  className='cursor-pointer'
                  onClick={() =>
                    question === 4 ? setquestion(null) : setquestion(4)
                  }
                >
                  {question === 4 ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={36}
                      height={36}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='#A0AEC0'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      aria-label='Close'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={36}
                      height={36}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='#A0AEC0'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      aria-label='Open'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                      <line x1={12} y1={9} x2={12} y2={15} />
                    </svg>
                  )}
                </div>
              </div>
              {question === 4 && (
                <p className='pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg'>
                  Yes, close to 2,000 cryptocurrencies have failed. However
                  these failures were primarily due to poor management and
                  design{' '}
                </p>
              )}
            </li>
            <li className='py-6 border-gray-200 border-solid border-b'>
              <div className='flex justify-between items-center'>
                <h3 className='text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12'>
                  Why should I purchase crypto?
                </h3>
                <div
                  className='cursor-pointer'
                  onClick={() =>
                    question === 5 ? setquestion(null) : setquestion(5)
                  }
                >
                  {question === 5 ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={36}
                      height={36}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='#A0AEC0'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      aria-label='Close'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={36}
                      height={36}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='#A0AEC0'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      aria-label='Open'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={9} y1={12} x2={15} y2={12} />
                      <line x1={12} y1={9} x2={12} y2={15} />
                    </svg>
                  )}
                </div>
              </div>
              {question === 5 && (
                <p className='pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg'>
                  Cryptocurrency can be much more volatile than most investments
                  in the New York Stock Exchange. In order to gain a profit on
                  your crypto investment, someone essentially has to pay more
                  for the currency than you did. Cryptocurrencies allow for fast
                  and cheap global transactions. They also have increased
                  protection from theft.{' '}
                </p>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
