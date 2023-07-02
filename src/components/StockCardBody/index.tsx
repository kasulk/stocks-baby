type Props = {
  stockNumbersToRender: {
    title: string;
    value: string;
    styles: string;
    // distToPrice?: string
    distToPrice?: number

  }[]
}

export default function StockCardBody({stockNumbersToRender}:Props) {
  return (
   <>
   {stockNumbersToRender.map((number, index) => (
   number.value && 
   <div key={index}>
    <span className={number.styles}>{number.title}: </span>
    {number.distToPrice && 
    <span className={` text-xs rounded px-0.5 
   ${number.distToPrice < 0 ? 'bg-green-500 text-green-950' : 'bg-red-500 text-red-950'} `}>
    {`${number.distToPrice > 0 ? '+' : ''}${number.distToPrice.toFixed(0)}%`}</span>}
    <span>{number.value}</span>
   </div> 

   ))}
   <hr/>
   </>
  )
  
}