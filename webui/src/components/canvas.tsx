"use client"

import { Ubuntu_Mono } from "next/font/google";

const font = Ubuntu_Mono({subsets: ["latin"], weight: ["400", "700"]});

import  { useState, useContext } from "react";
import Cycle from "./atoms/cycle";
import { ProjectContext } from "@/contexts/projectContext";

const Canvas = () => {
    const { record, setRecord } = useContext(ProjectContext);

    return (
        <div className = {`w-full min-h-[400px] md:p-[24px] lg:p-[32px] p-[16px] text-[16px] gap-[2px] flex flex-col overflow-x-scroll ${font.className}`}>
            {record.cycles.map((cycle, index) => (
                <Cycle  
                props={{
                    id: index
                }}
                key = {index} />
            ))}
        </div>
    )
}

export default Canvas;