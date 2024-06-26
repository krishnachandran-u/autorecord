"use client"

import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { useContext } from "react";
import { ProjectContext } from "@/contexts/projectContext";

import { FaAngleDown } from "react-icons/fa";

import Exp from "@/components/atoms/exp";
import Confirm from "@/components/atoms/confirm";

type CycleProps = {
    id: number
}

const Cycle = (
    {props} :
    {props: CycleProps}
) => {

    const {id} = props;   
    const {record, setRecord } = useContext(ProjectContext);
    const [show, setShow] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const addCycle = () => {
        setRecord(prevRecord => {
            const updatedCycles = [...prevRecord.cycles];
            updatedCycles.push({
                experiments: [
                    {
                        name: "Experiment Name",
                        date: "",
                        hasSubProblems: false,
                        src: {
                            aim: "",
                            algorithm: "",
                            program: "",
                            output: [],
                            result: ""
                        },
                        problems: []
                    }
                ]
            });
            return {
                ...prevRecord,
                cycles: updatedCycles
            };
        });
    }

    const removeCycle = () => {
        setRecord(prevRecord => {
            const updatedCycles = [...prevRecord.cycles];
            updatedCycles.splice(id, 1);
            return {
                ...prevRecord,
                cycles: updatedCycles
            };
        });
    }

    return (
        <div className = "flex flex-col gap-[2px]">
            <div className = "flex flex-row gap-[4px] items-center">
                <div>Cycle {id + 1}</div>
                <FaAngleDown 
                    onClick={() => setShow(!show)}
                    color = "red" className = {`hover:cursor-pointer ${show ? "rotate-180" : ""} transition-all duration-300 min-w-[20px] min-h-[20px]`}
                />
                {/*
                <input 
                    type = "text" 
                    placeholder="Cycle Name Here"
                    value = {record.cycles[id]?.name ?? ''}
                    onChange={(e) => {
                        setRecord(prevRecord => {
                            const updatedCycles = [...prevRecord.cycles];
                            updatedCycles[id].name = e.target.value;
                            return {
                                ...prevRecord,
                                cycles: updatedCycles
                            };
                        });
                    }}
                    className="border-2 border-gray-300 rounded-md p-1"
                />
                */}
                {id === record.cycles.length - 1 && record.cycles.length !== 1 && (
                     <FiMinus 
                         color = "red" 
                         className = "hover:cursor-pointer min-w-[20px] min-h-[20px]" 
                         onClick = {() => setShowConfirm(true)} 
                     /> 
                 )}  
                <AnimatePresence>
                    {showConfirm &&
                        <motion.div
                            initial = {{opacity: 0}}
                            animate = {{opacity: 1}}
                            exit = {{opacity: 0}}
                            transition={{duration: 0.3}}
                            key={0}
                        >
                            <Confirm 
                                message = "Are you sure you want to delete this cycle? (cannot be undone)"
                                onConfirm = {
                                    () => {
                                        removeCycle();
                                        setShowConfirm(false);
                                    }
                                }
                                onCancel = {() => setShowConfirm(false)}
                            />
                        </motion.div>
                    }
                </AnimatePresence>
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
                    <FiPlus 
                        color = "red" 
                        className = "hover:cursor-pointer min-w-[20px] min-h-[20px]" 
                        onClick = {() => addCycle()} 
                    /> 
                )}
        </div>
    )
}

export default Cycle;