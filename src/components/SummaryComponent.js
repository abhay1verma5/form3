import React from 'react';

const SummaryComponent = ({ data }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Form Summary</h5>
        <div className="space-y-4">
          <p className="text-lg font-semibold text-gray-900 dark:text-white"><strong>Name:</strong> {data.name}</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white"><strong>Email:</strong> {data.email}</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white"><strong>Age:</strong> {data.age}</p>
          {data.attendingWithGuest && (
            <p className="text-lg font-semibold text-gray-900 dark:text-white"><strong>Guest Name:</strong> {data.guestName}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SummaryComponent;
