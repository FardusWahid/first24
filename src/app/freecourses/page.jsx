import Navbar from "@/components/header"
import Outlet from "@/components/outlet"
export default function Free(){

    return(
<div>
    <Navbar/>
    <h1 className="font-extrabold text-lg text-center from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent md:text-3xl">    OUR FREE NON PREMIUM COURSES</h1>

<section className="flex flex-wrap gap-4 m-1 md:m-10 justify-between">

<Outlet    
     image="/ict.jpg"
     title="ICT DE-CODER 2025"
     classamount="60"
     price="0.00"
     alt="ict"
     link="/freecourses/ict25"          
     />
     </section>
</div>
    )
}