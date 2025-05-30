import React, { useState, useEffect } from 'react';
import { HotelCard } from "../components/HotelCard";
import { ActivityFilter } from "../components/ActivityFilter";
import { SearchForm } from "../components/SearchForm";
import { GuestActivityMatches } from "../components/GuestActivityMatches";

export default function HomePage() {
  const [hotels, setHotels] = useState([]);
  const [filters, setFilters] = useState({ location: '', dates: '', activities: [] });
  const [loading, setLoading] = useState(false);

  const searchHotels = async () => {
    setLoading(true);
    const res = await fetch('/api/hotels?location=' + filters.location);
    const data = await res.json();
    setHotels(data.hotels);
    setLoading(false);
  };

  useEffect(() => {
    if (filters.location) searchHotels();
  }, [filters]);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-[#10172a] text-white px-6 py-4 shadow flex justify-between items-center">
        <div className="text-xl font-bold">SocialTravel</div>
        <nav className="space-x-4">
          <button className="hover:underline">Login</button>
          <button className="hover:underline">Sign Up</button>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">Book a Stay & Meet Activity Buddies</h1>
        <div className="mb-4">
          <SearchForm filters={filters} setFilters={setFilters} />
        </div>
        <div className="mb-6">
          <ActivityFilter selected={filters.activities} onChange={(activities) => setFilters({ ...filters, activities })} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {loading ? <p>Loading hotels...</p> : hotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>

        <GuestActivityMatches location={filters.location} activities={filters.activities} />
      </main>

      <footer className="bg-[#10172a] text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} SocialTravel. All rights reserved.</p>
      </footer>
    </div>
  );
}