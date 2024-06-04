import { FiPlus } from "react-icons/fi";
import { useState } from "react";

import { useContext } from "react";
import { ProjectContext } from "@/contexts/projectContext";

import { FaAngleDown } from "react-icons/fa";

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

    const [show, setShow] = useState(false);

    return (
        <div className = "flex flex-col gap-[2px]">
            <div className = "flex flex-row gap-[4px] items-center">
                <div>cycle {id + 1}</div>
                <FaAngleDown 
                    onClick={() => setShow(!show)}
                    color = "red" className = "hover:cursor-pointer" 
                />
            </div>
            <div
                className = {`flex flex-col gap-[2px] pl-[32px] ${show ? "block" : "hidden"}`}
            >
                {record.cycles[id].experiments.map((experiment, index) => (
                    <Exp 
                        props={{
                            cycleId: id,
                            id: index
                        }}
                        key = {index}
                    />
    
                ))}
            </div>
                {id === record.cycles.length - 1 && (
                    <FiPlus color = "red" className = "hover:cursor-pointer" /> 
                )}
        </div>
    )
}

export default Cycle;