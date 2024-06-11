import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
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

    return (
        <div className = "lg:w-fit w-full p-[24px] rounded-xl bg-black text-white gap-[24px] flex flex-col h-fit">
            <div className = "flex flex-row items-center gap-[32px] justify-between">
              <div className = "whitespace-nowrap">project name</div>
              <Input type = "text" className = "bg-slate-200 text-black h-[32px]" />
            </div>
            <div className = "flex flex-row items-center gap-[32px] justify-between">
              <div className = "whitespace-nowrap">enforce <span className = "font-serif text-[14px] font-bold">Times New Roman</span> </div>
              <Switch className = "bg-blue-500"/>
            </div>
            <div className = "flex flex-row items-center gap-[32px] justify-between">
              <div className = "md:whitespace-nowrap">use <span className = {ubuntuMono.className} >monospace</span> font for code stubs</div>
              <Switch />
            </div>
            <div className = "flex flex-row justify-between items-center gap-[32px]">
              <button
                className={buttonClassName}
                onClick={save}
              >
                Save
              </button>
              <button 
                className={buttonClassName}
              >
                Get PDF
              </button>
            </div>
        </div> 
    )
}

export default Options;