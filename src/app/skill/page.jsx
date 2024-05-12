import Navbar from '@/components/header'
import Outlet from '@/components/outlet'
export default function  Name(props){
    return(
        <div>
          <Navbar/>

          <h1 className="font-extrabold text-2xl text-center from-yellow-200 to-purple-700 bg-gradient-to-r bg-clip-text text-transparent md:text-3xl">Skill Development </h1>

<section className="flex flex-wrap gap-4 m-1 md:m-10 justify-between">



<Outlet     
image="/code.png"
title="Complete WebDev -Programming Hero"
classamount="400"
price="299"
alt="code ur career"
link="https://programmingherro.netlify.app"
    />


     </section>
        </div>
    )
}