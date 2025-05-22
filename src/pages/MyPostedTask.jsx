import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth-context/AuthProvider";
import {
  MdOutlineArrowOutward,
  MdOutlineModeEditOutline,
} from "react-icons/md";
import { BiData } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";

const MyPostedTask = () => {
  const [postedTask, setPostedTask] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://server-side-a10-blue.vercel.app/freelance?userEmail=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setPostedTask(data));
    }
    document.title = "Freelance Task MP | My Post";
  }, [user]);

  const handleBidShow = (id) => {
    fetch(`https://server-side-a10-blue.vercel.app/bidscount/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const count = data?.bidsCount || 0;
        toast.success(`Total bids: ${count}`);
      });
  };

  const handleDeleteTask = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-side-a10-blue.vercel.app/freelance/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });

              const remainingTask = postedTask.filter(
                (task) => task._id !== id
              );
              setPostedTask(remainingTask);
            }
          });
      }
    });
  };
  return (
    <div className="max-w-3xl mx-auto mt-2 md:mt-8 lg:mt-12 bg-gray-50 rounded">
      {postedTask.length < 1 ? (
        <div className="min-h-[70vh] flex justify-center items-center text-gray-800 rounded">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800">
              ⚠️You didn't add any task yet
            </h2>
            <p className="text-gray-700 font-medium mt-2 md:mt-4">
              Please add task to see your Posted Task here
            </p>
            <p className="text-gray-800 mt-1 md:mt-2">
              For adding task go{" "}
              <button>
                <Link
                  to={"/add-task"}
                  className="flex items-center text-blue-700 hover:text-blue-500 transition hover:underline"
                >
                  Here
                  <MdOutlineArrowOutward />
                </Link>
              </button>
            </p>
            <h4 className="mt-1 md:mt-2 text-base font-medium">Or</h4>
            <p className="text-gray-800 mt-1 md:mt-2">
              Browse task{" "}
              <button>
                <Link
                  className="flex items-center text-blue-700 hover:text-blue-500 transition hover:underline"
                  to={"/browse-task"}
                >
                  Here
                  <MdOutlineArrowOutward />
                </Link>
              </button>
            </p>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto text-gray-700">
          <table className="table">
            <thead className="text-gray-800">
              <tr className="border-b border-gray-300">
                <th>Ttile</th>
                <th>Budget</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {postedTask.map((task, index) => (
                <tr className="border-b  border-gray-300" key={index}>
                  <td className="font-medium">{task.title}</td>
                  <td>${task.budget}</td>
                  <td>{task.category}</td>
                  <td className="flex flex-col gap-2 md:gap-3">
                    <Link
                      to={`/update-task/${task._id}`}
                      className="cursor-pointer"
                    >
                      <MdOutlineModeEditOutline size={18} />
                    </Link>
                    <button
                      className="cursor-pointer"
                      onClick={() => handleDeleteTask(task._id)}
                    >
                      <AiOutlineDelete size={18} />
                    </button>
                    <button
                      onClick={() => handleBidShow(task._id)}
                      className="cursor-pointer"
                    >
                      <BiData size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ToastContainer />
        </div>
      )}
    </div>
  );
};

export default MyPostedTask;
