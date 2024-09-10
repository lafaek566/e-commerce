import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HousesData } from "../DataProduct/DataProduct";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const DetailProduct = ({ onBook }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const productData = HousesData.find((p) => p.id === parseInt(id));
    setProduct(productData);
  }, [id]);

  const handleBackToHome = () => {
    navigate("/");
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`text-yellow-500 ${
            i < rating ? "text-yellow-500" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="container mx-auto p-10">
      {product ? (
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-7">{product.title}</h1>
          <motion.img
            src={product.img}
            alt={product.title}
            className="w-full h-full max-w-md rounded-lg shadow-lg"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <p className="mt-10 text-lg text-gray-700">{product.description}</p>
          <div className="flex mt-2">{renderRatingStars(product.rating)}</div>
          <button
            onClick={() => onBook(product)}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Book Now
          </button>
          <button
            onClick={handleBackToHome}
            className="mt-2 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Back to Product
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailProduct;
