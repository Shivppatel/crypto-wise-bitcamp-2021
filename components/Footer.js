import Link from 'next/link';
function Footer() {
  return (
    <>
      <div className=' bg-linear-pink-invert pb-12'>
        <div className='mx-auto container pt-20 lg:pt-72 flex flex-col items-center justify-center'>
          <div>
            <img
              className='h-8 w-auto sm:h-10'
              src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            />
          </div>
          <div className='text-black flex flex-col md:items-center f-f-l pt-3'>
            <h1 className='text-2xl font-black text-gray-800'>
              Invest. Manage. Relax.
            </h1>
            <div className='my-6 text-base text-color f-f-l'>
              <ul className='md:flex items-center'>
                <Link href='/about'>
                  <li className=' md:mr-6 cursor-pointer pt-4 lg:py-0 text-gray-500 hover:text-gray-900'>
                    About
                  </li>
                </Link>
                <Link href='/'>
                  <li className=' md:mr-6 cursor-pointer pt-4 lg:py-0 text-gray-500 hover:text-gray-900'>
                    Home
                  </li>
                </Link>
                <Link href='/dashboard'>
                  <li className=' md:mr-6 cursor-pointer pt-4 lg:py-0 text-gray-500 hover:text-gray-900'>
                    Dashboard
                  </li>
                </Link>
                <a href='https://github.com/Shivppatel/crypto-wise-bitcamp-2021'>
                  <li className=' md:mr-6 cursor-pointer pt-4 lg:py-0 text-gray-500 hover:text-gray-900'>
                    Source Code
                  </li>
                </a>
                <Link href='/features'>
                  <li className=' md:mr-6 cursor-pointer pt-4 lg:py-0 text-gray-500 hover:text-gray-900'>
                    Features
                  </li>
                </Link>
                <Link href='/pricing'>
                  <li className=' md:mr-6 cursor-pointer pt-4 lg:py-0 text-gray-500 hover:text-gray-900'>
                    Pricing
                  </li>
                </Link>
              </ul>
            </div>
            <div className='text-sm text-color mb-10 f-f-l text-gray-500'>
              <p> © 2021 CryptoWise. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
