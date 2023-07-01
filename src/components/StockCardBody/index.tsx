type Props = {
  stockNumbersToRender: {
    title: string;
    value: string;
    styles: string;
    distToPrice?: string
  }[]
}

export default function StockCardBody({stockNumbersToRender}:Props) {
  return (
   <>
   {stockNumbersToRender.map((number, index) => (
   number.value && 
   <div key={index}>
    <span className={number.styles}>{number.title}: </span>
{/* text-xs bg-green-500 text-green-950 rounded px-0.5 */}
    {number.distToPrice && <span className={`
   text-xs rounded px-0.5 
   ${number.distToPrice < 0 ? 'bg-green-500 text-green-950' : 'bg-red-500 text-red-950'}
    `
      

    }>{`${number.distToPrice}%`}</span>}
    <span>{number.value}</span>
   </div> 

   ))}
   <hr/>
   </>
  )
  
}