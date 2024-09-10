import React, {
  useState,
  useMemo,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HousesData } from "../DataProduct/DataProduct";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Products = forwardRef(({ searchQuery }, ref) => {
  const [showAll, setShowAll] = useState(false);
  const [noProductsMessage, setNoProductsMessage] = useState(""); // State for notification
  const navigate = useNavigate();

  const filteredProducts = useMemo(() => {
    return HousesData.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.color.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 4);

  const handleToggleView = () => {
    setShowAll(!showAll);
  };

  const handleProductClick = (id) => {
    navigate(`/detail/${id}`);
  };

  useImperativeHandle(ref, () => ({
    scrollToProductId: (id) => {
      const productElement = document.querySelector(`[data-id='${id}']`);
      if (productElement) {
        productElement.scrollIntoView({ behavior: "smooth" });
      }
    },
  }));

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    if (displayedProducts.length === 0) {
      setNoProductsMessage("No products found");
    } else {
      setNoProductsMessage("");
    }
  }, [displayedProducts.length]);

  return (
    <section className="pt-10">
      <div className="container">
        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <p className="text-sm text-fourth" data-aos="fade-up">
            Produk Terlaris untuk Anda
          </p>
          <h1 className="text-3xl font-bold" data-aos="fade-up">
            Produk
          </h1>
          <p className="text-xs text-gray-400" data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi
          </p>
        </div>

        <div>
          {noProductsMessage && (
            <div className="mb-4 p-4 text-white bg-red-500 rounded-md shadow-md text-center">
              <p>{noProductsMessage}</p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {displayedProducts.length > 0
              ? displayedProducts.map((data) => (
                  <motion.div
                    key={data.id}
                    data-id={data.id} // Added data-id for scrolling
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer"
                    whileHover={{
                      scale: 1.1, // Adjust scale for zoom effect
                      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                    }}
                    transition={{ duration: 0.3 }}
                    onClick={() => handleProductClick(data.id)}
                    data-aos="fade-down" // Apply AOS animation
                  >
                    <img
                      src={data.img || "fallback-image-url"}
                      alt={data.title || "Product image"}
                      className="w-70 h-70 object-cover rounded-lg"
                      onError={(e) => {
                        e.target.src = "fallback-image-url";
                      }} // Fallback image if load fails
                    />
                    <div className="text-center mt-4">
                      <h3 className="font-semibold">{data.title}</h3>
                      <p className="text-gray-600">{data.color}</p>
                      <div className="flex justify-center items-center gap-1 mt-1">
                        <FaStar className="text-yellow-500" />
                        <span>{data.rating || "N/A"}</span>
                      </div>
                    </div>
                  </motion.div>
                ))
              : // Removed: No products found message here since it's shown above
                null}
          </div>

          {/* Toggle Button */}
          <div className="flex justify-center mt-10">
            <button
              onClick={handleToggleView}
              className="text-center cursor-pointer bg-third text-black py-1 px-5 rounded-md"
            >
              {showAll ? "Sembunyikan" : "Lihat Semua"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Products;
