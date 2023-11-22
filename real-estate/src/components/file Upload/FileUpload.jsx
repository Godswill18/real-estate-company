// FileUploader.js

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './fileUpload.css';

const FileUpload = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Handle the dropped files here, e.g., send them to a server
    console.log('Dropped files:', acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <p>
          Drop files here or click to upload.
          <br />
         
        </p>
      )}
    </div>
  );
};

export default FileUpload;
