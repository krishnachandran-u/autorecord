"use client"
import Canvas from "@/components/canvas";
import { useContext, useEffect } from "react";
import { ProjectContext } from "@/contexts/projectContext";
import StatusBar from "@/components/atoms/statusbar";
import Options from "@/components/atoms/options";
import { ImagesContext } from "@/contexts/imagesContext";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

import { Sora } from "next/font/google";
const sora = Sora({subsets: ["latin"], weight: ["600"]});

export default function Home() {
  const { record , setRecord } = useContext(ProjectContext);
  const { images, setImages } = useContext(ImagesContext);

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
  }, []);

  useEffect(() => {
    console.log(record);
    console.log(images);
  }, [record, images]);

  return (
    <main className = "lg:p-[96px] md:p-[56px] py-[32px] px-[24px] flex flex-col size-full md:gap-[56px] gap-[40px] transition-all duration-300 h-full">
      <div className = {`flex justify-center items-center lg:text-5xl text-3xl font-semibold text-blue-800 ${sora.className}`}>
        autorecord.
      </div>
      <div className = "flex flex-col md:gap-[40px] gap-[32px] h-full">
        <StatusBar /> 
        <div className = "flex lg:flex-row flex-col gap-[24px]">
          <AnimatePresence>
            {record.code !== "" && (
                <motion.div
                  initial = {{ opacity: 0, width: 0 }}
                  animate = {{ opacity: 1, width: "auto" }}
                  exit = {{ opacity: 0, width: 0}}
                  transition = {{ duration: 0.3 }}
                  key = {0}
                >
                  <Options /> 
                </motion.div>
            )}
          </AnimatePresence>
          <div className = {`border-blue-400 border-[3px] w-full rounded-xl min-h-[400px] flex justify-center overflow-x-hidden h-full ${record === null? "items-center" : ""}`}>
            <Canvas />
          </div>
        </div>
      </div>
    </main>  
  );
}
