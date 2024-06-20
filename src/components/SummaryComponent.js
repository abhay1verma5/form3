import React from 'react';

const SummaryComponent = ({ data }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="text-xl font-medium text-blue-900 text-center dark:text-white mb-4">Form Summary</h5>
        <div className="space-y-4">
          <p className="text-lg font-semibold text-gray-900 dark:text-white"><strong>Full Name:</strong> {data.fullName}</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white"><strong>Email:</strong> {data.email}</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white"><strong>Phone Number:</strong> {data.phoneNumber}</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white"><strong>Position:</strong> {data.position}</p>

          {(data.position === 'Developer' || data.position === 'Designer') && (
            <p className="text-lg font-semibold text-gray-900 dark:text-white"><strong>Relevant Experience (Years):</strong> {data.relevantExperience}</p>
          )}

          {data.position === 'Designer' && (
            <p className="text-lg font-semibold text-gray-900 dark:text-white"><strong>Portfolio URL:</strong> {data.portfolioURL}</p>
          )}

          {data.position === 'Manager' && (
            <p className="text-lg font-semibold text-gray-900 dark:text-white"><strong>Management Experience:</strong> {data.managementExperience}</p>
          )}

          <p className="text-lg font-semibold text-gray-900 dark:text-white"><strong>Skills:</strong> {data.skills.join(', ')}</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white"><strong>Preferred Interview Time:</strong> {data.interviewTime}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryComponent;
