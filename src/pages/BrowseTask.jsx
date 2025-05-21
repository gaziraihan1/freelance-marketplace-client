import React, { useEffect, } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link, Outlet, useLoaderData } from 'react-router';

const BrowseTask = () => {
     useEffect(() => {
        document.title = "Freelance task MP | Browse Task"
      })

      const allData = useLoaderData()
      console.log(allData)
      


    return (
        <div className='mt-4 md:mt-8 lg:mt-12 flex justify-center items-center min-h-[80vh]'>
          {
            allData.length <= 0 ? <div>
              <h2 className='text-xl md:text-2xl lg:text-3xl text-center font-bold'>
                ⚠️Currently there is no task for Browse
              </h2>
              <p className='mt-3 md:mt-5 text-center'>
                You can add task here <button><Link to={'/add-task'} className='flex items-center text-blue-700 hover:text-blue-500 transition hover:underline'>Here<MdOutlineArrowOutward /></Link></button>
              </p>
            </div>: <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-8'>
            {
              allData.map(data => <div className='border px-2 py-4 max-w-md flex flex-col justify-between rounded border-gray-300' key={data._id}>
                <h2 className={`${data.category === 'web development'?'text-green-800':'text-gray-800'} text-lg lg:text-2xl font-semibold`}>
                  {data.title}
                </h2>
                <p className='mt-2 md:mt-4 font-medium'>
                  {data.description}
                </p>
                <p className='mt-2 md:mt-6 text-gray-600 text-sm'>
                  Category: {data.category}
                </p>
                <div className=' mt-1 md:mt-2 flex flex-wrap justify-between'>
                <p className='text-xs font-bold text-amber-800'>
                  Budget: ${data.budget}
                </p>
                <p>
                  {data.deadline}
                </p>
                </div>
                <Link to={`/task-details/${data._id}`}  className='mt-5 flex items-center border justify-center rounded-4xl cursor-pointer w-full py-2 px-4 '>
                  See Details <MdOutlineArrowOutward />
                </Link>
              </div>)
            }
        </div>
          }
        </div>
    );
};

export default BrowseTask;