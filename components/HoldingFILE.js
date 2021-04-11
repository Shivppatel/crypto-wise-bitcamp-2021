function HoldingFILE() {
  return (
    <div className='flex justify-between bg-indigo-600 p-5 rounded-md'>
      <div className='flex flex-col justify-center'>
        <img
          src='https://cryptologos.cc/logos/filecoin-fil-logo.png'
          className='w-6 rounded-full self-center'
        />
        <h2 className='text-white self-center'>Filecoin</h2>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-white self-center'>Position Value</h2>
        <h1 className='text-white self-center'>$52.63</h1>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-white self-center'>Percent Change</h2>
        <h1 className='text-green-300 self-center'>1.26%</h1>
      </div>
    </div>
  );
}
//text-gray-900
//text-gray-500
export default HoldingFILE;
