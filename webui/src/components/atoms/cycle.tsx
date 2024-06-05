import { FiPlus } from "react-icons/fi";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { useContext, ChangeEvent } from "react";
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
    const [cycleName, setCycleName] = useState(record.cycles[id].name);

    return (
        <div className = "flex flex-col gap-[2px]">
            <div className = "flex flex-row gap-[4px] items-center">
                <div>Cycle {id + 1}</div>
                <FaAngleDown 
                    onClick={() => setShow(!show)}
                    color = "red" className = {`hover:cursor-pointer ${show ? "rotate-180" : ""} transition-all duration-300`}
                />
                <input 
                    type = "text" 
                    value = {cycleName}
                    placeholder="Cycle Name Here"
                    onChange={(e) => {
                        setCycleName(e.target.value);
                    }}
                    className="border-2 border-gray-300 rounded-md p-1"
                />
            </div>
            <AnimatePresence>
            {show && (
                <motion.div
                    initial = {{height: 0, opacity: 0}}  
                    animate = {{height: "auto", opacity: 1}}
                    exit = {{height: 0, opacity: 0}}
                    transition={{duration: 0.3}}
                    className = {`flex flex-col gap-[2px] pl-[32px]`}
                    key = {0}
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
                </motion.div>
            )}
            </AnimatePresence>
                {id === record.cycles.length - 1 && (
                    <FiPlus color = "red" className = "hover:cursor-pointer" /> 
                )}
        </div>
    )
}

export default Cycle;