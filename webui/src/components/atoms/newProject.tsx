"use client"
import { useState, useContext } from "react";
import { ProjectContext } from "@/contexts/projectContext";
import { ImagesContext } from "@/contexts/imagesContext";
import { useToast } from "../ui/use-toast";

import { Ubuntu_Mono } from "next/font/google";
const ubuntuMono = Ubuntu_Mono({subsets: ["latin"], weight: ["700"]});

const NewProject = (
    {onCreate}: 
    {onCreate?: () => void}
) => {
    const { record, setRecord } = useContext(ProjectContext);
    const { images, setImages } = useContext(ImagesContext);

    const { toast } = useToast();

    const [projectCode, setProjectCode] = useState("");
    const [projectName, setProjectName] = useState("");
    const [studentName, setStudentName] = useState("");
    const [submitDate, setSubmitDate] = useState("2012-12-12");

    const init = (
        {code, name, studentName, date}:
        {code: string, name: string, studentName: string, date: string}
    ) => {
        setRecord({
            code: code,
            name: name,
            studentName: studentName,
            date: date,
            enforceTimes: false,
            monospace: true,
            cycles: [
                {
                    experiments: [
                        {
                            name: "",
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
                }
            ]
        }) 
    }

    const isValidDate = ({dateString} : {dateString: string}) => {
      const date = new Date(dateString);

      return date.toString() !== 'Invalid Date' && date.toISOString().slice(0, 10) === dateString;
    }
    
    return (
        <div className = "fixed w-screen h-screen flex justify-center items-center top-0 left-0 bg-opacity-50 bg-slate-800 p-[24px]">
            <div className = "max-w-[700px] w-full bg-white rounded-[24px] p-[24px] sm:p-[32px] flex flex-col justify-between text-[18px] gap-[32px] transition-all duration-300">
                <div className = "sm:text-[32px] text-[24px] font-semibold">Create new project</div> 
                <div className = {`flex flex-col gap-[24px] ${ubuntuMono.className}`}>
                    <div className = "flex flex-row justify-between items-start">
                        <div className = "w-[200px]">Project code: </div>
                        <div className = "flex flex-col w-full">
                            <input
                                type="text"
                                value={projectCode}
                                maxLength={50}
                                onChange = {
                                    (e) => {
                                        setProjectCode(e.target.value.replace(/[^a-z0-9-]/g, ''));
                                    }
                                }
                                className={`bg-slate-200 text-black h-[36px] rounded-lg p-[8px] w-full ${ubuntuMono.className}`}
                            />
                            <div className = "text-[12px] text-red-600">*Cannot be empty</div>
                            <div className = "text-[12px] text-red-600">*Only letters (a-z), numbers (0-9), and hyphen (-) are allowed</div>
                        </div>
                    </div> 
                    <div className = "flex flex-row justify-between items-start">
                        <div className = "w-[200px]">Project name: </div>
                        <div className = "flex flex-col w-full">
                            <input
                                type="text"
                                value={projectName}
                                maxLength={50}
                                onChange = {
                                    (e) => {
                                        setProjectName(e.target.value);
                                    }
                                }
                                className={`bg-slate-200 text-black h-[36px] rounded-lg p-[8px] w-full ${ubuntuMono.className}`}
                            />
                            <div className = "text-[12px] text-red-600">*Cannot be empty</div>
                        </div>
                    </div>
                    <div className = "flex flex-row justify-between items-start">
                        <div className = "w-[200px]">Student name: </div>
                        <div className = "flex flex-col w-full">
                            <input
                                type="text"
                                value={studentName}
                                maxLength={50}
                                onChange = {
                                    (e) => {
                                        setStudentName(e.target.value);
                                    }
                                }
                                className={`bg-slate-200 text-black h-[36px] rounded-lg p-[8px] w-full ${ubuntuMono.className}`}
                            />
                            <div className = "text-[12px] text-red-600">*Cannot be empty</div>
                        </div>
                    </div>
                     <div className = "flex flex-row justify-between items-start">
                        <div className = "w-[200px]">Submission date: </div>
                        <div className = "flex flex-col w-full">
                            <input
                                type="date"
                                value={submitDate}
                                maxLength={50}
                                onChange = {
                                    (e) => {
                                        setSubmitDate(e.target.value);
                                        console.log(e.target.value);
                                    }
                                }
                                className={`bg-slate-200 text-black h-[36px] rounded-lg p-[8px] w-full ${ubuntuMono.className}`}
                            />
                            <div className = "text-[12px] text-red-600">*Cannot be empty</div>
                        </div>
                    </div>
                </div>
                <div className = "flex flex-row sm:gap-[64px] items-center sm:justify-normal justify-between sm:px-0 px-[32px]">
                    <button 
                        className = "text-blue-600 font-bold p-[8px] hover:text-blue-800 transition-all duration-300"
                        onClick={() => {
                            if(projectCode !== "" && projectName !== "" && studentName !== "" && isValidDate({dateString: submitDate})) {
                                init({code: projectCode, name: projectName, studentName: studentName, date: submitDate});
                                setImages([]);
                                toast({
                                    title: "Project created",
                                    description: "Project has been created successfully",
                                })
                                if (onCreate) onCreate();
                            }
                        }}
                    >
                        Create
                    </button>
                    <button
                        className = "text-slate-600 font-bold p-[8px] hover:text-slate-800 duration-300 transition-all"
                        onClick = {
                            () => {
                                if (onCreate) onCreate();
                            }
                        }
                    >
                        Go back
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NewProject;