import React from 'react';
export default function HotelCard({ hotel }) {
  return (
    <div className='border rounded p-4 shadow'>
      <h3 className='text-xl font-bold'>{hotel.name}</h3>
      <p>{hotel.description}</p>
    </div>
  );
}