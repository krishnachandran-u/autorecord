"use client"
import { useState } from "react"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"

import NewProject from "@/components/atoms/newProject"
import { motion, AnimatePresence } from "framer-motion"

const StatusBar = () => {

    const [showNewProject, setShowNewProject] = useState(false)

    return (
        <div className = "p-[24px] bg-black rounded-xl flex lg:flex-row flex-col justify-center sm:justify-normal items-center gap-[24px]">
           <div className = "flex flex-col gap-[24px] sm:flex-row w-full">
             <button 
              className = "bg-white text-black p-[12px] rounded-lg border-2 border-white hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto"
              onClick={() => setShowNewProject(true)}
            >
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
           <AnimatePresence>
            {showNewProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                key = {0}
                className = "fixed"
              >
                <NewProject 
                  onCreate = {() => setShowNewProject(false)}
                />
              </motion.div>)}
           </AnimatePresence>
         </div> 
    )
}

export default StatusBar;