"use client";
import { ReactNode, createContext } from "react";
import { useState } from "react";

export const ImagesContext = createContext<{
    images: File[];
    setImages: React.Dispatch<React.SetStateAction<File[]>>;
}>({
    images: [],
    setImages : () => {}
});

export const ImagesProvider = ({ children } : { children: ReactNode }) => {
    const [images, setImages] = useState<File[]>([]);

    return (
        <ImagesContext.Provider value={{ images, setImages }}>
            {children}
        </ImagesContext.Provider>
    );
}