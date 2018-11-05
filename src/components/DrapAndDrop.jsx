import React/*, { useState, useEffect }*/ from 'react';

const DragAndDrop = ({ onDropFiles }) => {
    const handleDropFiles = (e) => {
        e.preventDefault();
        console.log(e.dataTransfer.files);
        onDropFiles(e.dataTransfer.files);
    };

    return (
        <div className="dragAndDrop" onDragOver={(e) => e.preventDefault()} onDrop={handleDropFiles}>
            Drag and drop your images files here.
        </div>
    );
};

export default DragAndDrop;