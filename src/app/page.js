import Navbar from "@/components/header"
import Outlet from "@/components/outlet"
export default function Home(){
  return(
    <div>
     <Navbar/>

     <section className="flex flex-wrap gap-4 m-1 md:m-10 justify-between">
    
    
     <Outlet     
image="/code.png"
title="Complete WebDev -Programming Hero"
classamount="400"
price="299"
alt="code ur career"
link="https://programmingherro.netlify.app"
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
image="/gram.jpg"
title="English Grammar Crash Course"
classamount="100"
price="150"
alt="grammar"
link="https://www.facebook.com/free.courses.vercel/"
    />
    


<Outlet    
     image="/med.jpg"
     title="ACS Medical Private Batch 2024"
     classamount="120"
     price="699"
     alt="med" 
     link="/commingsoon"         
     />


<Outlet    
     image="/frb.jpg"
     title="HSC Final revision 24"
     classamount="200"
     price="299"
     alt="frb"   
     link="https://acscourses.netlify.app/frb"    
     
     />

<Outlet
image="/ielts.jpeg"
title="IELTS Course by Munzereen Shahid"
classamount="50"
price="49"
alt="ielts"
link="/freecourses/ielts"
/>

    <Outlet    
     image="/ict.jpg"
     title="ICT DE-CODER 2025"
     classamount="60"
     price="0.00"
     alt="ict" 
     link="/freecourses/ict25"         
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
     price="199"
     alt="23"
     link="https://www.facebook.com/free.courses.vercel/"         
          
     />

    <Outlet    
     image="/blackk.jpg"
     title="Black Hat Money making"
     classamount="50"
     price="49"
     alt="money"
     link="https://www.facebook.com/free.courses.vercel/"          
     />

     </section>
     
     <section>
      <p className="text-center text-white mt-16"> &copy;2024</p>
     </section>

    </div>
  )
}