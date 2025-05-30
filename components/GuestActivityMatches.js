export function GuestActivityMatches({ location, activities }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">Potential Matches</h2>
      <p>
        {activities.length > 0
          ? `Showing guests in ${location} interested in: ${activities.join(', ')}`
          : 'Select activities to see matches.'}
      </p>
    </div>
  );
}