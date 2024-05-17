"use client"
import  { useState, useContext } from "react";
import Cycle from "./atoms/cycle";
import { ProjectContext } from "@/contexts/projectContext";

const Canvas = () => {
    const { record, loadRecord } = useContext(ProjectContext);

    return (
        <div className = "size-full md:p-[24px] lg:p-[32px] p-[16px] text-[20px]">
            <Cycle id="1" childCount= {0} />
        </div>
    )
}

export default Canvas;