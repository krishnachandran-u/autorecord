"use client"
import  { useState } from "react";
import Cycle from "./atoms/cycle";

const Canvas = () => {
    return (
        <div className = "size-full md:p-[24px] lg:p-[32px] p-[16px] text-[20px]">
            <Cycle id="1" childCount= {0} />
        </div>
    )
}

export default Canvas;