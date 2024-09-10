import React, { useState, useEffect } from "react";
import ProductsData from "../DataProduct/DataProduct"; // Adjust the path as needed
import { FaStar } from "react-icons/fa";

const Search = ({ searchTerm }) => {
  const [filteredProducts, setFilteredProducts] = useState(ProductsData);

  useEffect(() => {
    if (searchTerm) {
      const results = ProductsData.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts(ProductsData);
    }

    // Cleanup function (optional, if needed)
    return () => {
      setFilteredProducts(ProductsData);
    };
  }, [searchTerm]);

  return (
    <div className="p-8 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-2xl mx-auto">
        {/* Display filtered products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 mt-8 place-items-center">
          {filteredProducts.length ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-third dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] p-4"
              >
                {/* Image section */}
                <div className="h-[150px] flex justify-center items-center">
                  <img
                    src={product.img || "fallback-image-url"} // Placeholder if img is missing
                    alt={product.title}
                    className="max-w-[170px] transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                    onError={(e) => {
                      e.target.src = "fallback-image-url";
                    }} // Fallback image
                  />
                </div>

                {/* Details section */}
                <div className="text-center">
                  {/* Star rating */}
                  <div className="w-full flex items-center justify-center gap-1 mb-2">
                    {Array(product.rating || 4)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} className="text-yellow-500" />
                      ))}
                  </div>
                  <h1 className="text-xl font-bold">{product.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
