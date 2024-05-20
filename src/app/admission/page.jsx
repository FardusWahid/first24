import Navbar from '@/components/header'
import Outlet from '@/components/outlet'
export default function  Name(props){
    return(
        <div>
          <Navbar/>

          <h1 className="font-extrabold text-2xl text-center from-yellow-200 to-purple-700 bg-gradient-to-r bg-clip-text text-transparent md:text-3xl">Admission </h1>

<section className="flex flex-wrap gap-4 m-1 md:m-10 justify-between">



<Outlet     
image="/eng24.jpg"
title="ACS Engineering Private Batch 2024"
classamount="140"
price="499"
alt="eng24"
link="/payment"
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
        </div>
    )
}