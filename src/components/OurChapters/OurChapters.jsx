import { Link } from 'react-router-dom';
import style from './OurChapters.module.css'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import comsoc from './../../assets/images/comsoc.png'
import pes from './../../assets/images/pes.png'
import ras from './../../assets/images/ras.png'
import wie from './../../assets/images/wie.png'

function OurChapters() {




    useEffect(() => {
       
        AOS.init({
            duration: 1500, 
            once:true,
        });
    }, []);









    return (<>

        <div className={` h-fit relative  w-full bg-custom-dark2-blue overflow-x-hidden`}>
            <div className="relative w-fit mx-auto">
                <p className={`underLineTitle relative uppercase font-black text-4xl md:text-5xl font-uni-sans-heavy text-center pt-12 text-custom-light-blue`}>
                    our chapters
                </p>
            </div>






            <div className={`w-[95%] lg:w-[90%] mx-auto   flex-wrap flex mt-16 ${style.chapters}`}>




                <div className={`p-4 md:w-[50%]   `}>
                    <div data-aos="slide-right" className={`${style.chapter}  lg:h-[390px] items-center  mx-auto lg:flex-row  bg-custom-dark-blue flex flex-col-reverse rounded-ss-3xl rounded-se-3xl rounded-es-3xl rounded-ee-3xl lg:rounded-ee-none`}>

                        <div className={`w-full lg:p-4`}>
                            <p className={`hidden lg:block uppercase font-bold text-2xl lg:text-5xl f ont-uni-sans-heavy ps-4  text-custom-light-blue`}>
                                comsoc
                            </p>
                            <p className={`font-bold mt-0  p-4 text-center lg:text-left text-gray-400`}>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
                            </p>

                            <p className={`${style.infoBtn} bg-custom-dark2-blue uppercase font-bold text-xl cursor-pointer rounded-2xl w-[80%]  my-6 mx-auto lg:ms-4 text-center text-custom-light-blue  py-3  border-custom-light-blue`}>
                                <Link to='/'>Learn more</Link>
                            </p>
                        </div>
                        <div className={`${style.chapterLogo} mt-3 mx-auto `}>
                            <img className={` ${style.comsooc} md:-w-[300px] md:h-[300px] w-[350px] h-[350px] `} src={comsoc} alt="" />
                        </div>

                    </div>
                </div>



                <div className={`p-4 md:w-[50%]     `}>
                    <div  data-aos="slide-left" className={`${style.chapter} lg:h-[390px]  items-center  mx-auto lg:flex-row  bg-custom-dark-blue flex flex-col-reverse rounded-ss-3xl rounded-se-3xl rounded-es-3xl rounded-ee-3xl lg:rounded-es-none`}>

                        <div className={`w-full  lg:p-4`}>
                            <p className={`hidden lg:block   uppercase font-bold text-2xl lg:text-5xl  font-uni-sans-heavy ps-4  text-custom-light-blue`}>
                                pes
                            </p>
                            <p className={`font-bold mt-0 p-4 text-center lg:text-left text-gray-400`}>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
                            </p>

                            <p className={`${style.infoBtn} bg-custom-dark2-blue uppercase font-bold text-xl  cursor-pointer rounded-2xl w-[80%]  my-6 mx-auto lg:ms-4 text-center text-custom-light-blue  py-3  border-custom-light-blue`}>
                                <Link to='/'>Learn more</Link>
                            </p>
                        </div>
                        <div className={`${style.chapterLogo} mt-3 mx-auto`}>
                            <img className=' px-20 md:px-5 m-auto md:-w-[300px] md:h-[300px] w-[350px] h-[350px]  md:py-10' src={pes} alt="" />
                        </div>

                    </div>
                </div>

                <div className={`p-4 md:w-[50%] `}>
                    <div data-aos="slide-right" className={`${style.chapter} lg:h-[390px] items-center  mx-auto lg:flex-row  bg-custom-dark-blue flex flex-col-reverse rounded-ss-3xl rounded-se-3xl rounded-es-3xl rounded-ee-3xl lg:rounded-se-none`}>

                        <div className={`w-full lg:p-4`}>
                            <p className={`hidden lg:block uppercase font-bold text-2xl lg:text-5xl  font-uni-sans-heavy ps-4  text-custom-light-blue`}>
                                ras
                            </p>
                            <p className={`font-bold mt-0 p-4 text-center lg:text-left text-gray-400`}>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
                            </p>

                            <p className={`${style.infoBtn} bg-custom-dark2-blue uppercase font-bold text-xl  cursor-pointer rounded-2xl w-[80%]  my-6 mx-auto lg:ms-4 text-center text-custom-light-blue  py-3  border-custom-light-blue`}>
                                <Link to='/'>Learn more</Link>
                            </p>
                        </div>
                        <div className={`${style.chapterLogo} mt-3 mx-auto `}>
                            <img className='px-20 md:px-5 m-auto md:-w-[300px] md:h-[300px] w-[350px] h-[350px]  md:py-10' src={ras} alt="" />
                        </div>

                    </div>
                </div>

                <div className={`p-4 md:w-[50%]`}>
                    <div data-aos="slide-left" className={`${style.chapter} lg:h-[390px] items-center  mx-auto lg:flex-row  bg-custom-dark-blue flex flex-col-reverse rounded-ss-3xl rounded-se-3xl rounded-es-3xl rounded-ee-3xl lg:rounded-ss-none`}>

                        <div className={`w-full lg:p-4`}>
                            <p className={`hidden lg:block   uppercase font-bold text-2xl lg:text-5xl font-uni-sans-heavy ps-4  text-custom-light-blue`}>
                                wie
                            </p>
                            <p className={`font-bold mt-0 p-4 text-center lg:text-left text-gray-400`}>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
                            </p>

                            <p className={`${style.infoBtn} bg-custom-dark2-blue uppercase font-bold text-xl  cursor-pointer rounded-2xl w-[80%]  my-6 mx-auto lg:ms-4 text-center text-custom-light-blue  py-3  border-custom-light-blue`}>
                                <Link to='/'>Learn more</Link>
                            </p>
                        </div>
                        <div className={`${style.chapterLogo} mt-3 mx-auto `}>
                            <img className=' px-20 md:px-2 m-auto md:-w-[300px] md:h-[300px] w-[350px] h-[350px]  md:py-10' src={wie} alt="" />
                        </div>

                    </div>
                </div>

















            </div>
        </div>

    </>);
}

export default OurChapters;
