"use client"
import { ReactNode, createContext } from "react";
import { useState } from "react";
import sample1 from "../../public/sample1.png"
import sample2 from "../../public/sample2.png"
import { useEffect } from "react";

import { DummyProjectData } from "../constants/projectData";

export const ProjectContext = createContext({
    record: {
        cycles: [] as {
            name: string;
            experiments: {
                name: string;
                hasSubProblems: boolean;
                src: {
                    aim: string;
                    algorithm: string;
                    program: string;
                    output: string[];
                    result: string;
                };
                problems: ({ /* ... */ } | { /* ... */ })[];
            }[];
        }[]
    },
    loadRecord: () => {}
});

export const ProjectProvider = ({children}:{children: ReactNode}) => {
    const [record, setRecord] = useState({
        cycles: [] as {
            name: string;
            experiments: {
                name: string;
                hasSubProblems: boolean;
                src: {
                    aim: string;
                    algorithm: string;
                    program: string;
                    output: string[];
                    result: string;
                };
                problems: ({ /* ... */ } | { /* ... */ })[];
            }[];
        }[]
    });

    const loadRecord = () => {
        setRecord(DummyProjectData);
    }

    return (
        <ProjectContext.Provider 
            value = {{record, loadRecord}}
        >
            {children}
        </ProjectContext.Provider>
    )
}