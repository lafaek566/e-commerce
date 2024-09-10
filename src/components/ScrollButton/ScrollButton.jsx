import React from "react";
import { motion } from "framer-motion";

const ScrollMouseButton = () => {
  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Fungsi untuk scroll ke bawah
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-center">
      {/* Tombol Mouse dengan anak panah Scroll Up */}
      <motion.div
        onClick={scrollToTop}
        className="mouse-container"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }} // Animasi mouse bergerak naik
        transition={{ repeat: Infinity, duration: 1.5 }} // Ulang animasi
        whileHover={{ scale: 1.2 }} // Animasi saat hover
        whileTap={{ scale: 0.9 }} // Animasi saat klik
        style={styles.mouseShape}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="black"
          className="arrow-up"
          viewBox="0 0 24 24"
          style={styles.arrowUp}
        >
          <path d="M12 4l-8 8h16l-8-8z" />
        </svg>
      </motion.div>

      {/* Tombol Mouse dengan anak panah Scroll Down */}
      <motion.div
        onClick={scrollToBottom}
        className="mouse-container"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }} // Animasi mouse bergerak turun
        transition={{ repeat: Infinity, duration: 1.5 }} // Ulang animasi
        whileHover={{ scale: 1.2 }} // Animasi saat hover
        whileTap={{ scale: 0.9 }} // Animasi saat klik
        style={styles.mouseShape}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="black"
          className="arrow-down"
          viewBox="0 0 24 24"
          style={styles.arrowDown}
        >
          <path d="M12 20l8-8H4l8 8z" />
        </svg>
      </motion.div>
    </div>
  );
};

const styles = {
  mouseShape: {
    width: "20px",
    height: "30px",
    border: "2px solid black", // Outline mouse
    borderRadius: "50px", // Membentuk oval seperti mouse
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px", // Jarak antara tombol
    cursor: "pointer",
    backgroundColor: "#f0f0f0", // Warna background mouse
  },
  arrowUp: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transformOrigin: "center",
  },
  arrowDown: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transformOrigin: "center",
  },
};

export default ScrollMouseButton;
