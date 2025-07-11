import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="relative flex-grow overflow-hidden">
        
        <video
          src="/videos/scoutent-landing.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        />
        
        <div className="absolute inset-0 bg-black/40" />

        
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-20 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-6xl md:text-7xl font-bold tracking-wide text-center"
          >
            ScoutEnt
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-300 text-lg text-center max-w-md"
          >
            Discover and be discovered. Upload your football or cricket skills and let scouts find you.
          </motion.p>
          <div className="flex flex-col items-center gap-9 mt-6 w-60">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#d4d4d4", color: "#000" }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-black text-white rounded-md py-3 text-xl shadow-md transition duration-300"
              onClick={() => navigate("/login")}
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#d4d4d4", color: "#000" }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-black text-white rounded-md py-3 text-xl shadow-md transition duration-300"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </motion.button>
          </div>
        </div>

        
        <div className="absolute bottom-0 w-full z-10">
          <Footer />
        </div>
      </div>

      
      
    </div>
  );
}
