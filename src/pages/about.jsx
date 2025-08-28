import BottomNav from "../components/bottomNav";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-8">
      <h1 className="text-4xl font-bold text-green-600 mb-6">About TourTales</h1>
      <p className="max-w-3xl text-gray-700 text-lg text-center mb-6">
        TourTales is a platform where travelers share their unique travel experiences.
        Connect with like-minded adventurers, discover new destinations, and get inspired
        for your next journey.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-6 w-full max-w-5xl">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Share Stories</h2>
          <p className="text-gray-600">
            Post your travel adventures with photos and detailed experiences.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Discover Destinations</h2>
          <p className="text-gray-600">
            Explore stories from travelers around the world and find new places to visit.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Connect</h2>
          <p className="text-gray-600">
            Interact with fellow travelers, like, comment, and get travel tips.
          </p>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
