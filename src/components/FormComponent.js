import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';
import SummaryComponent from './SummaryComponent';

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.age) {
    errors.age = 'Age is required';
  } else if (values.age <= 0) {
    errors.age = 'Age must be greater than 0';
  }

  if (values.attendingWithGuest && !values.guestName) {
    errors.guestName = 'Guest name is required';
  }

  return errors;
};

const FormComponent = () => {
  const [submittedData, setSubmittedData] = useState(null);
const [loading,setloading]=useState(true)
  const { values, errors, handleChange, handleSubmit } = useForm(
    {
      name: '',
      email: '',
      age: '',
      attendingWithGuest: false,
      guestName: '',
    },
    validate
  );

  const onSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(values);
      setloading(false)
    }
  };

  return (
    <>
    {loading?<div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-sm mx-auto bg-white p-8 rounded-lg shadow-md dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-5 text-gray-900 dark:text-white">Registration Form</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="John Doe" 
              value={values.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="name@example.com" 
              value={values.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Age</label>
            <input 
              type="number" 
              id="age" 
              name="age" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="25" 
              value={values.age}
              onChange={handleChange}
              required
            />
            {errors.age && <p className="text-red-500 text-xs mt-2">{errors.age}</p>}
          </div>

          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input 
                id="attendingWithGuest" 
                name="attendingWithGuest" 
                type="checkbox" 
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" 
                checked={values.attendingWithGuest}
                onChange={handleChange}
              />
            </div>
            <label htmlFor="attendingWithGuest" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Are you attending with a guest?</label>
          </div>

          {values.attendingWithGuest && (
            <div className="mb-5">
              <label htmlFor="guestName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Guest Name</label>
              <input 
                type="text" 
                id="guestName" 
                name="guestName" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Jane Doe" 
                value={values.guestName}
                onChange={handleChange}
                required
              />
              {errors.guestName && <p className="text-red-500 text-xs mt-2">{errors.guestName}</p>}
            </div>
          )}

          <button 
            type="submit" 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>

       
    </div>
    </div>:<SummaryComponent data={submittedData}/>}
    </>
  );
};

export default FormComponent;
