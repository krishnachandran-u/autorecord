import { FiPlus } from "react-icons/fi";

import { useContext } from "react";

import { ProjectContext } from "@/contexts/projectContext";

import Prob from "@/components/atoms/prob";

type ExpProps = {
    cycleId: number,
    id: number
}

const Exp = (
    {props}:
    {props: ExpProps}
) => {
    const { cycleId, id } = props;
    const { record, loadRecord } = useContext(ProjectContext);

    return (
        <div className={`flex flex-col gap-[2px] pl-[32px]`}>
            <div>experiment {id + 1}</div>
            <div className = "pl-[32px]">
                {record.cycles[cycleId].experiments[id].hasSubProblems && (
                    record.cycles[cycleId].experiments[id].problems.map((problem, index) => (
                        <Prob 
                            props={{
                                cycleId: cycleId,
                                expId: id,
                                id: index
                            }}
                            key = {index}
                        />
                    ))
                )}
                <FiPlus color = "red" className = "hover:cursor-pointer" /> 
            </div>
            {id === record.cycles[cycleId].experiments.length - 1 && (
                <FiPlus color = "red" className = "hover:cursor-pointer" /> 
            )}
        </div>
    )
}

export default Exp;