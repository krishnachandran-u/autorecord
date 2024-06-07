"use client"
import { ReactNode, createContext } from "react";
import { useState } from "react";
import sample1 from "../../public/sample1.png"
import sample2 from "../../public/sample2.png"
import { useEffect } from "react";

import { DummyProjectData } from "../constants/projectData";

export const ProjectContext = createContext<{
    record: {
        cycles: {
            name: string;
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
        cycles: {
            name: string;
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
        cycles: [],
    },
    setRecord: () => {}
});

export const ProjectProvider = ({children}:{children: ReactNode}) => {
    const [record, setRecord] = useState({
        cycles: [] as {
            name: string;
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