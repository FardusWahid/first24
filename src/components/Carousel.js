'use client'

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Link from 'next/link';
import Image from 'next/image';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <Link href="/h24" onDragStart={handleDragStart} passHref key="h24-499">
        <Image src="/eng24.webp" width={1280} height={700} className="w-full  rounded-t-md object-cover" />
        <h1 className='text-center bg-lime-400 text-black rounded-b-md py-2 font-extrabold font-sans tracking-wider text-lg'>Enroll For 499</h1>
    </Link>,
    <Link href="/h26" onDragStart={handleDragStart} passHref key="h26-299">
        <Image src="/cc1.webp" width={1280} height={700} className="w-full  rounded-t-md object-cover" />
        <h1 className='text-center bg-purple-950 rounded-b-md py-2 font-extrabold font-sans tracking-wider text-lg'>Enroll For 299</h1>
    </Link>,
    <Link href="/h24" onDragStart={handleDragStart} passHref key="h24-499-med">
        <Image src="/med.webp" width={1280} height={700} className="w-full   rounded-t-md" />
        <h1 className='text-center bg-orange-500 text-black rounded-b-md py-2 font-extrabold font-sans tracking-wider text-lg'>Enroll For 499</h1>
    </Link>,
    <Link href="/h25" onDragStart={handleDragStart} passHref key="h25-499">
        <Image src="/HSC-25.webp" width={1280} height={700} className="w-full  rounded-t-md" />
        <h1 className='text-center bg-purple-900 rounded-b-md py-2 font-extrabold font-sans tracking-wider text-lg'>Enroll For 499</h1>
    </Link>, 
    <Link href="/make-money" onDragStart={handleDragStart} passHref key="make-money">
        <Image src="/makemoo.webp" width={1280} height={700} className="w-full  rounded-t-md" />
        <h1 className='text-center bg-gray-900-950 rounded-b-md py-2 font-extrabold font-sans tracking-wider text-lg'>Make money with us</h1>
    </Link>,
];


const Carousel = () => {
    return (
        <div className="w-11/12   md:w-full  lg:w-[550px]  gap-2  m-auto mt-0 mx-5  ">
            <AliceCarousel
                mouseTracking
                items={items}
                autoPlay
                autoPlayInterval={3500}
                infinite
                disableDotsControls
                renderPrevButton={({ isDisabled }) => (
                    <button className={` bg-purple-950 rounded-lg shadow-inner shadow-purple-800 font-bold  mt-3 md:mt-6 md:mx-2 mx-1 px-3 py-1 left-0 ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        &lt;
                    </button>
                )}
                renderNextButton={({ isDisabled }) => (
                    <button className={`bg-purple-950 rounded-lg  shadow-inner shadow-purple-800 font-bold px-3 py-1 mt-3 md:mt-6 md:mx-2 mx-1 right-0 ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        &gt;
                    </button>
                )}
            />
        </div>
    );
};

export default Carousel;
