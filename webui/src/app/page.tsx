"use client"
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Canvas from "@/components/canvas";
import { useState, useContext, useEffect } from "react";
import { ProjectContext } from "@/contexts/projectContext";
import StatusBar from "@/components/atoms/statusbar";
import Options from "@/components/atoms/options";
import { DummyProjectData } from "@/constants/projectData";
import { ImagesContext } from "@/contexts/imagesContext";

import { Sora } from "next/font/google";
const sora = Sora({subsets: ["latin"], weight: ["600"]});

export default function Home() {
  const { record , setRecord } = useContext(ProjectContext);
  const { images, setImages } = useContext(ImagesContext);

  const sampleurl = "https://cdn.shopify.com/s/files/1/0234/8017/2591/products/young-man-in-bright-fashion_925x_f7029e2b-80f0-4a40-a87b-834b9a283c39.jpg?v=1572867553";
  const fileName = "sample.jpg";

  useEffect(() => {
    setRecord(DummyProjectData);
    fetch(sampleurl)
      .then(response => response.blob())
      .then(blob => {
        const file = new File([blob], fileName);
        setImages([...images, file]);
      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
  }, []);

  useEffect(() => {
    console.log(record);
    console.log(images);
  }, [record, images]);

  return (
    <main className = "lg:p-[96px] md:p-[56px] py-[32px] px-[24px] flex flex-col size-full md:gap-[56px] gap-[40px] transition-all duration-300 h-full">
      <div className = {`flex justify-center items-center lg:text-5xl text-3xl font-semibold ${sora.className}`}>
        autorecord.
      </div>
      <div className = "flex flex-col md:gap-[40px] gap-[32px] h-full">
        <StatusBar /> 
        <div className = "flex lg:flex-row flex-col gap-[24px]">
          <Options /> 
          <div className = {`border-slate-600 border-[3px] w-full rounded-xl min-h-[400px] flex justify-center overflow-x-hidden h-full ${record === null? "items-center" : ""}`}>
            <Canvas />
          </div>
        </div>
      </div>
    </main>  
  );
}
