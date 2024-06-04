"use client"
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Canvas from "@/components/canvas";
import { useState, useContext, useEffect } from "react";
import { ProjectContext } from "@/contexts/projectContext";

export default function Home() {
  const { record , loadRecord } = useContext(ProjectContext);

  useEffect(() => {
    loadRecord();
  }, []);

  useEffect(() => {
    console.log(record);
  }, [record]);

  return (
    <main className = "lg:p-[96px] md:p-[56px] py-[32px] px-[24px] flex flex-col size-full md:gap-[56px] gap-[40px] transition-all duration-300 h-full">
      <div className = "flex justify-center items-center lg:text-5xl text-3xl font-semibold">
        autorecord.
      </div>
      <div className = "flex flex-col md:gap-[40px] gap-[32px] h-full">
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
        <div className = "flex lg:flex-row flex-col gap-[24px]">
          <div className = "border-2 border-slate-600 lg:w-fit w-full p-[24px] rounded-xl bg-slate-600 text-white gap-[24px] flex flex-col h-fit">
            <div className = "flex flex-row items-center gap-[32px] justify-between">
              <div className = "whitespace-nowrap">project name</div>
              <Input type = "text" className = "bg-slate-600" />
            </div>
            <div className = "flex flex-row items-center gap-[32px] justify-between">
              <div className = "whitespace-nowrap">enforce <b>Times New Roman</b></div>
              <Switch />
            </div>
            <div className = "flex flex-row items-center gap-[32px] justify-between">
              <div className = "md:whitespace-nowrap">use monospace font for code stubs</div>
              <Switch />
            </div>
            <div className = "flex flex-row justify-between items-center gap-[32px]">
              <button className = "flex-1 bg-white p-[12px] border-white border-2 text-black rounded-lg hover:scale-110 hover:bg-slate-600 hover:text-white transition-all duration-300">save</button>
                <button className = "flex-1 bg-white p-[12px] border-white border-2 text-black rounded-lg hover:scale-110 hover:bg-slate-600 hover:text-white transition-all duration-300">get</button>
            </div>
          </div> 
          <div className = {`border-slate-600 border-[3px] w-full rounded-xl min-h-[400px] flex justify-center overflow-x-hidden ${record === null? "items-center" : ""}`}>
            <Canvas />
          </div>
        </div>
      </div>
    </main>  
  );
}
