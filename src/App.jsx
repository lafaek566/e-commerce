import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Hero from "./components/Hero/Hero";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import DetailProduct from "./components/DetailProduct/DetailProduct";
import { HousesData } from "./components/DataProduct/DataProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Booking from "./components/Booking/Booking";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrollToProductId, setScrollToProductId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const productsRef = useRef(null);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const [bookingProduct, setBookingProduct] = useState(null);

  const handleOpenBooking = (product) => {
    setBookingProduct(product);
  };

  const handleCloseBooking = () => {
    setBookingProduct(null);
  };

  const handleSearchClick = () => {
    const product = HousesData.find(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.color.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (product) {
      setScrollToProductId(product.id);
      setErrorMessage(""); // Clear error message if product is found
    } else {
      setErrorMessage("Product not found");
      setScrollToProductId(null); // Ensure scrollToProductId is cleared if no product is found
    }
  };

  useEffect(() => {
    if (scrollToProductId && productsRef.current) {
      productsRef.current.scrollToProductId(scrollToProductId);
    }
  }, [scrollToProductId]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Router>
        <Navbar
          searchTerm={searchQuery}
          setSearchTerm={setSearchQuery}
          handleOrderPopup={handleOrderPopup}
          onSearchClick={handleSearchClick} // Pass function to Navbar
        />
        <Hero handleOrderPopup={handleOrderPopup} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Products
                  searchQuery={searchQuery}
                  scrollToProductId={scrollToProductId}
                  ref={productsRef}
                />
                {errorMessage && (
                  <div className="absolute top-0 left-0 w-full bg-red-500 text-white text-center py-2">
                    {errorMessage}
                  </div>
                )}
              </>
            }
          />
          <Route
            path="/detail/:id"
            element={<DetailProduct onBook={handleOpenBooking} />}
          />
        </Routes>
        {bookingProduct && (
          <Booking product={bookingProduct} onClose={handleCloseBooking} />
        )}
        <TopProducts handleOrderPopup={handleOrderPopup} />
        <Banner />
        <Subscribe />
        <Testimonials />
        <ScrollButton />
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </Router>
    </div>
  );
};

export default App;
