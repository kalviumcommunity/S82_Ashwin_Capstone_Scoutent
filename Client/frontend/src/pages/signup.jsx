import { useState } from "react";
import { motion } from "framer-motion";
import axios from "../utils/axiosInstance";
import Footer from "../components/footer";

export default function SignUpPage() {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", { ...formData, role });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen bg-black px-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white text-5xl md:text-7xl font-extrabold tracking-wide text-center mb-8"
      >
        Create Your Account
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col gap-4 w-72"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-3 rounded-md bg-black border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-3 rounded-md bg-black border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="px-4 py-3 rounded-md bg-black border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
        />

        <div className="flex flex-col gap-3 mt-4">
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setRole("player")}
            className={`w-full py-3 rounded-full text-lg font-semibold shadow-md transition duration-300 ${role === "player" ? "bg-white text-black" : "bg-gray-800 text-white hover:bg-gray-700"}`}
          >
            Player
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setRole("scout")}
            className={`w-full py-3 rounded-full text-lg font-semibold shadow-md transition duration-300 ${role === "scout" ? "bg-white text-black" : "bg-gray-800 text-white hover:bg-gray-700"}`}
          >
            Scout
          </motion.button>
        </div>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#d4d4d4" }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-white text-black transition duration-300 rounded-md py-3 text-lg font-semibold shadow-md mt-4"
        >
          Sign Up
        </motion.button>
      </motion.form>
      <div className="absolute bottom-0 w-full z-10">
                <Footer />
              </div>
    </motion.div>
  );
}