import Navbar from "@/components/header";

import { GrNext } from "react-icons/gr";
export default function Ict(){
    return(
        <div>
           <Navbar/>
            <div>
<h2 className="text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-700 text-2xl">ICT DE-CODER 2025 </h2>


<section className="w-[230px] mt-4 m-auto flex md:w-1/4 p-3 justify-center
bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] shadow-lg ring-1 hover:ring-yellow-400 rounded-full transition ease-in duration-300">
         <a className="flex gap-6 text-gray-200 hover:text-purple-900 truncate"
          href="/freecourses/ict25/chap12"><h1 className="text-lg font-extrabold ">Chapter 1 & 2</h1> <GrNext size={25} /></a>
       </section>


       <section className="w-[230px] mt-4 m-auto flex md:w-1/4 p-3 justify-center
bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] shadow-lg ring-1 hover:ring-yellow-400 rounded-full transition ease-in duration-300">
         <a className="flex gap-10 text-gray-200 hover:text-purple-900 truncate"
          href="/freecourses/ict25/chap3"><h1 className="text-lg font-extrabold ">Chapter 3</h1> <GrNext size={25} /></a>
       </section>

       <section className="w-[230px] mt-4 m-auto flex md:w-1/4 p-3 justify-center
bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] shadow-lg ring-1 hover:ring-yellow-400 rounded-full transition ease-in duration-300">
         <a className="flex gap-10 text-gray-200 hover:text-purple-900 truncate"
          href="/freecourses/ict25/chap4"><h1 className="text-lg font-extrabold ">Chapter 4</h1> <GrNext size={25} /></a>
       </section>

       <section className="w-[230px] mt-4 m-auto flex md:w-1/4 p-3 justify-center
bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] shadow-lg ring-1 hover:ring-yellow-400 rounded-full transition ease-in duration-300">
         <a className="flex gap-12 text-gray-200 hover:text-purple-900 truncate"
          href="/freecourses/ict25/chap5"><h1 className="text-lg font-extrabold ">Chapter 5</h1> <GrNext size={25} /></a>
       </section>

            </div>
        </div>
    )
}