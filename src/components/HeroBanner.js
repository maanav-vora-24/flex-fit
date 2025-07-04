import React from 'react';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <div className="relative px-5 mt-[70px] sm:ml-[50px] lg:mt-[212px]">
    <h2 className="text-[#1E90FF] font-semibold text-[26px]">Fitness Club</h2>

    <h1 className="font-bold text-[40px] lg:text-[44px] mt-[30px] mb-[23px] leading-tight">
      Sweat, Smile <br />
      And Repeat
    </h1>

    <p className="text-[22px] font-serif leading-[35px]">
      Check out the most effective exercises personalized to you
    </p>

    <div className="mt-[45px]">
      <a
        href="#exercises"
        className="block w-[200px] text-center bg-[#1E90FF] text-white py-[14px] text-[22px] rounded"
      >
        Explore Exercises
      </a>
    </div>

    <h1 className="hidden lg:block font-semibold text-[#1E90FF] opacity-10 text-[200px]">
      Exercise
    </h1>

    <img
      src={HeroBannerImage}
      alt="hero-banner"
      className="hidden sm:block absolute top-[-330px] right-10 w-[700px] h-[900px]"
    />
  </div>
);

export default HeroBanner;
