import style from './ChairPersonsSlider.module.css';
import Slider from 'react-slick';
import image1 from './../../assets/images/chairpersin.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

import AOS from 'aos';
import 'aos/dist/aos.css';



function ChairPersonsSlider() {



    useEffect(() => {
       
        AOS.init({
            duration: 1500, 
            once: true,
        });
    }, []);










    const [cardsData, setCardsData] = useState([]);

    async function getCardsData() {
        const { data } = await axios.get('http://localhost:3000/chairpersons');
        console.log(data);
        setCardsData(data);
    }

    useEffect(() => {
        getCardsData();
    }, []);

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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

    const [flippedIndices, setFlippedIndices] = useState(new Set());

    const toggleFlip = (index) => {
       

       const newFlippedIndices = new Set(flippedIndices);
       newFlippedIndices.has(index)?newFlippedIndices.delete(index):newFlippedIndices.add(index);
       setFlippedIndices(newFlippedIndices);

        // setFlippedIndices(flippedIndices===index?null:index)
    };



    return (
        <div className={`${style.chairpersons} h-fit relative overflow-hidden w-full bg-custom-light-blue`}>
            <div className="relative w-fit mx-auto">
                <p className={`underLineTitle relative font-black text-2xl md:text-5xl font-uni-sans-heavy text-center pt-12 text-custom-dark-blue`}>
                    MEET OUR CHAIRPERSONS
                </p>
            </div>

            <div className="slider-container my-16 px-2">
                <Slider {...settings}>
                    {cardsData.map((card, index) => (
                        <div key={index} className={`${style.cardContainer} cursor-pointer p-4  4px mx-auto`} data-aos='flip-up' data-aos-delay={index * 100} onClick={() => { toggleFlip(index); }}>
                            <div className={`${style.card} ${flippedIndices.has(index)? style.flipped : ''}`}>
                                <div className={`${style.cardFront} rounded-3xl`}>
                                    <div className={`${style.imageContainer}`}>
                                        <img className={`w-full`} src={image1} alt="Chairperson" />
                                        <div className={`${style.imageContainerData} uppercase w-[90%] py-3 mx-auto font-uni-sans-heavy bg-white rounded text-center relative bottom-16`}>
                                            <p className={`font-black text-[16px] leading-[19.2px]`}>{card.name}</p>
                                            <p className={`font-black mt-2 text-[12px] leading-[14.4px]`}>{card.title}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${style.cardBack} text-[40px] px-7 font-uni-sans-heavy text-center text-custom-light-blue bg-custom-dark-blue rounded-3xl`}>
                                    <p className={` leading-[48px] uppercase`}>{card.story}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ChairPersonsSlider;
