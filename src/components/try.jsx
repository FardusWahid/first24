import Link from "next/link";
import { IoChevronForwardCircleSharp } from "react-icons/io5";




export default function Try(){
    return(
        <div className=" bg-blue-800 w-[330px] h-[320px] md:w-[430px] lg:w-[550px] lg:h-[480px] md:h-[400px] m-auto no  mt-1 flex items-end justify-center">

            <Link className=" active:tracking-widest shadow-inner shadow-yellow-800 flex mb-1 w-[320px] md:w-[430px] justify-center rounded-lg  tracking-wider bg-[#C8F560] hover:bg-[#a3c84d]  text-xl font-extrabold font-serif px-6  py-2 text-black" href="/freecourses">Try us out for free &nbsp;<IoChevronForwardCircleSharp size={31} />

</Link>

            
        </div>
    )
}