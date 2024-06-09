import { motion , AnimatePresence } from "framer-motion";

import { FiPlus } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";

import { useContext } from "react";

import { ProjectContext } from "@/contexts/projectContext";

import Prob from "@/components/atoms/prob";
import MyDropzone from "./dropzone";

import Confirm from "@/components/atoms/confirm";

type ExpProps = {
    cycleId: number,
    id: number
}

const Exp = (
    {props}:
    {props: ExpProps}
) => {
    const { cycleId, id } = props;
    const { record, setRecord } = useContext(ProjectContext);
    const [show, setShow] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [showProbConfirm, setShowProbConfirm] = useState(false);

    const expNum = () => {
        var num = 0;
        for(var i = 0; i < cycleId; i++) {
            num += record.cycles[i].experiments.length;
        }
        return num + id;
    }

    const addExp = () => {
      setRecord(prevRecord => {
        const updatedExps = [ ...prevRecord.cycles[cycleId].experiments];
        updatedExps.push({
                name: `Experiment Name`,
                date: "dd-mm-yyyy",
                hasSubProblems: false,
                src: {
                    aim: "Aim",
                    algorithm: "Algorithm",
                    program: "Program",
                    output: ["sample1", "sample2"],
                    result: "Result"
                },
                problems: []
            });
            return {
                ...prevRecord,
                cycles: prevRecord.cycles.map((cycle, index) => {
                    if(index === cycleId) {
                        return {
                            ...cycle,
                            experiments: updatedExps
                        }
                    }
                    return cycle;
                })
            }
        })
    };

    const removeExp = () => {
        setRecord(prevRecord => {
            const updatedRecord = {...prevRecord};
            updatedRecord.cycles[cycleId].experiments.splice(id, 1);
            return updatedRecord;
        });
    }

    const addProb = () => {
        setRecord(prevRecord => {
            const updatedProbs = [...prevRecord.cycles[cycleId].experiments[id].problems];
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
                                if(i === id) {
                                    return {
                                        ...exp,
                                        hasSubProblems: true,
                                        problems: updatedProbs,
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
            <div
                className = "flex flex-row gap-[4px] items-center"
            >
                <div className = "whitespace-nowrap">Experiment {expNum() + 1}</div>
                <FaAngleDown 
                    onClick={() => setShow(!show)}
                    color = "red" className = {`hover:cursor-pointer ${show ? "rotate-180" : ""} transition-all min-w-[20px] min-h-[20px] duration-300`}
                />
                <input 
                    type = "text" 
                    value = {record.cycles[cycleId].experiments[id].name}
                    placeholder="Experiment Name Here"
                    onChange={(e) => {
                        setRecord(prevRecord => {
                            const updatedRecord = {...prevRecord};
                            updatedRecord.cycles[cycleId].experiments[id].name = e.target.value;
                            return updatedRecord;
                        });
                    }}
                    className="border-2 border-gray-300 rounded-md p-1"
                />
                <input
                    type = "date"
                    value = {record.cycles[cycleId].experiments[id].date}
                    onChange={(e) => {
                        setRecord(prevRecord => {
                            const updatedRecord = {...prevRecord};
                            updatedRecord.cycles[cycleId].experiments[id].date = e.target.value;
                            return updatedRecord;
                        });
                    }}
                    className="border-2 border-gray-300 rounded-md p-1 min-w-[128px]"
                />
                {id === record.cycles[cycleId].experiments.length - 1 && record.cycles[cycleId].experiments.length !== 1 && (
                    <FiMinus 
                        color = "red" 
                        className = "hover:cursor-pointer min-w-[20px] min-h-[20px]" 
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
                            key={0}
                        >
                            <Confirm 
                                message = "Are you sure you want to delete this experiment? (cannot be undone)"
                                onConfirm = {() => {
                                    removeExp();
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
                            Object.keys(record.cycles[cycleId].experiments[id].src).map((key, index) => {
                                if (key !== "output") {
                                    return (
                                        <textarea
                                            key={index}
                                            className="w-full border-2 border-gray-300 rounded-md max-h-[300px] min-h-[64px] overflow-y-scroll"
                                            onChange={(e) => {
                                                const textarea = e.target as HTMLTextAreaElement;
                                                textarea.style.height = "auto";
                                                textarea.style.height = textarea.scrollHeight >= 200 ? '200px' : `${textarea.scrollHeight}px`;
                                            }}
                                            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                                        />
                                    );
                                } else {
                                    return (
                                        <div
                                            key = {index}
                                        >
                                            <MyDropzone
                                                props={{
                                                    cycleId: cycleId,
                                                    expId: id,
                                                    probId: -1
                                                }}
                                            />
                                        </div>
                                    );
                                }
                            })
                        )}
                        <FiPlus 
                            color = "red" 
                            className = "hover:cursor-pointer min-w-[20px] min-h-[20px]" 
                            onClick={() => setShowProbConfirm(true)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {showProbConfirm &&
                    <motion.div
                        initial = {{opacity: 0}}
                        animate = {{opacity: 1}}
                        exit = {{opacity: 0}}
                        transition={{duration: 0.3}}
                        key={0}
                    >
                        <Confirm 
                            message = "Are you sure want to add a problem? (Experiment will lose its current data)"
                            onConfirm = {
                                () => {
                                    addProb();
                                    setShowProbConfirm(false);
                                }
                            }
                            onCancel = {() => setShowProbConfirm(false)}
                        />
                    </motion.div>
                }
            </AnimatePresence>
            {id === record.cycles[cycleId].experiments.length - 1 && (
                <FiPlus 
                    color = "red" 
                    className = "hover:cursor-pointer min-w-[20px] min-h-[20px]" 
                    onClick = {() => addExp()}
                /> 
            )}
        </div>
    )
}

export default Exp;