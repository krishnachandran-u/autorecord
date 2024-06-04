"use client"

import { Urbanist } from "next/font/google";

const font = Urbanist({subsets: ["latin"]});

import  { useState, useContext } from "react";
import Cycle from "./atoms/cycle";
import { ProjectContext } from "@/contexts/projectContext";

const Canvas = () => {
    const { record, loadRecord } = useContext(ProjectContext);

    return (
        <div className = {`size-full md:p-[24px] lg:p-[32px] p-[16px] text-[16px] ${font.className}`}>
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