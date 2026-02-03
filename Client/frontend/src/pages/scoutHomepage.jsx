import Footer from "../components/footer";

export default function ScoutHomePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 min-h-screen bg-black text-white px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide text-center mb-4">
        Welcome to ScoutEnt!
      </h1>
      <p className="text-lg text-center max-w-md text-gray-300 mb-8">
        Find player for your team. Discover talents and grow together.
      </p>
      <button className="bg-white text-black px-6 py-3 gap-3 rounded-md font-semibold hover:bg-gray-200 transition">
        Go to Scout point
      </button>

      <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
        View Messages
      </button>
      <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
      </button>
      <div className="absolute bottom-0 w-full z-10">
        <Footer />
      </div>
    </div>
  );
}