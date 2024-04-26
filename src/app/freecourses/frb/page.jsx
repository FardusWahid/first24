import Navbar from "@/components/header";

import { GrNext } from "react-icons/gr";
export default function Ict(){
    return(
        <div>
           <Navbar/>
            <div>
<h2 className="text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-700 text-2xl">Final Revision 2024 </h2>


<section className="w-[230px] mt-4 m-auto flex md:w-1/4 p-3 justify-center
bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] shadow-lg ring-1 hover:ring-yellow-400 rounded-full transition ease-in duration-300">
         <a className="flex gap-4 text-gray-200 hover:text-purple-900 truncate"
          href="/freecourses/frb/math"><h1 className="text-lg font-extrabold ">Mathematics 1st</h1> <GrNext size={25} /></a>
       </section>


       <section className="w-[230px] mt-4 m-auto flex md:w-1/4 p-3 justify-center
bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] shadow-lg ring-1 hover:ring-yellow-400 rounded-full transition ease-in duration-300">
         <a className="flex gap-4 text-gray-200 hover:text-purple-900 truncate"
          href="/freecourses/frb/math2"><h1 className="text-lg font-extrabold ">Mathematics 2nd</h1> <GrNext size={25} /></a>
       </section>


       <section className="w-[230px] mt-4 m-auto flex md:w-1/4 p-3 justify-center
bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] shadow-lg ring-1 hover:ring-yellow-400 rounded-full transition ease-in duration-300">
         <a className="flex gap-6 text-gray-200 hover:text-purple-900 truncate"
          href="/freecourses/frb/phy/1st"><h1 className="text-lg font-extrabold ">Physics 1st</h1> <GrNext size={25} /></a>
       </section>

       <section className="w-[230px] mt-4 m-auto flex md:w-1/4 p-3 justify-center
bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] shadow-lg ring-1 hover:ring-yellow-400 rounded-full transition ease-in duration-300">
         <a className="flex gap-5 text-gray-200 hover:text-purple-900 truncate"
          href="/freecourses/frb/phy/2nd"><h1 className="text-lg font-extrabold ">Physics 2nd</h1> <GrNext size={25} /></a>
       </section>

       <section className="w-[230px] mt-4 m-auto flex md:w-1/4 p-3 justify-center
bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] shadow-lg ring-1 hover:ring-yellow-400 rounded-full transition ease-in duration-300">
         <a className="flex gap-5 text-gray-200 hover:text-purple-900 truncate"
          href="/freecourses/frb/chem/1st"><h1 className="text-lg font-extrabold ">Chemistry 1st</h1> <GrNext size={25} /></a>
       </section>
       
       <section className="w-[230px] mt-4 m-auto flex md:w-1/4 p-3 justify-center
bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] shadow-lg ring-1 hover:ring-yellow-400 rounded-full transition ease-in duration-300">
         <a className="flex gap-4 text-gray-200 hover:text-purple-900 truncate"
          href="/freecourses/frb/chem/2nd"><h1 className="text-lg font-extrabold ">Chemistry 2nd</h1> <GrNext size={25} /></a>
       </section>

       <section className="w-[230px] mt-4 m-auto flex md:w-1/4 p-3 justify-center
bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] shadow-lg ring-1 hover:ring-yellow-400 rounded-full transition ease-in duration-300">
         <a className="flex gap-2 text-gray-200 hover:text-purple-900 truncate"
          href="/freecourses/frb/e2nd"><h1 className="text-lg font-extrabold ">English 2nd paper</h1> <GrNext size={25} /></a>
       </section>

            </div>
        </div>
    )
}