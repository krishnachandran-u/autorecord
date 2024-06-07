import { useState } from "react";
import { motion , AnimatePresence } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import { useContext } from "react";
import { ProjectContext } from "@/contexts/projectContext";

import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

import TextInput from "./TextInput";
import Confirm from "@/components/atoms/confirm";

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
    const { record, setRecord } = useContext(ProjectContext);
    const [show, setShow] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const addProb = () => {
        setRecord(prevRecord => {
            const updatedProbs = [...prevRecord.cycles[cycleId].experiments[expId].problems];
            updatedProbs.push({
                name: `Problem ${updatedProbs.length + 1}`,
                src: {
                    aim: "",
                    algorithm: "",
                    program: "",
                    output: [],
                    result: ""
                }
            });
            return {
                ...prevRecord,
                cycles: prevRecord.cycles.map((cycle, index) => {
                    if(index === cycleId) {
                        return {
                            ...cycle,
                            experiments: cycle.experiments.map((exp, i) => {
                                if(i === expId) {
                                    return {
                                        ...exp,
                                        problems: updatedProbs
                                    };
                                }
                                return exp;
                            })
                        };
                    }
                    return cycle;
                })
            };
        });
    };

    const removeProb = () => {
        setRecord(prevRecord => {
            const updatedProbs = [...prevRecord.cycles[cycleId].experiments[expId].problems];
            updatedProbs.splice(id, 1);
            return {
                ...prevRecord,
                cycles: prevRecord.cycles.map((cycle, index) => {
                    if(index === cycleId) {
                        return {
                            ...cycle,
                            experiments: cycle.experiments.map((exp, i) => {
                                if(i === expId) {
                                    return {
                                        ...exp,
                                        problems: updatedProbs
                                    };
                                }
                                return exp;
                            })
                        };
                    }
                    return cycle;
                })
            };
        });
    };

    return (
        <div className={`flex flex-col gap-[2px] pl-[32px]`}>
            <div className="flex flex-row gap-[4px] items-center">
                <div>Problem {id + 1}</div>
                <FaAngleDown 
                    onClick={() => setShow(!show)}
                    color = "red" className = {`hover:cursor-pointer ${show ? "rotate-180" : ""} transition-all duration-300`}
                />
                <input 
                    type = "text" 
                    placeholder="Problem Name Here"
                    value = {record.cycles[cycleId].experiments[expId].problems[id].name}
                    onChange={(e) => {
                        setRecord(prevRecord => {
                            const updatedRecord = { ...prevRecord };
                            updatedRecord.cycles[cycleId].experiments[expId].problems[id].name = e.target.value;
                            return updatedRecord;
                        });
                    }}
                    className="border-2 border-gray-300 rounded-md p-1"
                />
                {id === record.cycles[cycleId].experiments[expId].problems.length - 1 && 
                record.cycles[cycleId].experiments[expId].hasSubProblems && 
                record.cycles[cycleId].experiments[expId].problems.length !== 1 && (
                     <FiMinus 
                         color = "red" 
                         className = "hover:cursor-pointer" 
                         onClick = {() => setShowConfirm(true)} 
                     /> 
                )}
                <AnimatePresence>
                    {showConfirm && (
                        <motion.div
                            initial = {{opacity: 0}}
                            animate = {{opacity: 1}}
                            exit = {{opacity: 0}}
                            transition={{duration: 0.3}}
                        >
                            <Confirm 
                                message = "Are you sure you want to delete this problem? (cannot be undone)"
                                onConfirm = {() => {
                                    removeProb();
                                    setShowConfirm(false);
                                }}
                                onCancel = {() => setShowConfirm(false)}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <AnimatePresence>
                {show && (
                    <motion.div 
                        initial = {{height: 0, opacity: 0}}     
                        animate = {{height: "auto", opacity: 1}}
                        exit = {{height: 0, opacity: 0}}
                        transition={{duration: 0.3}}
                        className = {`flex flex-col gap-[2px] pl-[32px] ${show ? "block" : "hidden"}`}
                        key = {0}
                    >
                        {Object.keys(record.cycles[cycleId].experiments[expId].problems[id].src).map((key, index) => (
                            <textarea
                                key = {index}
                                className = "w-full border-2 border-gray-300 rounded-md overflow-y-hidden"
                                onChange={(e) => {
                                    const textarea = e.target as HTMLTextAreaElement;
                                    textarea.style.height = "auto";
                                    textarea.style.height = `${textarea.scrollHeight}px`;
                                }}
                                placeholder = {key.charAt(0).toUpperCase() + key.slice(1)}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            {id === record.cycles[cycleId].experiments[expId].problems.length - 1 && (
                <FiPlus 
                    color = "red" 
                    className = "hover:cursor-pointer" 
                    onClick = {() => addProb()}
                /> 
            )}
        </div> 
    )
}

export default Prob;