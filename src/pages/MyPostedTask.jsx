import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Auth-context/AuthProvider';

const MyPostedTask = () => {
    const [postedTask, setPostedTask]= useState([]);
    const {user} = useContext(AuthContext);
    const {email} = user;

    useEffect(() => {
        fetch(`http://localhost:5500/freelance?userEmail=${email}`)
        .then(res => res.json())
        .then(data => setPostedTask(data))
    }, [email]);
    console.log(postedTask)
    return (
        <div className='max-w-3xl mx-auto grid grid-cols-1 mt-2 md:mt-8 lg:mt-12'>
            
        </div>
    );
};

export default MyPostedTask;