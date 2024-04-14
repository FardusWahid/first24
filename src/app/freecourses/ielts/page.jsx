'use client'
import Navbar from "@/components/header";
import { GrNext } from "react-icons/gr";
import ReactPlayer from 'react-player'
import Image from 'next/image'
import { Toaster } from 'react-hot-toast';
import {toast} from "react-hot-toast";
import { FaCopy } from "react-icons/fa";

export default function Ielts(){
    const copyToClipboard = () => {
        navigator.clipboard.writeText("I wish to proceed payment of 69 for 10MS Ielts 2024 ")
          .then(() => toast.success('Text copied to clipboard'))
          .catch(err => console.error('Error copying text: ', err));
      };


    return(
        <div className="">
            <Navbar/>
            <p className="flex text-sm mx-2"><a className="
           italic font-sans font-extrabold text-yellow-500" href="/">Home</a> <GrNext size={18} /> <a className="text-orange-600 italic font-sans font-bold" href="/freecourses">FreeCourse</a> <GrNext size={18}/> Ielts </p>
       

       
       
       
       
       <div className="grid justify-center items-center ">
       
        <section className=" w-full  mt-3 text-center grid justify-center items-center">
        <h1 className="font-sans font-extrabold text-center text-shadow text-xl md:text-4xl">IELTS Course by Munzereen Shahid</h1>

        <div className="box w-[360px] mt-4  md:w-[400px]  block m-auto">
<img src="/nuton.jpg" 
 alt="Ielts" className=" rounded-xl w-11/12 shadow-lg shadow-pink-500  md:w-[500px]"/>
<p className="tracking- text-sm flex gap-3 justify-center mt-3 m-1"><span className="tag text-[10px] italic">সবার জন্য Vocabulary PDF</span> <span className="tag2 italic font-extrabold">Lecture Sheets</span></p>
<p className="tracking-tighter text-sm flex gap-8 justify-center m-2"><span className="tag3 italic font-extrabold">Practice Sheets</span><span className="tag4 italic font-extrabold">other materials</span></p>
        </div>
        <div className="flex justify-center w-full">
  <button className="flex justify-center text-[14px] lg:text-[20px] items-center" onClick={copyToClipboard}>I wish to proceed payment of 69&nbsp;<FaCopy size={20} color="yellow" /></button>
  </div><br />
        <a className=" w-1/2 flex justify-center m-auto font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 px-6 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] bg-purple-200" href="https://www.facebook.com/free.courses.vercel/">COpy & Inbox</a>

        </section>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>


<div className="mt-10 mb-10">
       <a href="/freecourses/ielts/module1"><p className="text-center text-shadow font-extrabold font-mono italic underline">try it for free!</p></a>


</div> 
</div>
        </div>
    )

}
  