

export default function PlayerHomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide text-center mb-4">
        Welcome to ScoutEnt
      </h1>
      <p className="text-lg text-center max-w-md text-gray-300 mb-8">
        This is your personalized dashboard. Upload your videos, track your progress, and connect with scouts.
      </p>
      <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
        Upload Your Video
      </button>
      <div className="absolute bottom-0 w-full z-10">
                <Footer />
      </div>
    </div>
  );
}