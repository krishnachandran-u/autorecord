"use client"
import React, { useCallback, useContext } from 'react';
import { useDropzone, DropzoneOptions } from 'react-dropzone';

import { ImagesContext } from '@/contexts/imagesContext';
import { ProjectContext } from '@/contexts/projectContext';

type MyDropzoneProps = {
  cycleId: number;
  expId: number;
  probId: number;
}

function MyDropzone({ props } : { props: MyDropzoneProps }) {
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
  );
}

export default MyDropzone;