export function HotelCard({ hotel }) {
  return (
    <div className="border rounded-xl shadow p-4">
      <h3 className="text-lg font-semibold">{hotel.name}</h3>
      <p className="text-gray-600">{hotel.description}</p>
    </div>
  );
}