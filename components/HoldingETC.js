function HoldingETC() {
  return (
    <div className='flex justify-between bg-indigo-600 p-5 rounded-md'>
      <div className='flex flex-col justify-center'>
        <img
          src='https://image.pngaaa.com/466/1559466-middle.png'
          className='w-6 rounded-full self-center'
        />
        <h2 className='text-white self-center'>Ethereum</h2>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-white self-center'>Position Value</h2>
        <h1 className='text-white self-center'>$178.32</h1>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-white self-center'>Percent Change</h2>
        <h1 className='text-green-300 self-center'>24.57%</h1>
      </div>
    </div>
  );
}
//text-gray-900
//text-gray-500
export default HoldingETC;
