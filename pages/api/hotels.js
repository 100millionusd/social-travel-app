// pages/api/hotels.js - Mock API route for hotel search

export default function handler(req, res) {
  const { location } = req.query;

  const mockHotels = [
    {
      id: 1,
      name: "Hotel Social Paris",
      description: "Connect with fellow travelers!",
      location: "paris",
      activities: ["golf", "cinema", "drinks"]
    },
    {
      id: 2,
      name: "Golf & Stay Resort",
      description: "Perfect for golf lovers.",
      location: "berlin",
      activities: ["golf"]
    },
    {
      id: 3,
      name: "Cinema & Chill",
      description: "Cozy hotel for movie lovers.",
      location: "berlin",
      activities: ["cinema"]
    }
  ];

  const filtered = mockHotels.filter(h =>
    h.location.toLowerCase().includes(location?.toLowerCase() || '')
  );

  res.status(200).json({ hotels: filtered });
}
