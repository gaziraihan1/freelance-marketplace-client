import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Auth-context/AuthProvider';
import { MdOutlineModeEditOutline } from "react-icons/md";
import { BiData } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router';
import { toast } from 'react-toastify';

const MyPostedTask = () => {
    const [postedTask, setPostedTask]= useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        if(user?.email){
            fetch(`http://localhost:5500/freelance?userEmail=${user.email}`)
            .then(res => res.json())
            .then(data => setPostedTask(data))
        }
    }, [user]);

    const handleDeleteTask = id => {
        fetch(`http://localhost:5500/freelance/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => 
        {
            const remainingTask = postedTask.filter(task => task._id !== id);
            setPostedTask(remainingTask)
            if(data.deletedCount) {
                toast.success('Data deletion successfull')
            }
        }
        )
    }
    return (
        <div className='max-w-3xl mx-auto mt-2 md:mt-8 lg:mt-12'>
            <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr className='border-b border-gray-300'>
        <th>Ttile</th>
        <th>Budget</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {
        postedTask.map((task, index) => 
                <tr className='border-b  border-gray-300' key={index}>
                    
        <td>{task.title}</td>
        <td>{task.budget}</td>
        <td>{task.category}</td>
        <td className='flex flex-col gap-2 md:gap-3'>
            <Link to={`/update-task/${task._id}`}  className='cursor-pointer'>
                <MdOutlineModeEditOutline size={18}/>
            </Link>
            <button className='cursor-pointer' onClick={() => handleDeleteTask(task._id)}>
                <AiOutlineDelete size={18}/>
            </button>
            <button className='cursor-pointer'>
                <BiData size={18}/>
            </button>
        </td>
            
      </tr>
        )
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyPostedTask;