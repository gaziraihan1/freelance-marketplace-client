import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Auth-context/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const TaskDetails = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    document.title = "Freelance Task MP | Task details";
  });

  const [totalBids, setTotalBids] = useState(0);

  useEffect(() => {
    fetch(
      `https://b11a10-server-side-gaziraihan1.vercel.app/bidscount/${data._id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTotalBids(data.bidsCount || 0);
      });
  }, [data._id]);

  const handleBidsCount = (taskId) => {
    fetch("https://b11a10-server-side-gaziraihan1.vercel.app/bidscount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ taskId }),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Bid counted");

        fetch(
          `https://b11a10-server-side-gaziraihan1.vercel.app/bidscount/${taskId}`
        )
          .then((res) => res.json())
          .then((data) => {
            setTotalBids(data.bidsCount || 0);
          });
      });
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <div className="bg-slate-300 border-2 border-gray-400 py-5 px-3 md:px-6 w-full max-w-lg text-gray-800 rounded">
        <h2>You bid for {totalBids} opportunities.</h2>
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
          Task Name: {data.title}
        </h2>
        <p className="mt-1 md:mt-3 lg:mt-5 text-sm font-medium text-gray-600">
          Description: {data.description}
        </p>
        <h3 className="mt-3 md:mt-5 lg:mt-7 md:text-lg font-semibold text-gray-500">
          Bidder Name: {user.displayName}
        </h3>
        <div className="mt-2 md:mt-4 lg:mt-6 flex flex-wrap justify-between text-sm font-[200]">
          <p className="">Budget: ${data.budget}</p>
          <p>Category: {data.category}</p>
        </div>
        <p className="mt-3 md:mt-4 lg:mt-6 text-sm font-[300] text-gray-600">
          Deadline: {data.deadline}
        </p>
        <button
          onClick={() => handleBidsCount(data._id)}
          className="block w-full py-2 px-6 border border-gray-400 rounded-4xl mt-3 md:mt-5 cursor-pointer"
        >
          Bids
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default TaskDetails;
