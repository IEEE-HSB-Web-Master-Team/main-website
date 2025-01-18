import React, { useState } from "react";
import Slider from "../Slider/Slider";
import { Link } from "react-router-dom";
import bg from "../../assets/images/backLayer.png";

export default function Events() {
    const [link, setLink] = useState("");
    return (
        <div
            className="h-screen flex flex-col items-center "
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "contain",
                backgroundColor: "rgba(255, 255, 255, 0.96)", // White overlay
                backgroundBlendMode: "overlay",
            }}
        >
            <div className="h-[90vh] flex items-end ">
                <Slider setLink={setLink} />
            </div>
            {link && (
                <Link
                    to={link}
                    className="rounded-2xl border-custom-dark-blue border-2 py-3 px-10 uppercase font-uni-sans-heavy text-custom-dark-blue "
                >
                    registration now
                </Link>
            )}
        </div>
    );
}
