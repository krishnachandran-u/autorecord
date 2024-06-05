import { motion , AnimatePresence } from "framer-motion";

import { FiPlus } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

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
    const [show, setShow] = useState(false);
    const [expName, setExpName] = useState(record.cycles[cycleId].experiments[id].name);

    return (
        <div className={`flex flex-col gap-[2px] pl-[32px]`}>
            <div
                className = "flex flex-row gap-[4px] items-center"
            >
                <div>Experiment {id + 1}</div>
                <FaAngleDown 
                    onClick={() => setShow(!show)}
                    color = "red" className = {`hover:cursor-pointer ${show ? "rotate-180" : ""} transition-all duration-300`}
                />
                <input 
                    type = "text" 
                    value = {expName}
                    placeholder="Experiment Name Here"
                    onChange={(e) => {
                        setExpName(e.target.value);
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
                        className = {`flex flex-col gap-[2px] pl-[32px] ${show ? "block" : "hidden"}`}
                        key={0}
                    >
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
                        {!record.cycles[cycleId].experiments[id].hasSubProblems && (
                            Object.keys(record.cycles[cycleId].experiments[id].src).map((key, index) => (
                            <textarea
                                key = {index}
                                className = "w-full border-2 border-gray-300 rounded-md overflow-y-hidden max-h-[300px]"
                                onChange={(e) => {
                                    const textarea = e.target as HTMLTextAreaElement;
                                    textarea.style.height = "auto";
                                    textarea.style.height = textarea.scrollHeight >= 300 ? '200px' : `${textarea.scrollHeight}px`;
                                }}
                                placeholder = {key.charAt(0).toUpperCase() + key.slice(1)}
                            />
                            ))
                        )}
                        <FiPlus color = "red" className = "hover:cursor-pointer" /> 
                    </motion.div>
                )}
            </AnimatePresence>
            {id === record.cycles[cycleId].experiments.length - 1 && (
                <FiPlus color = "red" className = "hover:cursor-pointer" /> 
            )}
        </div>
    )
}

export default Exp;