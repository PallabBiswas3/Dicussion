import React, { useState, useEffect } from 'react';
import './Achievement.css';

const Achievement = () => {
    const [achievements, setAchievements] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => setAchievements(data));
    }, []);

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

    if (achievements.length === 0) {
        return <div>Loading...</div>;
    }

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
