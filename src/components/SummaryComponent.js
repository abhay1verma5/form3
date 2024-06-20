import React from 'react';

const SummaryComponent = ({ data, additionalQuestions }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="text-xl font-medium text-blue-900 text-center dark:text-white mb-4">Form Summary</h5>
        <div className="space-y-4">
          <p className="text-lg font-semibold text-blue-600 dark:text-blue-300"><strong>Full Name:</strong> <span className="text-gray-900 dark:text-white">{data.fullName}</span></p>
          <p className="text-lg font-semibold text-blue-600 dark:text-blue-300"><strong>Email:</strong> <span className="text-gray-900 dark:text-white">{data.email}</span></p>
          <p className="text-lg font-semibold text-blue-600 dark:text-blue-300"><strong>Survey Topic:</strong> <span className="text-gray-900 dark:text-white">{data.surveyTopic}</span></p>

          {data.surveyTopic === 'Technology' && (
            <>
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-300"><strong>Favorite Programming Language:</strong> <span className="text-gray-900 dark:text-white">{data.favoriteProgrammingLanguage}</span></p>
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-300"><strong>Years of Experience:</strong> <span className="text-gray-900 dark:text-white">{data.yearsOfExperience}</span></p>
            </>
          )}

          {data.surveyTopic === 'Health' && (
            <>
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-300"><strong>Exercise Frequency:</strong> <span className="text-gray-900 dark:text-white">{data.exerciseFrequency}</span></p>
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-300"><strong>Diet Preference:</strong> <span className="text-gray-900 dark:text-white">{data.dietPreference}</span></p>
            </>
          )}

          {data.surveyTopic === 'Education' && (
            <>
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-300"><strong>Highest Qualification:</strong> <span className="text-gray-900 dark:text-white">{data.highestQualification}</span></p>
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-300"><strong>Field of Study:</strong> <span className="text-gray-900 dark:text-white">{data.fieldOfStudy}</span></p>
            </>
          )}

          <p className="break-all text-lg font-semibold text-blue-600 dark:text-blue-300"><strong>Feedback:</strong> <span className="text-gray-900 dark:text-white">{data.feedback}</span></p>

          {additionalQuestions && (
            <>
              <h6 className="text-lg font-medium text-blue-900 dark:text-white mt-4">Additional Questions</h6>
              {additionalQuestions.map((question, index) => (
                <div key={index} className="p-3 border border-blue-600 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-300">{question}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SummaryComponent;
