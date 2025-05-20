import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-[80vh] w-full flex justify-center items-center'>
            <span className="loading loading-spinner loading-sm lg:loading-xl"></span>
        </div>
    );
};

export default Loading;