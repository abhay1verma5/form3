import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import SummaryComponent from './SummaryComponent';

const FormComponent = () => {
  const validate = (values) => {
    let errors = {};

    if (!values.fullName) {
      errors.fullName = 'Full Name is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(values.phoneNumber)) {
      errors.phoneNumber = 'Phone Number must be exactly 10 digits';
    }

    if ((values.position === 'Developer' || values.position === 'Designer') && !values.relevantExperience) {
      errors.relevantExperience = 'Relevant Experience is required';
    } else if (values.relevantExperience <= 0) {
      errors.relevantExperience = 'Relevant Experience must be greater than 0';
    }

    if (values.position === 'Designer' && !values.portfolioURL) {
      errors.portfolioURL = 'Portfolio URL is required';
    } else if (values.portfolioURL && !/^https?:\/\/\S+$/.test(values.portfolioURL)) {
      errors.portfolioURL = 'Portfolio URL must be a valid URL';
    }

    if (values.position === 'Manager' && !values.managementExperience) {
      errors.managementExperience = 'Management Experience is required';
    }

    if (!values.skills || values.skills.length === 0) {
      errors.skills = 'At least one skill must be selected';
    }

    if (!values.interviewTime) {
      errors.interviewTime = 'Preferred Interview Time is required';
    }

    return errors;
  };

  const { values, errors, handleChange, handleSubmit, setFieldValue } = useForm(
    {
      fullName: '',
      email: '',
      phoneNumber: '',
      position: '',
      relevantExperience: '',
      portfolioURL: '',
      managementExperience: '',
      skills: [],
      interviewTime: '',
    },
    validate
  );

  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (e) => {
    if (handleSubmit(e)) {
      setSubmittedData(values);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      {submittedData ? (
        <SummaryComponent data={submittedData} />
      ) : (
        <div className="w-full max-w-lg p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={onSubmit} className="space-y-6">
            <h5 className="text-xl font-medium text-blue-500 text-center dark:text-white">Application Form</h5>

            <div>
              <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                value={values.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-2">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                value={values.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && <p className="text-red-500 text-xs mt-2">{errors.phoneNumber}</p>}
            </div>

            <div>
              <label htmlFor="position" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Applying for Position</label>
              <select
                id="position"
                name="position"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                value={values.position}
                onChange={handleChange}
              >
                <option value="">Select a position</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Manager">Manager</option>
              </select>
              {errors.position && <p className="text-red-500 text-xs mt-2">{errors.position}</p>}
            </div>

            {(values.position === 'Developer' || values.position === 'Designer') && (
              <div>
                <label htmlFor="relevantExperience" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Relevant Experience (Years)</label>
                <input
                  type="number"
                  id="relevantExperience"
                  name="relevantExperience"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  value={values.relevantExperience}
                  onChange={handleChange}
                />
                {errors.relevantExperience && <p className="text-red-500 text-xs mt-2">{errors.relevantExperience}</p>}
              </div>
            )}

            {values.position === 'Designer' && (
              <div>
                <label htmlFor="portfolioURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Portfolio URL</label>
                <input
                  type="text"
                  id="portfolioURL"
                  name="portfolioURL"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  value={values.portfolioURL}
                  onChange={handleChange}
                />
                {errors.portfolioURL && <p className="text-red-500 text-xs mt-2">{errors.portfolioURL}</p>}
              </div>
            )}

            

            {values.position === 'Manager' && (
              <div>
                <label htmlFor="managementExperience" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Management Experience</label>
                <input
                  type="text"
                  id="managementExperience"
                  name="managementExperience"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  value={values.managementExperience}
                  onChange={handleChange}
                 
                />
                {errors.managementExperience && <p className="text-red-500 text-xs mt-2">{errors.managementExperience}</p>}
              </div>
            )}

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional Skills</label>
              <div className="flex flex-wrap text-white">
                {['JavaScript', 'CSS', 'Python'].map((skill) => (
                  <label key={skill} className="mr-4">
                    <input
                      type="checkbox"
                      name="skills"
                      value={skill}
                      checked={values.skills.includes(skill)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFieldValue('skills', [...values.skills, skill]);
                        } else {
                          setFieldValue('skills', values.skills.filter((s) => s !== skill));
                        }
                      }}
                    />
                    {skill}
                  </label>
                ))}
              </div>
              {errors.skills && <p className="text-red-500 text-xs mt-2">{errors.skills}</p>}
            </div>

            <div>
              <label htmlFor="interviewTime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preferred Interview Time</label>
              <input
                type="datetime-local"
                id="interviewTime"
                name="interviewTime"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                value={values.interviewTime}
                onChange={handleChange}
               
              />
              {errors.interviewTime && <p className="text-red-500 text-xs mt-2">{errors.interviewTime}</p>}
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
