
import React from 'react';

const InitialCard: React.FC = () => {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-8 m-4 w-full max-w-2xl text-center">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-indigo-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      <p className="text-xl text-gray-700">
        버튼을 눌러 선생님을 위한 오늘의 응원을 받아보세요.
      </p>
    </div>
  );
};

export default InitialCard;
