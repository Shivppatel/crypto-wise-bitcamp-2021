function Holding() {
  return (
    <div className='flex justify-between bg-indigo-600 p-5 rounded-md'>
      <div className='flex flex-col justify-center'>
        <img
          src='https://logos-world.net/wp-content/uploads/2020/08/Bitcoin-Logo.png'
          className='w-10 rounded-full self-center'
        />
        <h2 className='text-white self-center'>Bitcoin</h2>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-white self-center'>Position Value</h2>
        <h1 className='text-white self-center'>$131.63</h1>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-white self-center'>Percent Change</h2>
        <h1 className='text-green-300 self-center'>3.57%</h1>
      </div>
    </div>
  );
}
//text-gray-900
//text-gray-500
export default Holding;
