import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import SummaryComponent from './SummaryComponent';
import axios from "axios"
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

    if (!values.surveyTopic) {
      errors.surveyTopic = 'Survey Topic is required';
    }

    if (values.surveyTopic === 'Technology') {
      if (!values.favoriteProgrammingLanguage) {
        errors.favoriteProgrammingLanguage = 'Favorite Programming Language is required';
      }
      if (!values.yearsOfExperience) {
        errors.yearsOfExperience = 'Years of Experience is required';
      }
    } else if (values.surveyTopic === 'Health') {
      if (!values.exerciseFrequency) {
        errors.exerciseFrequency = 'Exercise Frequency is required';
      }
      if (!values.dietPreference) {
        errors.dietPreference = 'Diet Preference is required';
      }
    } else if (values.surveyTopic === 'Education') {
      if (!values.highestQualification) {
        errors.highestQualification = 'Highest Qualification is required';
      }
      if (!values.fieldOfStudy) {
        errors.fieldOfStudy = 'Field of Study is required';
      }
    }

    if (!values.feedback || values.feedback.length < 50) {
      errors.feedback = 'Feedback is required and must be at least 50 characters';
    }

    return errors;
  };

  const { values, errors, handleChange, handleSubmit, setFieldValue } = useForm(
    {
      fullName: '',
      email: '',
      surveyTopic: '',
      favoriteProgrammingLanguage: '',
      yearsOfExperience: '',
      exerciseFrequency: '',
      dietPreference: '',
      highestQualification: '',
      fieldOfStudy: '',
      feedback: '',
    },
    validate
  );

  const [submittedData, setSubmittedData] = useState(null);
  const [additionalQuestions, setAdditionalQuestions] = useState(null);

  const fetchAdditionalQuestions = async () => {
    // Mock API call for additional questions
    const options = {
      method: 'GET',
      url: 'https://current-affairs-of-india.p.rapidapi.com/recent',
      headers: {
        'x-rapidapi-key': '075c7e168cmshe5622bc451e355ap1041f4jsn4c5b4f4bde54',
        'x-rapidapi-host': 'current-affairs-of-india.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      setAdditionalQuestions(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
   
  };

  const onSubmit = (e) => {
    handleSubmit(e, () => {
      fetchAdditionalQuestions().then(() => {
        setSubmittedData(values);
      });
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      {submittedData ? (
        <SummaryComponent data={submittedData} additionalQuestions={additionalQuestions} />
      ) : (
        <div className="w-full max-w-lg p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={onSubmit} className="space-y-6">
            <h5 className="text-xl font-medium text-gray-900 text-center dark:text-white">Survey Form</h5>

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
              <label htmlFor="surveyTopic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Survey Topic</label>
              <select
                id="surveyTopic"
                name="surveyTopic"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                value={values.surveyTopic}
                onChange={handleChange}
              >
                <option value="">Select a topic</option>
                <option value="Technology">Technology</option>
                <option value="Health">Health</option>
                <option value="Education">Education</option>
              </select>
              {errors.surveyTopic && <p className="text-red-500 text-xs mt-2">{errors.surveyTopic}</p>}
            </div>

            {values.surveyTopic === 'Technology' && (
              <>
                <div>
                  <label htmlFor="favoriteProgrammingLanguage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Favorite Programming Language</label>
                  <select
                    id="favoriteProgrammingLanguage"
                    name="favoriteProgrammingLanguage"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    value={values.favoriteProgrammingLanguage}
                    onChange={handleChange}
                  >
                    <option value="">Select a language</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                    <option value="C#">C#</option>
                  </select>
                  {errors.favoriteProgrammingLanguage && <p className="text-red-500 text-xs mt-2">{errors.favoriteProgrammingLanguage}</p>}
                </div>

                <div>
                  <label htmlFor="yearsOfExperience" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Years of Experience</label>
                  <input
                    type="number"
                    id="yearsOfExperience"
                    name="yearsOfExperience"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    value={values.yearsOfExperience}
                    onChange={handleChange}
                  />
                  {errors.yearsOfExperience && <p className="text-red-500 text-xs mt-2">{errors.yearsOfExperience}</p>}
                </div>
              </>
            )}

            {values.surveyTopic === 'Health' && (
              <>
                <div>
                  <label htmlFor="exerciseFrequency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Exercise Frequency</label>
                  <select
                    id="exerciseFrequency"
                    name="exerciseFrequency"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    value={values.exerciseFrequency}
                     onChange={handleChange}
                  >
                    <option value="">Select frequency</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Rarely">Rarely</option>
                  </select>
                  {errors.exerciseFrequency && <p className="text-red-500 text-xs mt-2">{errors.exerciseFrequency}</p>}
                </div>

                <div>
                  <label htmlFor="dietPreference" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Diet Preference</label>
                  <select
                    id="dietPreference"
                    name="dietPreference"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    value={values.dietPreference}
                    onChange={handleChange}
                  >
                    <option value="">Select diet preference</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Non-Vegetarian">Non-Vegetarian</option>
                  </select>
                  {errors.dietPreference && <p className="text-red-500 text-xs mt-2">{errors.dietPreference}</p>}
                </div>
              </>
            )}

            {values.surveyTopic === 'Education' && (
              <>
                <div>
                  <label htmlFor="highestQualification" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Highest Qualification</label>
                  <select
                    id="highestQualification"
                    name="highestQualification"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    value={values.highestQualification}
                    onChange={handleChange}
                  >
                    <option value="">Select qualification</option>
                    <option value="High School">High School</option>
                    <option value="Bachelor's">Bachelor's</option>
                    <option value="Master's">Master's</option>
                    <option value="PhD">PhD</option>
                  </select>
                  {errors.highestQualification && <p className="text-red-500 text-xs mt-2">{errors.highestQualification}</p>}
                </div>

                <div>
                  <label htmlFor="fieldOfStudy" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Field of Study</label>
                  <input
                    type="text"
                    id="fieldOfStudy"
                    name="fieldOfStudy"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    value={values.fieldOfStudy}
                    onChange={handleChange}
                  />
                  {errors.fieldOfStudy && <p className="text-red-500 text-xs mt-2">{errors.fieldOfStudy}</p>}
                </div>
              </>
            )}

            <div>
              <label htmlFor="feedback" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Feedback</label>
              <textarea
                id="feedback"
                name="feedback"
                rows="4"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                value={values.feedback}
                onChange={handleChange}
              />
              {errors.feedback && <p className="text-red-500 text-xs mt-2">{errors.feedback}</p>}
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
