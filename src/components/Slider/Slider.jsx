import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Slide from "./components/slide/Slide";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Slider = ({ setLink }) => {
    const getEvents = () => {
        return axios.get("/data.json");
    };
    const { isLoading, data, isError, error } = useQuery({
        queryKey: ["events"],
        queryFn: getEvents,
    });
    const [currentEvent, setCurrentEvent] = useState({
        name: "",
        date: "",
        link: "",
        image: "",
    });
    const [currentIndex, setCurrentIndex] = useState(0);
    if (isLoading) return <>Loading...</>;
    return (
        <div
            className="w-[90vw] relative rounded-3xl mx-auto my-6"
            style={{
                background:
                    "radial-gradient(89.74% 90.65% at 50% 50%, #207DA9 0%, #0D384F 100%)",
            }}
        >
            <div className="text-white absolute top-5 left-5">
                <h3 className="text-3xl tracking-wide  font-bold font-uni-sans-heavy capitalize">
                    {currentEvent?.name}
                </h3>
                <h4 className="text-2xl font-bold font-uni-sans-heavy capitalize">
                    {currentEvent?.date}
                </h4>
            </div>
            <Swiper
                loop={true}
                spaceBetween={-50}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                navigation={true}
                pagination={{ clickable: true }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 20,
                    depth: 300,
                    modifier: 2.5,
                    slideShadows: false,
                }}
                breakpoints={{
                    1000: {
                        slidesPerView: 3,
                    },
                    640: {
                        slidesPerView: 2, // Medium and larger screens
                    },
                    0: {
                        slidesPerView: 1, // Small screens
                    },
                }}
                initialSlide={0}
                modules={[EffectCoverflow, Pagination, Navigation]}
                onSlideChange={(swiper) => {
                    setCurrentEvent(data.data[swiper.realIndex]);
                    setCurrentIndex(swiper.realIndex);
                    setLink(data.data[swiper.realIndex]?.link);
                    console.log(data.data[swiper.realIndex]?.link);
                }}
                // onSwiper={(swiper) => console.log(swiper)}
                className="h-[70vh] w-[90%]  flex items-center justify-center custom-swiper"
            >
                <div className="">
                    {data?.data?.map((event, i) => (
                        <SwiperSlide
                            key={i}
                            className="flex items-center justify-center"
                        >
                            <Slide
                                name={event.name}
                                image={event.image}
                                currentIndex={currentIndex}
                                slideIndex={i}
                                key={i}
                                length={data.length}
                            />
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
            {isError && console.log(error)}
        </div>
    );
};
export default Slider;
