import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { AuthContext } from "../Auth-context/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const AddTask = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [category, setCategory] = useState('web');
  const { user} = useContext(AuthContext);
  console.log(category);

  const handleAddTask = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data)

    fetch('http://localhost:5500/freelance', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
            toast.success('Task added successfully')
        }
    })
  }
  return (
    <div className="min-h-[90vh] flex justify-center items-center">
      <form className="w-full" onSubmit={handleAddTask}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Task Title</label>
            <input
              type="text"
              name="title"
              className="input w-full"
              placeholder="Task Title"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Category</label>
            <select
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="web">Web Development</option>
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
              className="input w-full"
              placeholder="What needs to be done"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Deadline</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
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
            value={user.displayName|| ''}
            name="userName"
            className="input w-full"
            placeholder="User Name"
            readOnly
          />
        </fieldset>

        <input type="submit" className="btn w-full" value="Add Coffee" />
        <ToastContainer />
      </form>
    </div>
  );
};

export default AddTask;
