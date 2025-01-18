import React from "react";
import mainEvent from "../../../../assets/images/mainEvent.jpeg";
const Slide = ({ name, image, currentIndex, slideIndex, length }) => {
    let distance = Math.abs(currentIndex - slideIndex);
    if (distance > length / 2) {
        // If the distance exceeds half the length, wrap it around
        distance = length - distance;
    }

    // Calculate the opacity based on the distance
    const opacity = Math.max(0, 1 - distance * 0.1);
    const blur = Math.min(1.5, distance * 2);
    return (
        <div className="w-full h-full flex items-center justify-center">
            <img
                src={image ? image : mainEvent}
                alt={name}
                className="rounded-3xl object-contain max-w-full max-h-full "
                style={{
                    opacity,
                    filter: `blur(${blur}px)`,
                }}
            />
        </div>
    );
};

export default Slide;
