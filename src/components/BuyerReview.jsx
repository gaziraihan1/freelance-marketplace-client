import React, { useEffect, useState } from 'react';
import {FaQuoteRight} from 'react-icons/fa'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
const BuyerReview = () => {
    const [reviews, setReviews] = useState([]);
    const [index, setIndex] = useState(0);

    const nextButton = () => {
        setIndex(prev => prev === reviews.length - 1? 0 : prev + 1);
    }

    const prevButton = () => {
        setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    }
    useEffect(() => {
        fetch('/reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);
    return (
        <div className='my-8 md:my-12 lg:my-18 '>
            <h1 className='sm:col-span-2 md:col-span-3 xl:col-span-4 my-3 md:my-6 xl:my-12 text-xl text-center md:text-2xl xl:text-4xl font-semibold text-gray-700 '>
                Reviews
            </h1>
            <div className='bg-slate-100 flex flex-col items-center flex-wrap justify-center gap-2 md:gap-4 lg:gap-6 py-4 md:py-8'>
                {
                    reviews.map((review, i) => <div key={i} className={`p-2 md:p-6 lg:py-10  border border-gray-200 shadow shadow-[0 5px 15px rgba(0, 0, 0, 0.1)] rounded mx-auto w-[98%] md:max-w-lg ${i === index ? 'bg-gray-100': 'hidden'}`}>
            <div className={`flex flex-col gap-3 py-3 px-1 justify-center items-center`}>
                <div className='relative'>
                    <img className='w-30 h-30 md:w-38 md:h-38 rounded-full object-cover border-2 border-gray-200' src={review.reviewerProfilePic} alt="" />
                    <span className='absolute top-2 p-2 md:p-4 bg-blue-500 rounded-full text-white -left-1'>

                    <FaQuoteRight size={16}/>
                    </span>
                </div>
                    <h3 className='text-base lg:text-lg font-mono font-semibold text-gray-800'>
                        {review.reviewerName}
                    </h3>
                    <h4 className='uppercase text-center text-blue-400'>
                        {review.reviewerType}
                    </h4>
                
            <p className='my-2 text-sm text-gray-400 px-2'>
                {review.comment}
            </p>
            </div>
                <div className='flex justify-center items-center gap-4'>
                <button className='p-2 bg-green-500 text-white rounded-full cursor-pointer' onClick={prevButton}><MdArrowBackIosNew /></button>
                <button className='p-2 bg-green-500 text-white rounded-full cursor-pointer' onClick={nextButton}><MdArrowForwardIos /></button>
                </div>
        </div>)
                }
            </div>
        </div>
    );
};

export default BuyerReview;