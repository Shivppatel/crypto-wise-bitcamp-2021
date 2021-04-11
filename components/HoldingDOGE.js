function HoldingDOGE() {
  return (
    <div className='flex justify-between bg-indigo-600 p-5 rounded-md'>
      <div className='flex flex-col justify-center'>
        <img
          src='https://mpng.subpng.com/20180413/sge/kisspng-dogecoin-cryptocurrency-dash-digital-currency-doge-5ad13b0da01474.3329552115236615816557.jpg'
          className='w-6 rounded-full self-center'
        />
        <h2 className='text-white self-center'>Dogecoin</h2>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-white self-center'>Position Value</h2>
        <h1 className='text-white self-center'>$28.22</h1>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-white self-center'>Percent Change</h2>
        <h1 className='text-red-300 self-center'>4.57%</h1>
      </div>
    </div>
  );
}
//text-gray-900
//text-gray-500
export default HoldingDOGE;
