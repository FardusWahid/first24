import Navbar from "@/components/header";
import { GrDocumentPdf } from "react-icons/gr";


import { GrNext } from "react-icons/gr";
export default function Ict(){
    return(
<div className="bg-gradient-to-r from-[#000000] to-[#10012b]">
           <Navbar/>
            <div>
<h2 className="text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-blue-400 text-[33px] md:text-5xl">Final Revision 2024 </h2>


<section className="w-9/12 mt-4 m-auto flex md:w-1/4 p-3 justify-center
bg-gradient-to-r from-[#44beffa8] via-[#6c3066] to-[#02236d] shadow-lg ring-1 hover:ring-yellow-400 rounded-2xl transition ease-in duration-300">
         <a className="flex gap-4  hover:text-blue-400 active:text-purple-800 truncate"
          href="/freecourses/frb/math"><h1 className="text-lg font-extrabold">Mathematics 1st</h1> <GrNext size={25} /></a>
       </section>


       <section className="w-9/12 mt-4 m-auto flex md:w-1/4 p-3 justify-center
bg-gradient-to-r from-[#0aeb7e] via-[#d97b08ac] to-[#b6013d] shadow-lg ring-1 hover:ring-yellow-400 rounded-2xl transition ease-in duration-300">
         <a className="flex gap-4 text-gray-200 hover:text-purple-900 truncate"
          href="/freecourses/frb/math2"><h1 className="text-lg font-extrabold ">Mathematics 2nd</h1> <GrNext size={25} /></a>
       </section>


       <section className="w-9/12 mt-4 m-auto flex md:w-1/4 p-3 justify-center
bg-gradient-to-r from-[#830505] via-[#FF44EC] to-[#d0d070] shadow-lg ring-1 hover:ring-yellow-400 rounded-2xl transition ease-in duration-300">
         <a className="flex gap-6 text-gray-200 hover:text-purple-900 truncate"
          href="/freecourses/frb/phy/1st"><h1 className="text-lg font-extrabold ">Physics 1st</h1> <GrNext size={25} /></a>
       </section>

       <section className="w-9/12 mt-4 m-auto flex md:w-1/4 p-3 justify-center
bg-gradient-to-r from-[#2f3030] via-[#4551f7] to-[#73662a] shadow-lg ring-1 hover:ring-yellow-400 rounded-2xl transition ease-in duration-300">
         <a className="flex gap-5 text-gray-200 hover:text-purple-900 truncate"
          href="/freecourses/frb/phy/2nd"><h1 className="text-lg font-extrabold ">Physics 2nd</h1> <GrNext size={25} /></a>
       </section>

       <section className="w-9/12 mt-4 m-auto flex md:w-1/4 p-3 justify-center
bg-gradient-to-r from-[#44beff00] via-[#5a9a21] to-[#c20f0665] shadow-lg ring-1 hover:ring-yellow-400 rounded-2xl transition ease-in duration-300">
         <a className="flex gap-5 text-gray-200 hover:text-purple-900 truncate"
          href="/freecourses/frb/chem/1st"><h1 className="text-lg font-extrabold ">Chemistry 1st</h1> <GrNext size={25} /></a>
       </section>
       
       <section className="w-9/12 mt-4 m-auto flex md:w-1/4 p-3 justify-center
bg-gradient-to-r from-[#37006a6d] via-[#883d04] to-[#540602] shadow-lg ring-1 hover:ring-yellow-400 rounded-2xl transition ease-in duration-300">
         <a className="flex gap-4 text-gray-200 hover:text-purple-900 truncate"
          href="/freecourses/frb/chem/2nd"><h1 className="text-lg font-extrabold ">Chemistry 2nd</h1> <GrNext size={25} /></a>
       </section>

       <section className="w-9/12 mt-4 m-auto flex md:w-1/4 p-3 justify-center
bg-gradient-to-r from-[#b7ff01] via-[#000000] to-[#2f0069] shadow-lg ring-1 hover:ring-yellow-400 rounded-2xl transition ease-in duration-300">
         <a className="flex gap-2 text-gray-200 hover:text-purple-900 truncate"
          href="/freecourses/frb/e2nd"><h1 className="text-lg font-extrabold ">English 2nd paper</h1> <GrNext size={25} /></a>
       </section>

            </div>
            <br />
 <section className="w-4/5 m-auto lg:w-1/3">
 <p className="flex justify-center"> <a className="flex px-6 md:px-16 py-1 font-bold text-end rounded-xl text-gray-900 bg-gradient-to-r from-blue-500 via-orange-700 to-pink-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-lime-300 " href="https://tinyurl.com/frb244" target="_blank"> Lecture & Practice sheets &nbsp; <GrDocumentPdf size={22} />
 </a></p> 
 </section>
 <br /><br /><br /><br />
        </div>
    )
}