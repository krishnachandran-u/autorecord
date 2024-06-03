import { FiPlus } from "react-icons/fi";

import { useContext } from "react";
import { ProjectContext } from "@/contexts/projectContext";

import Exp from "@/components/atoms/exp";

type CycleProps = {
    id: number
}

const Cycle = (
    {props} :
    {props: CycleProps}
) => {

    const {id} = props;   
    const { record, loadRecord } = useContext(ProjectContext);

    return (
        <div className = "flex flex-col gap-[2px]">
            <div>cycle {id + 1}</div>
            <div className = "pl-[32px]">
                <FiPlus color = "red" className = "hover:cursor-pointer" /> 
            </div>
            {record.cycles[id].experiments.map((experiment, index) => (
                <Exp 
                    props={{
                        cycleId: id,
                        id: index
                    }}
                    key = {index}
                />

            ))}
            {id === record.cycles.length - 1 && (
                <FiPlus color = "red" className = "hover:cursor-pointer" /> 
            )}
        </div>
    )
}

export default Cycle;