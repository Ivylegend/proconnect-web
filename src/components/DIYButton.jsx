
import { Link } from 'react-router-dom'

export default function DIYButton({btnText, linkTo}) {
  return (
 
         <Link to= {linkTo}>
<button className='rounded-lg font-medium sm:flex items-center gap-4 justify-center text-[#DB251A] bg-transparent border py-3 px-6 cursor-pointer hover:bg-white hover:text-[#db251A] hover:border-[#db251A] hover:border transition-colors border-b-2 shadow-[0_4px_0px_rgba(0,0,0,0.25)]'>
    {btnText}
</button>
    </Link>

   
   
  )
}
