import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import axios from "axios";
import "./EventsTimeline.module.css";
import image from "./../../assets/images/event1.jpg";
import bg from "./../../assets/images/bgpng.png";
import styles from "./EventsTimeline.module.css";

export default function EventsTimeline() {
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(currentYear);

    const { data, isLoading, error } = useQuery({
        queryKey: ["events"],
        queryFn: async () => {
            const response = await axios.get("http://localhost:3000/events");
            return response.data;
        },
    });

    if (isLoading) return <div>Loading...</div>; // Display a loader
    if (error) return <div>Error fetching events: {error.message}</div>;

    const allEvents = Object.values(data).flat();
    const years = Object.keys(data);

    if (!years.includes(selectedYear.toString())) {
        setSelectedYear(years[0] || currentYear);
    }

    const filteredEvents = allEvents.filter(
        (event) => event.date.split("-")[0] === selectedYear.toString()
    );

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="overflow-x-hidden">
            
            <div className="slider-container w-full text-xl text-customGray2 text-center bg-custom-dark-blue">
                <Slider {...settings}>
                    {years.map((year) => (
                        <div
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={
                                selectedYear.toString() === year
                                    ? styles["selected-year"]
                                    : ""
                            }
                        >
                            <h3 className="font-sans font-black my-1">
                                {year}
                            </h3>
                        </div>
                    ))}
                </Slider>
            </div>

            <div
                className="relative overflow-auto text-custom-dark-blue bg-opacity-75 bg-custom-dark-blue"
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.87), rgba(255, 255, 255, 0.87)), url(${bg})`,
                }}
            >
                <div className="h-cards overflow-y-auto w-3/4 my-20 m-auto">
                    <div className="space-y-6">
                        {filteredEvents.length > 0 ? (
                            filteredEvents.map((event) => (
                                <div
                                    key={event.id}
                                    className="bg-white rounded-lg shadow-md overflow-hidden"
                                >
                                    <div className="flex flex-col-reverse lg:flex-row lg:my-10 ">
                                        <div className="flex-1 p-6">
                                            <div className="flex justify-between sm:items-center text-xl gap-3 mb-4 font-bold font-ubuntu">
                                                <div className="flex items-center text-custom-dark-blue">
                                                    <svg
                                                        className="w-5 h-5 mr-2 shrink-0"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                        />
                                                    </svg>
                                                    <span className="text-xl">
                                                        {event.location}
                                                    </span>
                                                </div>
                                                <div className="flex">
                                                    <span className="bg-primary text-custom-dark-blue px-3">
                                                        {
                                                            event.date.split(
                                                                "-"
                                                            )[0]
                                                        }
                                                    </span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="lucide lucide-calendar-days"
                                                    >
                                                        <path d="M8 2v4" />
                                                        <path d="M16 2v4" />
                                                        <rect
                                                            width="18"
                                                            height="18"
                                                            x="3"
                                                            y="4"
                                                            rx="2"
                                                        />
                                                        <path d="M3 10h18" />
                                                        <path d="M8 14h.01" />
                                                        <path d="M12 14h.01" />
                                                        <path d="M16 14h.01" />
                                                        <path d="M8 18h.01" />
                                                        <path d="M12 18h.01" />
                                                        <path d="M16 18h.01" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-black font-sans mb-3 uppercase">
                                                {event.name}
                                            </h3>
                                            <p className="text-customGray mb-6 text-base font-ubuntu font-bold">
                                                {event.details}
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-4 self-end font-sans">
                                                <button className="px-6 py-2 leading-7 font-black border-custom-dark-blue text-custom-dark-blue rounded-md flex-1 hover:bg-custom-dark-blue border-2 hover:text-white transition-colors text-lg">
                                                    GALLERY
                                                </button>
                                                <button className="px-6 py-2 font-black leading-7 text-lg bg-custom-dark-blue text-white rounded-md hover:bg-primary-dark flex-1 transition-colors">
                                                    MORE DETAILS
                                                </button>
                                            </div>
                                        </div>
                                        <div className="lg:w-[40%] h-48 sm:h-64 lg:h-auto lg:me-10">
                                            <img
                                                src={image}
                                                alt={event.name}
                                                className="w-full h-full object-cover rounded"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            ""//spinner
)}
                    </div>
                </div>
            </div>
        </div>
    );
}
