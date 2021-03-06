import { signIn } from 'next-auth/client';
import Link from 'next/link';
function NavBar() {
  return (
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
          </div>
        </div>
        <div class='hidden md:block md:ml-10 md:pr-4 md:space-x-8'>
          <a href='/' className='font-medium text-gray-500 hover:text-gray-900'>
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
  );
}

export default NavBar;
