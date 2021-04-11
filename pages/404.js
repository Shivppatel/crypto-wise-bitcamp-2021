import NavBar from '../components/NavBar';
function Custom404() {
  return (
    <>
      <NavBar />
      <div className='mx-auto container pt-20 lg:pt-72 flex flex-col'>
        <h1 className='text-4xl tracking-tight font-extrabold text-gray-900  sm:text-5xl md:text-6xl mx-auto'>
          404 Error
        </h1>
      </div>
    </>
  );
}

export default Custom404;
