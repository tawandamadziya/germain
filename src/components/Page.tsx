import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Germain from '../assets/IMG-20250902-WA0002.jpg';
import Germain1 from '../assets/IMG-20250902-WA0003.jpg';
import Germain2 from '../assets/IMG-20250902-WA0004.jpg';
import Germain3 from '../assets/IMG-20250902-WA0005.jpg';

export default function MemorialSite() {
  const [messages, setMessages] = useState([
    { name: "Alice", text: "Germaine, your laughter filled every room with light. We’ll cherish the joyful memories you left us with forever." },
    { name: "James", text: "You were more than a friend; you were family. Rest peacefully knowing you touched so many lives in the best way possible." },
    { name: "Sophia", text: "The kindness and warmth you showed will never fade from our hearts. Thank you for inspiring us with your compassion." },
  ]);
  const [form, setForm] = useState({ name: "", text: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.text) return;
    setMessages([...messages, form]);
    setForm({ name: "", text: "" });
  };

  // Animation Variants
  const list = {
    visible: { transition: { staggerChildren: 0.2 } },
    hidden: {},
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-green-300 via-green-200 to-white p-6">
        <motion.img
          src={Germain2}
          alt="Memorial"
          className="rounded-full w-56 h-56 object-cover shadow-2xl mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          In Loving Memory of Germaine Kuda Mambera
        </motion.h1>
        <p className="text-xl italic text-gray-700">
          “Forever in our hearts”
        </p>
      </section>

      {/* About */}
      <section className="py-24 px-6 bg-white text-center max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-semibold mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          About Germaine Kuda Mambera
        </motion.h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Germaine Kuda lived a life full of kindness, laughter, and love. He touched
          the hearts of everyone he met and will always be remembered for his
          warm smile and caring nature. His legacy continues through the
          memories shared by friends and family.
        </p>
      </section>

      {/* Gallery */}
      <section className="gallery">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Gallery
        </motion.h2>
        <div className="gallery-grid">
          {[Germain1, Germain, Germain3].map((i) => (
            <motion.img
              key={i}
              src={i}
              alt={`Memory ${i}`}
              className="gallery-image"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </section>

      {/* Memory Wall */}
      <section className="py-24 px-6 bg-white text-center max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-semibold mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Memory Wall
        </motion.h2>

        <form className="flex flex-col gap-4 mb-12" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            placeholder="Share a memory..."
            value={form.text}
            onChange={(e) => setForm({ ...form, text: e.target.value })}
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            rows={4}
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            Post Memory
          </button>
        </form>

        <motion.div
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={list}
        >
          <AnimatePresence>
            {messages.map((m, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-green-50 rounded-xl shadow-md text-left"
                variants={item}
                whileHover={{ scale: 1.02, boxShadow: "0px 8px 25px rgba(0,0,0,0.15)" }}
              >
                <p className="font-bold text-green-800">{m.name}</p>
                <p className="text-gray-700 mt-2">{m.text}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-green-200 text-center">
        <p className="italic text-gray-800">“Gone but never forgotten.”</p>
      </footer>
    </div>
  );
}
