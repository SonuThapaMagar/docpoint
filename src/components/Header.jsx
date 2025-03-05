import React from 'react';
import groupProfile from '../assets/assets_frontend/group_profiles.png';
import arrowIcon from '../assets/assets_frontend/arrow_icon.svg';
import headerImg from '../assets/assets_frontend/header_img.png';

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row bg-[#5F6FFF] rounded-lg px-4 sm:px-6 md:px-10 lg:px-20 items-center min-h-[600px] max-w-7xl mx-auto'>
            {/** Left Side */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 md:py-16'>
                <p className='text-3xl sm:text-4xl md:text-5xl text-white font-semibold leading-tight'>
                    Book Appointment <br /> With Trusted Doctors
                </p>
                <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
                    <img src={groupProfile} alt="Group Profile" className="w-20 sm:w-28" />
                    <p className="text-white text-sm sm:text-base text-center md:text-left">
                        Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />
                        schedule your appointment hassle-free.
                    </p>
                </div>
                <a href="#speciality" className="flex items-center gap-2 text-gray-600 font-medium bg-gray-100 px-6 sm:px-8 py-3 rounded-full text-sm hover:scale-105 transition-all duration-300">
                    Book Appointment
                    <img src={arrowIcon} alt="Arrow Icon" className="w-3" />
                </a>
            </div>

            {/** Right Side */}
            <div className='md:w-1/2 flex justify-center'>
                <img src={headerImg} alt="Header Image" className='w-full max-w-[400px] md:max-w-[450px] h-auto rounded-lg object-cover' />
            </div>
        </div>
    );
}

export default Header;
