import React, { useRef, useEffect } from 'react';

const TimelapsePlayer = ({ images }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');

        const img = new Image();
        img.onload = () => { 
            const MAX_WIDTH = 720;
            const MAX_HEIGHT = 480;
            let width = img.width;
            let height = img.height;
            
            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            ctx.drawImage(img, 0,0, width, height); 
        }; // 4000 × 3000

        const reader = new FileReader();
        reader.onload = (e) => { img.src = e.target.result; };
        reader.readAsDataURL(images[0]);

        return () => {
            //delete img;
        };
    });

    return (
        <div>
            <p>
                Timelapse images added {images.length}
            </p>
            <canvas ref={canvasRef} width="720" height="480"/>
        </div>
    );
};

export default TimelapsePlayer;
