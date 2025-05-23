import React, { useEffect, useState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from 'react-router';

const FeaturedTask = () => {
    const [featureTask, setFeatureTask] = useState([]);

    useEffect(() => {
        fetch('https://server-side-a10-blue.vercel.app/freelance/recent')
        .then(res => res.json())
        .then(data => setFeatureTask(data))
    }, []);
    return (
        <div className='my-8 md:my-12 lg:my-18 grid grid-cols-1 bg-gray-50 px-2 lg:px-4 rounded py-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-8'>
            <h1 className='sm:col-span-2 md:col-span-3 xl:col-span-4 my-3 md:my-6 xl:my-12 text-xl md:text-2xl xl:text-4xl font-semibold text-gray-700 '>
                Featured Task
            </h1>
            {
                featureTask <= 0? <div className='col-span-full text-red-500'>
                  <p className='text-lg md:text-2xl xl:text-3xl text-center font-semibold'>
                    There is no task available for featured
                  </p>
                </div>: featureTask.map(task => <div className='w-full border hover:border-2 px-2 py-4  flex flex-col justify-between rounded border-gray-200 transition hover:shadow-2xl ' key={task._id}>
                <h2 className={`${task.category === 'web development'?'text-green-800':'text-gray-800'} text-lg lg:text-2xl font-semibold`}>
                  {task.title}
                </h2>
                <p className='mt-2 md:mt-4 font-medium text-gray-800'>
                  {task.description}
                </p>
                <p className='mt-2 md:mt-6 text-gray-600 text-sm'>
                  Category: {task.category}
                </p>
                <div className=' mt-1 md:mt-2 flex flex-wrap justify-between'>
                <p className='text-xs font-bold text-amber-800'>
                  Budget: ${task.budget}
                </p>
                <p className='text-gray-700'>
                  {new Date(task.deadline).toISOString().split("T")[0]}
                </p>
                </div>
                <Link to={`/task-details/${task._id}`}  className='mt-5 flex items-center border justify-center rounded-4xl cursor-pointer w-full py-2 px-4 text-gray-800'>
                  See Details <MdOutlineArrowOutward />
                </Link>
              </div>)
            }
        </div>
    );
};

export default FeaturedTask;