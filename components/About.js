import React from 'react';

function About() {
  return (
    <>
      <div className='md:mx-auto md:container px-4'>
        <div className='pt-10 md:pt-30'>
          <div className='container mx-auto'>
            <h1 className='text-3xl tracking-tight font-extrabold text-gray-900  sm:text-3xl md:text-4xl mx-auto pb-10'>
              About Us
            </h1>
            <div className='flex flex-wrap items-center pb-12'>
              <div className='md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6'>
                <div className='py-2 text-color'>
                  <h1 className='text-2xl lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black'>
                    Our Mission
                  </h1>
                  <h2 className='text-lg lg:text-3xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8'>
                    We want to make crypto investing accessible to everyone by
                    getting rid of the fear that crypto is highly volatile and
                    risky. We believe crypto investing is an untapped
                    opportunity for a majority of people to get into.
                  </h2>
                </div>
              </div>
              <div className='lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center'>
                <img
                  className='absolute w-full h-full inset-0 object-cover object-center rounded-md'
                  src='https://cdn.tuk.dev/assets/templates/prodify/ProductAdoption.png'
                  alt
                />
              </div>
            </div>
          </div>
        </div>
        <div className='pb-32 pt-16'>
          <div className='mx-auto'>
            <div className='flex flex-wrap flex-row-reverse items-center'>
              <div className='md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0'>
                <div className='py-2 text-color'>
                  <h1 className='text-2xl lg:text-6xl tracking-tighter md:leading-snug f-f-l font-black'>
                    Our Solution
                  </h1>
                  <h2 className='text-lg lg:text-3xl leading-7 md:leading-10 f-f-r py-8'>
                    At CryptoWise we help investors feel more secure about their
                    holdings by giving live updates about their portfolio. The
                    user gets to choose the contents of the update notifications
                    and how often the updates are sent.
                  </h2>
                </div>
              </div>
              <div className='lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center'>
                <img
                  className='absolute w-full h-full inset-0 object-cover object-center rounded-md'
                  src='https://cdn.tuk.dev/assets/templates/prodify/invoicing-system.png'
                  alt
                />
                <div className='relative z-10 p-4 bg-white shadow rounded mx-auto w-9/12 -mb-20'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
