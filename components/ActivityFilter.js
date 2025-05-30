import React from 'react';
export default function ActivityFilter({ selected, setSelected }) {
  const activities = ['golf', 'cinema', 'hiking', 'drinks', 'museums'];
  return (
    <div className='flex space-x-2 my-4'>
      {activities.map(act => (
        <button
          key={act}
          className={`px-4 py-2 rounded ${selected.includes(act) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => {
            const newSelected = selected.includes(act)
              ? selected.filter(a => a !== act)
              : [...selected, act];
            setSelected(newSelected);
          }}
        >
          {act}
        </button>
      ))}
    </div>
  );
}