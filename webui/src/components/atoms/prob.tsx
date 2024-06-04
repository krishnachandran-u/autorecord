import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useContext } from "react";
import { ProjectContext } from "@/contexts/projectContext";

import { FiPlus } from "react-icons/fi";

import TextInput from "./TextInput";

type ProbProps = {
    cycleId: number,
    expId: number,
    id: number
}

const Prob = (
    {props}:
    {props: ProbProps}
) => {

    const { cycleId, expId, id } = props;
    const { record, loadRecord } = useContext(ProjectContext);

    const [show, setShow] = useState(false);

    return (
        <div className={`flex flex-col gap-[2px] pl-[32px]`}>
            <div className="flex flex-row gap-[4px] items-center">
                <div>problem {id + 1}</div>
                <FaAngleDown 
                    onClick={() => setShow(!show)}
                    color = "red" className = "hover:cursor-pointer" 
                />
            </div>
            <div 
                className = {`flex flex-col gap-[2px] pl-[32px] ${show ? "block" : "hidden"}`}
            >
                {Object.keys(record.cycles[cycleId].experiments[expId].problems[id].src).map((key, index) => (
                    <textarea
                        key = {index}
                        className = "w-full border-2 border-gray-200 rounded-md overflow-y-hidden"
                        onChange={(e) => {
                            const textarea = e.target as HTMLTextAreaElement;
                            textarea.style.height = "auto";
                            textarea.style.height = `${textarea.scrollHeight}px`;
                        }}
                        placeholder = {key}
                    />
                ))}
            </div>
            {id === record.cycles[cycleId].experiments[expId].problems.length - 1 && (
                <FiPlus color = "red" className = "hover:cursor-pointer" /> 
            )}
        </div> 
    )
}

export default Prob;