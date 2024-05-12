import Navbar from '@/components/header'
import Outlet from '@/components/outlet'
export default function  Name(props){
    return(
        <div>
          <Navbar/>

          <h1 className="font-extrabold text-2xl text-center from-yellow-200 to-purple-700 bg-gradient-to-r bg-clip-text text-transparent md:text-3xl">HSC 2025 </h1>

<section className="flex flex-wrap gap-4 m-1 md:m-10 justify-between">

<Outlet
image="/HSC-25.jpg"
title="ACS Physics 1st & 2nd Paper [6 Cycles] "
classamount="84"
price="499"
alt="py"
link="/payment"
/>

<Outlet
image="/maa1.jpg"
title="ACS Math 1st & 2nd Paper [6 Cycles] "
classamount="84"
price="499"
alt="math"
link="/payment"
/>
<Outlet
image="/chee1.jpg"
title="ACS Chemistry 1st & 2nd Paper [6 Cycles] "
classamount="84"
price="499"
alt="che"
link="/payment"
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