import Navbar from "@/components/header"
import Outlet from "@/components/outlet"
export default function All(){
  return(
    <div>
     <Navbar/>

     <section className="flex flex-wrap gap-4 m-1 md:m-10 justify-between">
    
    
     <Outlet     
image="/hand.jpg"
title="সুন্দর ও দ্রুত Bangla হাতের লেখা"
classamount="40"
price="70"
alt="handw"
link="https://www.facebook.com/free.courses.vercel/"
    />
    
     <Outlet     
image="/commi.jpg"
title="Communication Master Class"
classamount="30"
price="70"
alt="commu"
link="https://www.facebook.com/free.courses.vercel/"
    />

<Outlet     
image="/mg.jpg"
title="Interactive Motion Design"
classamount="100"
price="70"
alt="mg"
link="https://www.facebook.com/free.courses.vercel/"
    />
    


<Outlet    
     image="/fb.jpg"
     title="Facebook Marketing"
     classamount="50"
     price="70"
     alt="mark" 
     link="https://www.facebook.com/free.courses.vercel/"         
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
price="100"
alt="ielts"
link="https://10msielts.netlify.app/"
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