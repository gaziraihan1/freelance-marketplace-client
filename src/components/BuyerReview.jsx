import React, { useEffect, useState } from 'react';

const BuyerReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);
    console.log(reviews)
    return (
        <div className='my-8 md:my-12 lg:my-18 '>
            <h1 className='sm:col-span-2 md:col-span-3 xl:col-span-4 my-3 md:my-6 xl:my-12 text-xl md:text-2xl xl:text-4xl font-semibold text-gray-700 '>
                Reviews
            </h1>
            <div className='bg-slate-100 flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-6 py-4 md:py-8'>
                {
                    reviews.map((review, i) => <div key={i} className='p-2 border border-gray-500 rounded w-70 h-75'>
            <div className='flex flex-col gap-3 py-3 px-1 border-b border-gray-500'>
                <div className='flex items-center gap-3'>
                    <img className='w-12 h-12 rounded-full object-cover border-2 border-gray-400' src={review.reviewerProfilePic} alt="" />
                    <h3 className='text-base lg:text-lg font-medium text-gray-300'>
                        {review.revieweeName}
                    </h3>
                </div>
                <span className='text-lg lg:text-xl font-semibold text-gray-200'>
                    Rating: {}
                </span>
            </div>
            <h2 className='mt-3 text-base md:text-lg text-blue-300 border-l-2 ml-2 mr-4 px-2 border-gray-500'>
                <span className='text-gray-100 text-lg md:text-xl font-bold'>"</span> {} <span className='text-gray-100 text-lg md:text-xl font-bold'>"</span>
            </h2>
            <p className='my-3 text-sm text-gray-400 font-medium px-2'>
                {}
            </p>
        </div>)
                }
            </div>
        </div>
    );
};

export default BuyerReview;