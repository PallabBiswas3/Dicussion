import React, { useState } from 'react';
import './Achievement.css';

const achievements = [
    {
        title: "Achievement 1",
        description: ["Gerontech aims to enhance health and healthcare services for the elderly,", "and smart home technologies that monitor and assist with daily activities."],
        image: "/images_discussion/disk1.jpeg" // Add the image path
    },
    {
        title: "Achievement 2",
        description: ["Gerontech aims to enhance health and healthcare services for the elderly,", "and smart home technologies that monitor and assist with daily activities."],
        image: "/images_discussion/disk2.jpeg"
    },
    {
        title: "Achievement 3",
        description: ["Gerontech aims to enhance health and healthcare services for the elderly,", "and smart home technologies that monitor and assist with daily activities."],
        image: "/images_discussion/disk1.jpeg"
    },
    {
        title: "Achievement 4",
        description: ["Gerontech aims to enhance health and healthcare services for the elderly,", "and smart home technologies that monitor and assist with daily activities."],
        image: "/images_discussion/disk2.jpeg"
    },
    {
        title: "Achievement 5",
        description: ["Gerontech aims to enhance health and healthcare services for the elderly,", "and smart home technologies that monitor and assist with daily activities."],
        image: "/images_discussion/disk1.jpeg"
    },
    {
        title: "Achievement 6",
        description: ["Gerontech aims to enhance health and healthcare services for the elderly,", "and smart home technologies that monitor and assist with daily activities."],
        image: "/images_discussion/disk2.jpeg"
    }
];

const Achievement = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const goToPrevious = () => {
        if (currentIndex > 0 && !isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex(currentIndex - 1);
                setIsAnimating(false);
            }, 500); // Duration of the animation
        }
    };

    const goToNext = () => {
        if (currentIndex < achievements.length - 1 && !isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex(currentIndex + 1);
                setIsAnimating(false);
            }, 500); // Duration of the animation
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
                <div className={`content ${isAnimating ? 'animating' : ''}`}>
                    <div className="card">
                        <div className="textContainer">
                            <div className="star material-icons">star</div>
                            <h2>{achievements[currentIndex].title}</h2>
                            <div className="star material-icons">star</div>
                            <div className="zebra"></div>
                            <div className="descriptionWithImage">
                                <div className="imageContainer">
                                    <img src={achievements[currentIndex].image} alt={achievements[currentIndex].title} />
                                </div>
                                <ul>
                                    {achievements[currentIndex].description.map((desc, index) => (
                                        <li key={index}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
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
