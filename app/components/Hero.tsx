"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center bg-[#FF6600]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Background Image */}
      <Image
        src="/bpbd-hero.jpg"
        alt="Tim BPBD siap siaga"
        layout="fill"
        objectFit="cover"
        className="opacity-80"
      />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold drop-shadow-lg"
        >
          Selamat Datang di BPBD Barito Utara
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg md:text-xl font-medium"
        >
          <span className="text-[#FFCC00]">Bersama Kita Membangun Ketangguhan Menghadapi Bencana</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/laporkan-bencana"
            className="bg-[#FF0000] hover:bg-[#CC0000] text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition"
          >
            🚨 Laporkan Bencana
          </a>
          <a
            href="/informasi"
            className="bg-[#0055A4] hover:bg-[#003A70] text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition"
          >
            ℹ️ Lihat Informasi Terkini
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-8 h-8 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
