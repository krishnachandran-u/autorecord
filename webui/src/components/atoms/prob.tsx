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

    return (
        <div className={`flex flex-col gap-[2px] pl-[32px]`}>
            <div>problem {id + 1}</div>
            <div className = "pl-[32px]">
                <div
                    className="flex flex-col gap-[2px]"
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
            </div>
            {id === record.cycles[cycleId].experiments[expId].problems.length - 1 && (
                <FiPlus color = "red" className = "hover:cursor-pointer" /> 
            )}
        </div> 
    )
}

export default Prob;