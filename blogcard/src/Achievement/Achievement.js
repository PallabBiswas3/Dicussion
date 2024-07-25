import React, { useState } from 'react';
import './Achievement.css';
const achievements = [
    {
        title: "Achievement 1",
        description: ["Gerontechnology aims to enhance health and healthcare services for the elderly,  ", "and smart home technologies that monitor and assist with daily activities."]
    },
    {
        title: "Achievement 2",
        description: ["Gerontechnology aims to enhance health and healthcare services for the elderly,  ", "and smart home technologies that monitor and assist with daily activities."]
    },
    {
        title: "Achievement 3",
        description: ["Gerontechnology aims to enhance health and healthcare services for the elderly,  ", "and smart home technologies that monitor and assist with daily activities."]
    },
    {
        title: "Achievement 4",
        description: ["Gerontechnology aims to enhance health and healthcare services for the elderly,  ", "and smart home technologies that monitor and assist with daily activities."]
    },
    {
        title: "Achievement 5",
        description: ["Gerontechnology aims to enhance health and healthcare services for the elderly,  ", "and smart home technologies that monitor and assist with daily activities."]
    },
    {
        title: "Achievement 6",
        description: ["Gerontechnology aims to enhance health and healthcare services for the elderly,  ", "and smart home technologies that monitor and assist with daily activities."]
    }
    // Add more achievements as needed
];

const Achievement = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const goToNext = () => {
        if (currentIndex < achievements.length - 1) {
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
                    <div className="card">
                        <div className="star material-icons">star</div>
                        <h2>{achievements[currentIndex].title}</h2>
                        <div className="star material-icons">star</div>
                        <div className="zebra"></div>
                        <ul>
                            {achievements[currentIndex].description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <i
                    className={`material-icons arrow forward ${currentIndex === achievements.length - 1 ? 'dimmed' : ''}`}
                    onClick={goToNext}
                >
                    arrow_forward_ios
                </i>
            </div>
        </div>
    );
};

export default Achievement;
