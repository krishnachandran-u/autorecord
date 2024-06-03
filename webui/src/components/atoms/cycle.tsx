import { FiPlus } from "react-icons/fi";

import { useContext } from "react";
import { ProjectContext } from "@/contexts/projectContext";

const Cycle = (
    {id} :
    {id: number}
) => {
    const { record, loadRecord } = useContext(ProjectContext);

    return (
        <div className = "flex flex-col gap-[2px]">
            <div>cycle {id}</div>
            <div className = "pl-[32px]">
                <FiPlus color = "red" className = "hover:cursor-pointer" /> 
            </div>
            {id === record.cycles.length - 1 && (
                <FiPlus color = "red" className = "hover:cursor-pointer" /> 
            )}
        </div>
    )
}

export default Cycle;