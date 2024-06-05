import Link from "next/link"
import { FaGithub } from "react-icons/fa"

const StatusBar = () => {
    return (
        <div className = "p-[24px] bg-black rounded-xl flex lg:flex-row flex-col justify-center sm:justify-normal items-center gap-[24px]">
           <div className = "flex flex-col gap-[24px] sm:flex-row w-full">
             <button className = "bg-white text-black p-[12px] rounded-lg border-2 border-white hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto">
               create new project
             </button>
             <button className = "bg-black border-2 border-white text-white p-[12px] rounded-lg hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto">
               load existing project
             </button>
           </div>
           <div className = "flex flex-col gap-[24px] sm:flex-row w-full lg:justify-end justify-start items-center">
             <button className = "bg-black border-2 border-white text-white p-[12px] rounded-lg hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto">
               credits
             </button>
             <Link href = "https://github.com/krishnachandran-u/autorecord" target="_blank" rel="noopener noreferrer" className = "w-full sm:w-auto">
               <button className = "bg-black border-2 border-white text-white p-[12px] rounded-lg hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto flex flex-row justify-center items-center gap-[12px] group">
                 <FaGithub className = "text-white group-hover:text-black transition-all duration-300" size="24px" />
                 <div>github</div>
               </button>
             </Link>
           </div>
         </div> 
    )
}

export default StatusBar;