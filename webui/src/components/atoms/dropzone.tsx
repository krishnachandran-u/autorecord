"use client"
import React, { useCallback } from 'react';
import { useDropzone, DropzoneOptions } from 'react-dropzone';

function MyDropzone() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
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