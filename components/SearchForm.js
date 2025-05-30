import React from 'react';
export default function SearchForm({ filters, setFilters }) {
  return (
    <div className='flex flex-col sm:flex-row gap-4 mb-4'>
      <input
        type='text'
        placeholder='Enter city'
        value={filters.location}
        onChange={e => setFilters({ ...filters, location: e.target.value })}
        className='border p-2 rounded w-full sm:w-auto'
      />
      <input
        type='date'
        value={filters.dates}
        onChange={e => setFilters({ ...filters, dates: e.target.value })}
        className='border p-2 rounded w-full sm:w-auto'
      />
    </div>
  );
}