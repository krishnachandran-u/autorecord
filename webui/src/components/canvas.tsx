"use client"
import  { useState } from "react";
import Cycle from "./atoms/cycle";

const Canvas = () => {
    const [record, setRecord] = useState({})

    const setDummyRecord = () => {
        setRecord({
            "1": "Experiment Name",
            "101": "Implement a menu-driven C program for performing various operations on a linked list, including display, insertion at the beginning, end, and a specified position, as well as deletion from the beginning, end, and a specified position.",
        })
    }

    return (
        <div className = "size-full md:p-[24px] lg:p-[32px] p-[16px] text-[20px]">
            <Cycle id="1" childCount= {0} />
        </div>
    )
}

export default Canvas;