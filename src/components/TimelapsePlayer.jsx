import React/*, { useState, useEffect }*/ from 'react';

const TimelapsePlayer = ({ images }) => {
    return (
        <div>
            <p>
                Timelapse images added {images.length}
            </p>
            <canvas />
        </div>
    );
};

export default TimelapsePlayer;
