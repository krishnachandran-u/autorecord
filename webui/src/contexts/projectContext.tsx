"use client"
import { ReactNode, createContext } from "react";
import { useState } from "react";
import sample1 from "../../public/sample1.png"
import sample2 from "../../public/sample2.png"
import { useEffect } from "react";

import { DummyProjectData } from "../constants/projectData";

export const ProjectContext = createContext<{
    record: {
        code: string;
        name: string;
        studentName: string;
        date: string;
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