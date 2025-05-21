import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Auth-context/AuthProvider";
import DatePicker from "react-datepicker";
import { toast, ToastContainer } from "react-toastify";

const UpdateTask = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const [deadline, setDeadline] = useState(data?.deadline);
  const [budget, setBudget] = useState(data?.budget);
  const [category, setCategory] = useState(data?.category);
  const [title, setTitle] = useState(data?.title);
  const [description, setDescription] = useState(data?.description);

//   console.log(title, selectedDate, category);

  const handleUpdateTask = (e) => {
    e.preventDefault();
    const updatedData = {
        title,
        deadline,
        budget,
        category,
        description
    }

    fetch(`http://localhost:5500/freelance/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.modifiedCount){
            toast.success('Task updated successfull')
        };
      })
      .catch(() => {
        toast.error('Data did not updated')
      });
  };
  return (
    <div className="min-h-[90vh] flex justify-center items-center py-8">
      <form className="w-full" onSubmit={handleUpdateTask}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Task Title</label>
            <input
              type="text"
              name="title"
              className="input w-full"
              placeholder="Task Title"
              defaultValue={data.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Category</label>
            <select
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              defaultValue={category}
              className="select select-bordered w-full"
            >
              <option value="web development">Web Development</option>
              <option value="design">Design</option>
              <option value="writing">Writing</option>
              <option value="marketing">Marketing</option>
            </select>
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Description</label>
            <input
              type="text"
              name="description"
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input w-full"
              placeholder="What needs to be done"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Deadline</label>
            <DatePicker
              value={deadline}
              selected={deadline}
              onChange={(date) =>
                setDeadline(date.toLocaleDateString("en-CA"))
              }
              className="input w-full"
              placeholderText="Select a date"
              dateFormat="yyyy-MM-dd"
              isClearable
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Budget</label>
            <input
              type="number"
              name="budget"
              className="input w-full"
              placeholder="Budget"
              defaultValue={budget}
              onChange={e => setBudget(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">User Email</label>
            <input
              type="text"
              value={user.email}
              name="userEmail"
              className="input w-full"
              placeholder="User Email"
              readOnly
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
          <label className="label">User Name</label>
          <input
            type="text"
            value={user.displayName || ""}
            name="userName"
            className="input w-full"
            placeholder="User Name"
            readOnly
          />
        </fieldset>

        <input type="submit" className="btn w-full" value="Update Task" />
        <ToastContainer />
      </form>
    </div>
  );
};

export default UpdateTask;
