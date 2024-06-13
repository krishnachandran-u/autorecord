"use client"
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { LuMoveRight } from "react-icons/lu";
import { ProjectContext } from '@/contexts/projectContext';
import { ImagesContext } from '@/contexts/imagesContext';

const LoadProject = (
    { onLoad } : { onLoad?: () => void }
) => {
    const { record, setRecord } = useContext(ProjectContext);
    const { images, setImages } = useContext(ImagesContext);

    const [projectList, setProjectList] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/list`);
            console.log(response.data);
            setProjectList(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const load = async ({ code }: { code: string }) => {
      try {
        const response = await axios.get(`http://localhost:5000/api/load/${code}`);
  
        if (response.status === 200) {
          const data = response.data;
          setRecord(data.json_data);
          
          const imageFiles = data.images.map((image: { name: string, data: string }) => {
            const byteCharacters = atob(image.data);
            const byteArrays = [];
            for (let i = 0; i < byteCharacters.length; i++) {
              byteArrays.push(byteCharacters.charCodeAt(i));
            }
            const byteArray = new Uint8Array(byteArrays);
            return new File([byteArray], image.name, { type: "image/jpeg" });
          });
          
          setImages(imageFiles);
        } else {
          console.error('Failed to load data');
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div 
            className = "fixed w-screen h-screen flex justify-center items-center top-0 left-0 bg-opacity-50 bg-slate-800 p-[24px] z-[20]"
        >
           <div className = "max-w-[500px] w-full bg-white rounded-[24px] p-[24px] sm:p-[32px] flex flex-col justify-between text-[18px] gap-[32px] transition-all duration-300 max-h-[500px]">
             <div className = "sm:text-[32px] text-[24px] font-semibold">Load project</div> 
             <div className = "flex flex-col gap-[8px] overflow-y-auto">
                {projectList.length === 0 && <div>No projects found.<br /><span className = "text-blue-600">Create a new project</span> to continue</div>}
                {projectList.map((projectCode) => (
                    <div
                        key = {projectCode}
                        className = "flex flex-row justify-between"
                    >
                        <div>{projectCode}</div>
                        <div
                            className = "p-[4px] hover:bg-slate-200 rounded-md transition-all duration-300"
                        >
                            <LuMoveRight
                                size = "24px"
                                onClick = {() => {
                                    load({ code: projectCode });
                                    if (onLoad) onLoad();
                                }}
                                className = "cursor-pointer text-blue-600 transition-all duration-300 hover:text-blue-800 "
                            />
                        </div>
                    </div>
                ))}
             </div>
             <button
                        className = "text-slate-600 font-bold p-[8px] pl-0 pr-[16px] hover:text-slate-800 duration-300 transition-all w-fit"
                        onClick = {
                            () => {
                                if (onLoad) onLoad();
                            }
                        }
                    >
                        Go back
                    </button>
           </div>
        </div>
    )
}

export default LoadProject;