import React from 'react'
import heroimage from '../../assets/images/hero section.png'

export default function AboutHero() {
  return <>
    <div className="bg-hero-pattern  bg-local overflow-hidden">
        <div class="relative w-[120%] lg:w-[105%] h-[40vh] lg:h-[504px] -translate-x-[9%] lg:-translate-x-[2.5%] bg-cover bg-center rounded-br-[50%] rounded-bl-[50%] overflow-hidden flex justify-center items-center">
          <div class="absolute inset-0 bg-gradient-to-t from-[#146C9A40] via-[#146b9a1a] to-transparent z-10"></div>
          <img src={heroimage} className="w-full block lg:pb-[150px]" alt="" />
        </div>

        <div className='lg:my-10 lg:h-[40vh] md:my-5 text-center flex flex-col justify-center font-uni-sans-heavy container m-auto p-5' >
          <div>
            <h1 className='text-[20px] md:text-base lg:text-[20px] leading-[30px] tracking-wide text-[#1e1e1e] '>IEEE Student Community Helwan University</h1>
            <h2 className='text-[32px] md:text-[30px] lg:text-[40px] lg:leading-[60px] leading-10 text-[#1e1e1eX] my-5 lg:my-0'>Empowering Innovation, Inspiring Growth <span className="text-[#207da9]">-IEEE Helwan</span> </h2>
            <p className='text-[14px] leading-[24px] text-[#aeaeae] '>IEEE, Institute of Electrical and Electronics Engineers, is the biggest professional association that is dedicated to advancing technological innovation and excellence. It was formed in 1963 with roots that go back to 1884.
            IEEE Helwan Student Branch, is the 3rd student Branch in Egypt Section. Known for its annual Academic Program.</p>
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center md:space-x-6 md:space-y-0 space-y-3 md:mt-10 mt-5 ' >
              <button className='w-[85vw] md:w-[300px] lg:w-[316px] box-border border-4 border-[#207da9] hover:border-transparent border-solid h-[72px] rounded-lg text-[24px] tracking-wide font-uni-sans-heavy text-white bg-[#207da9] hover:text-white hover:bg-[#115579] hover:shadow-lg transform transition-all wow animate__fadeInUp ' >join us</button>
              <button className='w-[85vw] md:w-[300px] lg:w-[316px] box-border border-4 border-[#207da9] hover:border-transparent border-solid h-[72px] rounded-lg text-[24px] tracking-wide font-uni-sans-heavy text-[#207da9] bg-white hover:text-white hover:bg-[#115579] hover:shadow-lg transform transition-all wow animate__fadeInUp ' data-wow-delay=".1s" >contact us</button>
          </div>
        </div>
    </div>
  </>
}
