"use client"
import  { useState, useContext } from "react";
import Cycle from "./atoms/cycle";
import { ProjectContext } from "@/contexts/projectContext";

const Canvas = () => {
    const { record, loadRecord } = useContext(ProjectContext);

    return (
        <div className = "size-full md:p-[24px] lg:p-[32px] p-[16px] text-[20px]">
            {record.cycles.map((cycle, index) => (
                <Cycle id = {index} key = {index} />
            ))}
        </div>
    )
}

export default Canvas;