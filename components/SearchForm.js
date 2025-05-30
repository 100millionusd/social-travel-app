export function SearchForm({ filters, setFilters }) {
  return (
    <div className="flex flex-wrap gap-4">
      <input
        type="text"
        placeholder="Enter city"
        className="border px-4 py-2 rounded"
        value={filters.location}
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
      />
      <input
        type="date"
        className="border px-4 py-2 rounded"
        value={filters.dates}
        onChange={(e) => setFilters({ ...filters, dates: e.target.value })}
      />
    </div>
  );
}