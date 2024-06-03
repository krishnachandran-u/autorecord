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
                {Object.keys(record.cycles[cycleId].experiments[expId].problems[id].src).map((key, index) => (
                    <TextInput 
                        id = {key}
                        name = {key}
                        key = {index}
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