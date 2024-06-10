"use client"
import React, { useCallback, useContext } from 'react';
import { useDropzone, DropzoneOptions } from 'react-dropzone';
import { IoIosClose } from "react-icons/io";

import { ImagesContext } from '@/contexts/imagesContext';
import { ProjectContext } from '@/contexts/projectContext';

type MyDropzoneProps = {
  cycleId: number;
  expId: number;
  probId: number;
}

function MyDropzone({ props } : { props: MyDropzoneProps }) {
  const { cycleId, expId, probId } = props;

  const { images, setImages } = useContext(ImagesContext);
  const { record, setRecord } = useContext(ProjectContext);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImages([...images, ...acceptedFiles]);
    setRecord((prevRecord) => {
      if(props.probId == -1) {
        const updatedOutput = [...prevRecord.cycles[props.cycleId].experiments[props.expId].src.output];
        updatedOutput.push(...acceptedFiles.map((file) => file.name));
        return {
          ...prevRecord,
          cycles: prevRecord.cycles.map((cycle, cycleIndex) => {
            if(cycleIndex === props.cycleId) {
              return {
                ...cycle,
                experiments: cycle.experiments.map((exp, expIndex) => {
                  if(expIndex === props.expId) {
                    return {
                      ...exp,
                      src: {
                        ...exp.src,
                        output: updatedOutput
                      }
                    }
                  }
                  return exp;
                })
              }
            }
            return cycle;
          })
        }
      }
      else {
        const updatedOutput = [...prevRecord.cycles[props.cycleId].experiments[props.expId].problems[props.probId].src.output];
        updatedOutput.push(...acceptedFiles.map((file) => file.name));
        return {
          ...prevRecord,
          cycles: prevRecord.cycles.map((cycle, cycleIndex) => {
            if(cycleIndex === props.cycleId) {
              return {
                ...cycle,
                experiments: cycle.experiments.map((exp, expIndex) => {
                  if(expIndex === props.expId) {
                    return {
                      ...exp,
                      problems: exp.problems.map((prob, probIndex) => {
                        if(probIndex === props.probId) {
                          return {
                            ...prob,
                            src: {
                              ...prob.src,
                              output: updatedOutput
                            }
                          }
                        }
                        return prob;
                      })
                    }
                  }
                  return exp;
                })
              }
            }
            return cycle;
          })
        }
      }
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    onDragEnter: () => {},
    onDragOver: () => {},
    onDragLeave: () => {},
  });

  return (
    <div className="flex flex-col gap-[2px]">
      <div
        {...getRootProps()}
        className='border-2 border-gray-300 border-dashed p-4 rounded-lg w-full flex justify-center items-center cursor-pointer h-[64px]]'
      >
        <input {...getInputProps() as React.InputHTMLAttributes<HTMLInputElement>} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag n drop some files here, or click to select files</p>
        )}
      </div>
      <div className="flex flex-row gap-[2px]">
        {(probId !== -1
          ? record.cycles[cycleId].experiments[expId].problems[probId].src.output
          : record.cycles[cycleId].experiments[expId].src.output
        ).map((imageName, index) => {
          const image = images.find((img) => img.name === imageName);
          const backgroundImage = image ? `url(${URL.createObjectURL(image)})` : '';
          if (image) {
            return (
              <div
                key={index}
                className="w-[64px] h-[64px] bg-center bg-cover bg-no-repeat flex flex-row justify-end items-start rounded-lg border-2 border-slate-300"
                style={{ backgroundImage: backgroundImage }}
              >
                <IoIosClose
                  color="red"
                  className="min-w-[18px] min-h-[18px] hover:cursor-pointer transition-all duration-300 hover:scale-110"
                />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default MyDropzone;