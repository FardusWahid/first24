import Image from "next/image";
import Link from "next/link";

export default function Topic(props){

    return(
        <div className="w-[100px] h-[110px] mt-2 mx-2 bg-slate-800 sha2 hover:bg-slate-900  rounded-lg p-2 grid items-center active:tracking-tighter   justify-center">
          <Link href={props.route}>  <Image src={props.link} width={70} height={70} className=""/>
            <h1 className="text-md active:text-yellow-200 active:tracking-tighter font-extrabold">{props.title}</h1></Link>

        </div>
    )
}