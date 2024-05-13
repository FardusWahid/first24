import Navbar from "@/components/header"
import Outlet from "@/components/outlet"
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import Topic from "@/components/topic";
import Try from "@/components/try";





export default function Home(props){



  return(
    <div>
     <Navbar/>

     <div className="md:flex md:flex-row-reverse m-1">
    <Try/>
    
<h1 className="text-center md:hidden mt-10 text-cyan-200 text-lg font-mono italic font-extrabold">Categories..</h1>
    <div className=" flex flex-wrap mt-2 md:w-[500px] md:mx-10 md:gap-10 md:mt-5">
    <Topic link="/add2.webp"
          title="ADMISSION"
          route="/admission"/>
    <Topic link="https://rootsedulive.com/static/media/school.9ce23c5d.svg"
          title="HSC 2024"
          route="/h24"/>
    <Topic link="https://rootsedulive.com/static/media/backpack.ce6cf69a.svg"
          title="HSC 2026"
          route="/h26"
          />
    <Topic link="/books.png"
          title="HSC 2025"
          route="/h25" />
    <Topic link="/skill.png"
          title="Skill Dev.."
          route="/skill" />
  </div>
  </div>

<br/><br/>
 
<p className="bg-pink-900 shadow-inner shadow-pink-500 w-[120px] mx-4 md:mx-10 py-1 px-2 rounded-xl flex justify-center">Latest add<GoDotFill size={23} color="red" /></p>
     <section className="flex flex-wrap gap-4 m-1 mt-0 md:m-10 justify-between">
     
     <Outlet     
image="/ict26.webp"
title="ACS ICT DeCoder 2026"
classamount="140"
price="199"
alt="eng24"
link="/payment"
    />

     <Outlet     
image="/frb.webp"
title="HSC Final Revision 2024"
classamount="150"
price="FREE "
alt="frb"
link="freecourses/frb"
    />

    
     <Outlet     
image="/eng24.jpg"
title="ACS Engineering Private Batch 2024"
classamount="140"
price="499"
alt="eng24"
link="https://acsengineering.netlify.app/"
    />
    <Outlet
image="/HSC-25.jpg"
title="ACS-25 Math 1st Paper ALL Cycle "
classamount="80"
price="399"
alt="math"
link="https://10msielts.netlify.app/"
/>

<Outlet    
     image="/ict.jpg"
     title="ICT DE-CODER 2025"
     classamount="60"
     price="FREE"
     alt="ict" 
     link="/freecourses/ict25"         
     />


<Outlet
image="/HSC-25.jpg"
title="ACS-25 Physics 1st Paper ALL Cycle "
classamount="80"
price="499"
alt="physics"
link="https://10msielts.netlify.app/"
/>

         <Outlet     
image="/code.png"
title="Complete WebDev -Programming Hero"
classamount="400"
price="299"
alt="code ur career"
link="https://programmingherro.netlify.app"
    />





    


<Outlet    
     image="/med.jpg"
     title="ACS Medical Private Batch 2024"
     classamount="120"
     price="499"
     alt="med" 
     link="/payment"         
     />







<Outlet    
     image="/DU.jpg"
     title="ACS varsity admission 2023"
     classamount="140"
     price="299"
     alt="23" 
     link="https://www.facebook.com/free.courses.vercel/"         
     />
   <Outlet    
     image="/eng23.jpg"
     title="ACS Engineering 2023"
     classamount="120"
     price="299"
     alt="23"
     link="https://www.facebook.com/free.courses.vercel/"         
          
     />





     </section>
     
     <section>
      <p className="text-center text-white mt-16"> &copy;2024</p>
     </section>

    </div>
  )
}