import Navbar from "@/components/header"
import Outlet from "@/components/outlet"
export default function Free(){

    return(
<div>
    <Navbar/>
    <h1 className="font-extrabold text-2xl text-center from-yellow-300 via-purple-500 to-yellow-600 bg-gradient-to-r bg-clip-text text-transparent md:text-3xl">    Fremium Courses</h1>

<section className="flex flex-wrap gap-4 m-1 md:m-10 justify-between">

<Outlet     
image="/frb.webp"
title="HSC Final Revision 2024"
classamount="150"
price="FREE "
alt="frb"
link="freecourses/frb"
    />

<Outlet    
     image="/ict.jpg"
     title="ICT DE-CODER 2025"
     classamount="60"
     price="FREE "
     alt="ict"
     link="/freecourses/ict25"          
     />
     </section>
</div>
    )
}