import React from 'react';

const Hire = () => {
    return (
        <div className='my-8 md:my-12 lg:my-18 py-6 md:py-10 lg:py-14 bg-gradient-to-tl from-green-100 via-slate-200 to-green-200 rounded md:min-h-[50vh] flex justify-center items-center px-2 md:px-4 lg:px-6 xl:px-8'>
            <div>
                <div className='flex flex-col md:flex-row items-center gap-2 lg:gap-6'>
                    <div>
                        <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800'>
                            Browse & Chose Your Favorite <span className='text-yellow-600'>Task</span>
                        </h1>
                        <p className='mt-2 md:mt-4 lg:mt-6 2xl:mt-8 md:text-lg lg:text-xl xl:text-2xl text-gray-700'>
                            You can Find Thousand of Task, work and grow your skill.
                        </p>
                        <button className='py-2 px-6 lg:px-14 lg:py-3 border rounded-4xl mt-3 md:mt-5 lg:mt-6 xl:mt-8 bg-green-600 md:text-lg text-gray-100'>
                                Get Task
                        </button>
                    </div>
                    <div className='flex-1'>

                    <img src="/freelance-vector-01.png" alt="" className='h-[200px] md:h-[280px] lg:h-full object-cover'/>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row-reverse items-center mt-6 gap-2 lg:gap-6'>
                    <div className='flex flex-col justify-end items-center'>
                        <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800'>
                            Do Work, Get Paid, Fully <span>Secured</span>
                        </h1>
                        <p className='mt-2 md:mt-4 lg:mt-6 2xl:mt-8 md:text-lg lg:text-xl xl:text-2xl text-gray-700'>
                            We ensure you for Secured Payment system, your hard work your Money.
                        </p>
                    </div>
                    <div className='flex-1'>

                    <img src="/Online transactions-bro.png" alt="" className='h-[200px] md:h-[280px] lg:h-full object-cover'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hire;