"use client"
import { useState, useContext } from "react"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { useToast } from "../ui/use-toast"

import NewProject from "@/components/atoms/newProject"
import LoadProject from "@/components/atoms/loadProject"
import { motion, AnimatePresence } from "framer-motion"

import { ProjectContext } from "@/contexts/projectContext"
import { ImagesContext } from "@/contexts/imagesContext"

const StatusBar = () => {

    const { record, setRecord } = useContext(ProjectContext);
    const { images, setImages } = useContext(ImagesContext);

    const { toast } = useToast();

    const [showNewProject, setShowNewProject] = useState(false);
    const [showLoadProject, setShowLoadProject] = useState(false);

    const closeProject = () => {
        setRecord({
          code: "",
          name: "",
          studentName: "",
          date: "",
          enforceTimes: false,
          monospace: true,
          cycles: []
        });
        setImages([]);
        console.log("Project closed");
    }

    return (
        <div className = "bg-white rounded-xl flex lg:flex-row flex-col justify-center sm:justify-normal items-center gap-[24px]">
           <div className = "flex flex-col gap-[24px] sm:flex-row w-full">
             <button 
              className = "bg-slate-200 p-[12px] rounded-lg transition-all duration-300 w-full sm:w-auto text-blue-600 font-bold border-2 border-slate-200 hover:border-blue-600 hover:bg-white"
              onClick={() => setShowNewProject(true)}
            >
               Create new project
            </button>
            <button 
              className = "bg-slate-200 p-[12px] rounded-lg transition-all duration-300 w-full sm:w-auto text-blue-600 font-bold border-2 border-slate-200 hover:border-blue-600 hover:bg-white"
              onClick = {() => setShowLoadProject(true)}
            >
               Load existing project
            </button>
            {record.code &&(
              <motion.button 
                initial = {{ opacity: 0 }}
                animate = {{ opacity: 1 }}
                exit = {{ opacity: 0 }} 
                transition={{ duration: 0.3 }}
                key = {0}
                className = "bg-slate-200 p-[12px] rounded-lg transition-all duration-300 w-full sm:w-auto text-blue-600 font-bold border-2 border-slate-200 hover:border-blue-600 hover:bg-white"
                onClick = {
                  () => {
                    closeProject();
                    toast({
                      title: "Project closed",
                      description: "The project has been closed",
                    })
                  }
                }
              >
                Close project
              </motion.button>
            )}
           </div>
           <div className = "flex flex-col gap-[24px] sm:flex-row w-full lg:justify-end justify-start items-center">
             <button 
              className = "bg-slate-200 p-[12px] rounded-lg transition-all duration-300 w-full sm:w-auto text-blue-600 font-bold border-2 border-slate-200 hover:border-blue-600 hover:bg-white"
             >
               Credits
             </button>
             <Link href = "https://github.com/krishnachandran-u/autorecord" target="_blank" rel="noopener noreferrer" className = "w-full sm:w-auto">
               <button 
                className = "bg-slate-200 p-[12px] rounded-lg transition-all duration-300 w-full sm:w-auto text-blue-600 font-bold border-2 border-slate-200 hover:border-blue-600 hover:bg-white group flex flex-row justify-center items-center gap-[12px]"
                >
                 <FaGithub className = "text-blue-600" size="24px" />
                 <div>GitHub</div>
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
                className = "fixed z-[1]"
              >
                <NewProject 
                  onCreate = {() => setShowNewProject(false)}
                />
              </motion.div>)}
           </AnimatePresence>
           <AnimatePresence>
            {showLoadProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                key = {0}
                className = "fixed z-[1]"
              >
                <LoadProject 
                  onLoad = {() => setShowLoadProject(false)}
                />
              </motion.div>)}
           </AnimatePresence>
         </div> 
    )
}

export default StatusBar;