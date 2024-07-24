import React, { useState } from 'react';
import './Achievement.css';

const images = [
    "https://preview.ibb.co/b43uR8/img01.jpg",
    "https://preview.ibb.co/ioNAzT/img02.jpg",
    "https://preview.ibb.co/c9xtKT/img03.jpg",
    "https://preview.ibb.co/bsYYKT/img04.jpg",
    "https://preview.ibb.co/bGUjR8/img05.jpg",
    "https://preview.ibb.co/dxYYKT/img06.jpg",
    "https://preview.ibb.co/ffBym8/img07.jpg",
    "https://preview.ibb.co/dXHtKT/img08.jpg",
    "https://preview.ibb.co/hBiNDo/img09.jpg",
    "https://preview.ibb.co/gHUvYo/img10.jpg",
    "https://preview.ibb.co/moKvYo/img11.jpg",
    "https://preview.ibb.co/diyYKT/img12.jpg"
];

const Achievement = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const goToNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="masterBox">
            <div className="containerBox">
                <i
                    className={`material-icons arrow back ${currentIndex === 0 ? 'dimmed' : ''}`}
                    onClick={goToPrevious}
                >
                    arrow_back_ios
                </i>
                <div className="content">
                    <img src={images[currentIndex]} alt={`IMG ${currentIndex + 1}`} />
                    <p>{`IMG ${currentIndex + 1}`}</p>
                </div>
                <i
                    className={`material-icons arrow forward ${currentIndex === images.length - 1 ? 'dimmed' : ''}`}
                    onClick={goToNext}
                >
                    arrow_forward_ios
                </i>
            </div>
        </div>
    );
};

export default Achievement;
