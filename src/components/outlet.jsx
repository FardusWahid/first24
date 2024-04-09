import Image from 'next/image'
export default function Outlet(props){
    return(
        <div className='w-full lg:w-[400px] flex justify-center mt-5'>
            
    
    
            <card className=" flex justify-center items-center flex-col shadow-lg shadow-red-900  rounded-xl ring-1 w-11/12 md:w-full
             
            
            ">
            <Image src={props.image} alt={props.alt} width={390} height={200}
              
                className="p-1 rounded-xl" />
             <h1 className="font-sans text-white font-bold text-shadow text-[16px] my-2">{props.title}</h1>
             <span className="flex space-x-1 text-sm tracking-tighter italic"><p className="tag">📂Classes {props.classamount}+</p><p className="tag3">🌐web app recorded</p></span>
            <span className=" flex space-x-5 mt-2 text-sm tracking-tighter italic"><p className="tag4">🕒Exam website</p><p className="tag2">study Materials📒</p></span>
            <h1 className="text-xl my-1 text-white">price:  <span className="font-sans font-bold text-2xl text-shadow" > {props.price}</span>BDT </h1>
           

            <div className="relative inline-flex  group mb-3">
    <div
        class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
    </div>
    <a href={props.link} title="Get quote now"
        class="relative inline-flex items-center ring-1 ring-gray-700 justify-center px-5 py-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        role="button">Get it now
    </a>
</div>






    </card>
            
        </div>
     
    )
    }
    
    Outlet.defaultProps={
        image: "/var23.jpg",
        alt: "ai image",
        title: "AI IS GONNA TAKE OVER THE WORLD",
        classamount: "null",
        price: "NULL"
    
    }