"use client"
import { ReactNode, createContext } from "react";
import { useState } from "react";

export const ProjectContext = createContext<{
    record: {
        code: string;
        name: string;
        studentName: string;
        date: string;
        enforceTimes: boolean;
        monospace: boolean;
        cycles: {
            experiments: {
                name: string;
                date: string;
                hasSubProblems: boolean;
                src: {
                    aim: string;
                    algorithm: string;
                    program: string;
                    output: string[];
                    result: string;
                };
                problems: {
                    name: string;
                    src: {
                        aim: string;
                        algorithm: string;
                        program: string;
                        output: string[];
                        result: string;
                    };
                }[];
            }[];
        }[];
    };
    setRecord: React.Dispatch<React.SetStateAction<{
        code: string;
        name: string;
        studentName: string;
        date: string;
        enforceTimes: boolean;
        monospace: boolean;
        cycles: {
            experiments: {
                name: string;
                date: string;
                hasSubProblems: boolean;
                src: {
                    aim: string;
                    algorithm: string;
                    program: string;
                    output: string[];
                    result: string;
                };
                problems: {
                    name: string;
                    src: {
                        aim: string;
                        algorithm: string;
                        program: string;
                        output: string[];
                        result: string;
                    };
                }[];
            }[];
        }[];
    }>>; 
}>({
    record: {
        code: "",
        name: "",
        studentName: "",
        date: "",
        enforceTimes: false,
        monospace: true,
        cycles: [],
    },
    setRecord: () => {}
});

export const ProjectProvider = ({children}:{children: ReactNode}) => {
    const [record, setRecord] = useState({
        code: "",
        name: "",
        studentName: "",
        date: "",
        enforceTimes: false,
        monospace: true,
        cycles: [] as {
            experiments: {
                name: string;
                date: string;
                hasSubProblems: boolean;
                src: {
                    aim: string;
                    algorithm: string;
                    program: string;
                    output: string[];
                    result: string;
                };
                problems: {
                    name: string;
                    src: {
                        aim: string;
                        algorithm: string;
                        program: string;
                        output: string[];
                        result: string;
                    };
                }[];
            }[];
        }[]
    });

    return (
        <ProjectContext.Provider 
            value = {{record, setRecord}}
        >
            {children}
        </ProjectContext.Provider>
    )
}