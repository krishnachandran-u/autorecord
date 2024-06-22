import { useToast } from "../ui/use-toast";

import axios from "axios";

import { useContext } from "react";
import { ProjectContext } from "@/contexts/projectContext";
import { ImagesContext } from "@/contexts/imagesContext";

import { Ubuntu_Mono } from "next/font/google";
const ubuntuMono = Ubuntu_Mono({subsets: ["latin"], weight: ["700"]});

const buttonClassName = "flex-1 bg-white p-[8px] border-white border-2 text-black rounded-lg hover:text-white hover:bg-black transition-all duration-300";

const Options = () => {
    const { record, setRecord } = useContext(ProjectContext);
    const { images, setImages } = useContext(ImagesContext);

    const { toast } = useToast();

    const save = async () => {
      try {
      const formData = new FormData();
      formData.append("json_data", JSON.stringify(record));
      images.forEach((image) => {
        formData.append("images", image);
      });

      const response = await axios.post("http://localhost:5000/api/save", formData, {
        headers: {
        "Content-Type": "multipart/form-data"
        }
      });

      console.log(response.data);
      } catch (error) {
      console.error(error);
      }
    }


  const download = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/download/${record.code}`, {
        responseType: 'blob'
      });
  
      const blob = new Blob([response.data], { type: 'application/octet-stream' }); 
  
      const fileName = `${record.code}.zip`; 
  
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
  
      window.URL.revokeObjectURL(link.href);

    } catch (error) {
      console.error('Download error:', error);
    }
  }; 

  return (
        <div className = "lg:w-fit w-full rounded-xl gap-[24px] flex flex-col h-fit">
            <div
              className = "gap-[8px] flex flex-col"
            >
              <div className = "w-full bg-slate-200 text-black rounded-lg p-[8px]">
                <div className = {`${ubuntuMono.className} pl-[4px]`} >{record.code}</div>
              </div>
              <input 
                  className = {`w-full text-black rounded-lg p-[8px] border-2 border-slate-400 font-semibold ${ubuntuMono.className}`}
                  placeholder="Project Name"
                  value={record.name}
                  onChange={
                    (e) => {
                      setRecord({...record, name: e.target.value});
                    }
                  }
              />
              <input 
                  className = {`w-full text-black rounded-lg p-[8px] border-2 border-slate-400 font-semibold ${ubuntuMono.className}`}
                  placeholder="Student Name"
                  value={record.studentName}
                  onChange={
                    (e) => {
                      setRecord({...record, studentName: e.target.value});
                    }
                  }
              />
              <input 
                  type = "date"
                  className = {`w-full text-black rounded-lg p-[8px] border-2 border-slate-400 font-semibold ${ubuntuMono.className}`}
                  placeholder="Project Name"
                  value={record.date}
                  onChange={
                    (e) => {
                      setRecord({...record, date: e.target.value});
                    }
                  }
              />
            </div>
            <div className = {`flex flex-row items-center gap-[32px] justify-between font-semibold ${ubuntuMono.className}`}>
              <div className = "whitespace-nowrap">enforce Times New Roman</div>
              <input
                type="checkbox"
                checked={record.enforceTimes}
                onChange={(e) => setRecord({ ...record, enforceTimes: e.target.checked })}
                className="size-[20px]"
              />
            </div>
            <div className = {`flex flex-row items-center gap-[32px] justify-between font-semibold ${ubuntuMono.className}`}>
              <div className = "md:whitespace-nowrap">use monospace font for code stubs</div>
              <input
                type="checkbox"
                checked={record.monospace}
                onChange={(e) => setRecord({ ...record, monospace: e.target.checked })}
                className="size-[20px]"
              />
            </div>
            <div className = "flex flex-row justify-between items-center gap-[32px]">
              <button
                className = "bg-slate-200 p-[12px] rounded-lg transition-all duration-300 w-full sm:w-auto text-blue-600 font-bold border-2 border-slate-200 hover:border-blue-600 hover:bg-white flex-1"
                onClick = {() => {
                  save();
                  toast({
                    title: "Project saved",
                    description: "Your project has been saved successfully",
                  });
                }}
              >
                Save
              </button>
              <button 
                className = "bg-slate-200 p-[12px] rounded-lg transition-all duration-300 w-full sm:w-auto text-blue-600 font-bold border-2 border-slate-200 hover:border-blue-600 hover:bg-white flex-1"
                onClick = {
                  () => {
                    download();
                    toast({
                      title: "ZIP generated",
                      description: "Upload your zip at Overleaf",
                    })
                  }
                }
              >
                Get ZIP
              </button>
            </div>
        </div> 
    )
}

export default Options;